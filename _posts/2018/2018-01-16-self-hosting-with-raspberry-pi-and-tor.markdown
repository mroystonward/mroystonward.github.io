---
title:  "Self Hosting with Raspberry Pi and Tor"
date:   2018-01-16 21:00:00 +1724
toc: true
header:
  teaser: /assets/images/high-tor-500x300.jpg
  overlay_image: /assets/images/high-tor-wide.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [By Photochrom Print Collection [Public domain], via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AMatlock_High_Tor%2C_II.%2C_Derbyshire%2C_England-LCCN2002696696.jpg)"
  image_description: "Matlock High Tor, II., Derbyshire, England"
  show_overlay_excerpt: False
---
A year or so ago I started experimenting with digital self publishing. Having become increasingly politicised with regard to both state and commercial online surveillance I also started questioning the role centralised platforms such as soundcloud and bandcamp play in independent music distribution. I'll write more on this later --- on motivations and failures in my critique/experience --- but for now I wanted to talk about how I set up a Raspberry Pi webserver at home for publishing a Tor hidden service.

My own project, The House Organ, is available on the 'clearweb' at [https://thehouseorgan.xyz](https://thehouseorgan.xyz). I've recently moved it from github to gitlab pages and setup a custom domain for it. I've also maintained a Tor Hidden Service mirror of this site at [tho2f4fceyghjl6s.onion/](tho2f4fceyghjl6s.onion/). The idea behind this is that the site would be censorship resistant and allow for visitors to connect with a degree of anonymity (I doubt that these are very high risks for me personally but there is a political spectrum here that I want to be engaged with). If you want to know more about what Tor is and how it works [https://www.torproject.org/about/overview.html.en](https://www.torproject.org/about/overview.html.en) is a good place to start. I'll save discussion of why one would want to enagge with any of this for a later date

To set up the Tor mirror I have setup a small webserver at home with the site proxied through Tor - all running on a Raspberry Pi.

What follows are notes, self reminders and tips for trying this yourself. I made numerous mistakes on the way so feel free to ask if you encounter any problems, but at the same time this is a rather rough guide and not a step by step tutorial so treat it like a recipe that may need alterations to suit your tastes.

## Setting up a Raspberry Pi

A few notes on this:

1. We're setting up in a basic headless server configuration so we're not attaching a monitor and keyboard to interact with the Raspberry Pi. Instead we'll login via the command line and execute commands. I found that this all took a bit of getting used to but has been useful training for working with servers in general.
2. For the above reasons I'd install Raspbian over NOOBS. Technically, seeing as NOOBS contains Raspbian, you should be able to do all of this with either, but you don't need the extra bloat so I wouldn't bother.
3. I've only done this with Raspberry Pi 2s and 3s. I don't know if it'd work with a Pi zero and an older original Pi model might struggle a little bit if you run other services on it.
4. Whenever I've done this I've generally stuck to Ethernet so haven't had to faff around much with WiFi. The transfer speeds on your local network are going to impact site load speeds over the Internet also so if you can use Ethernet do, but if not don't worry about it.
5. Technically, we're setting up a web server which probably violates your home ISP terms of service. If you started attracting much traffic your ISP might look at this more closely. Theoretically you could bump up to a business plan if needed but please just be aware of any risks you are placing upon yourself.
6. As you're setting up a mini-web-server at home and exposing services to the outside world you should take precautions to ensure these don't get hacked etc. Setting up passwordless login is a very good idea. It sounds like a bad idea but it relies on a cryptographic key for login so it's a lot harder to hack than a password is. Setting up a firewall is essential and only expose the ports/services needed. Software such as fail2ban is worth implementing too, so as to block any suspicious activity.

So, caveats and notes out of the way I'd recommend this guide - [RRaspberry Pi 2: Basic setup without any cables (headless)](https://web.archive.org/web/20180111082324/http://blog.self.li/post/63281257339/raspberry-pi-part-1-basic-setup-without-cables) (Wayback Machine Link as site doesn't support HTTPS) - is easy to follow and covers basic security such as setting up a firewall and passwordless login.

It's likely getting a bit old now so do check the official Raspberry Pi guides etc. too.

## Installing Tor

First some more caveats. We're using Tor to serve a webpage as a hidden service. To access these hidden services visitors need to use Tor browser. Tor browser helps with anonymity and privacy but if your use case/threat model is higher then you'll need to look into this more deeply and make habitual changes. Also, we're running the server from home so whilst we're hosting a 'hidden service' we're not doing it in an anonymous manner. Tor has an undeserved reputation for unsavoury and illegal activities but if you were wanting to host anything remotely illegal I don't think hosting a hidden service at home would be a very sensible way to do it. Also, on a final note, I'm based in the UK where there aren't currently any legal restrictions on using Tor, your local situation might differ.

Right, let's get Tor installed. We need to add Tor's package repositories.

This will open a new file for us to paste in the links.

```
nano /etc/apt/sources.list.d/torproject.list
```
When I set up Raspbian it was on version Jessie so I added:

```
deb http://deb.torproject.org/torproject.org jessie main
deb-src http://deb.torproject.org/torproject.org jessie main
```
If you're on stretch etc. you can get the package details here - [https://www.torproject.org/docs/debian.html.en#ubuntu](https://www.torproject.org/docs/debian.html.en#ubuntu)

```ctrl+x``` to exit and save nano.

Now run these 2 commands to set-up gpg keys to validate these sources.

```
gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89

gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -
```

Next we need to update the package manager:

```
sudo apt-get update
```

And install Tor:

```
sudo apt-get install tor
```

## Setting up a Hidden Service

Now we need to configure some settings in Tor. The config file is called 'torrc' and is located at /etc/tor/torrc

```
sudo nano /etc/tor/torrc
```

Underneath where it says:

```
############### This section is just for location-hidden services ###
```
You need to add (or uncomment/edit) the lines:

```
HiddenServiceDir /var/lib/tor/hidden_service/
HiddenServicePort 80 127.0.0.1:7658
```

The first line can be any folder writable by Tor.

The second line can be unpicked a bit more:

```HiddenServicePort 80``` means that Tor will proxy to this virtual port. You could change it but I can't think of many use cases where you'd need to so I'd stick with the standard configuration.

```127.0.0.1``` specifies proxying internal connections. When we set up the web server this means it will proxy the sites we set up through Tor.

```:7658``` This is the internal port we're proxying. My web server is set to use this port. You can change this but your web server will need setting up to be the same as whatever you choose here.

```ctrl+x``` to exit and save.

Now restart Tor

```
sudo service tor restart
```

Providing everything worked and Tor restarted it will have created some files in the /var/lib/tor/hidden_service/ folder.

```private_key``` is the private key pair and you should back this up and shouldn't share it with anyone. You shouldn't need to interact with this file though.

```hostname``` is your onion address, e.g. duskgytldkxiuqc6.onion. This is the address you'll put into Tor browser to visit your site.

The hidden_service folder is pretty locked down security wise (which is sensible) so:

```
sudo cat /var/lib/tor/hidden_service/hostname
```

To display the onion address.

## Setting up a Webserver

There's more than one way of doing this. Tor doesn't recommend Apache as it's a very large, complex software with a lot of potential for misconfiguration and security leaks. In our use case - a home based DIY Raspberry Pi server - I'm not sure how significant this is. Still, I opted for lighttpd as it's fairly simple and lightweight.

```
sudo apt-get install lighttpd
```

I made some additional folders to structure multiple sites as follows. Replace foobar with whatever makes sense for your site name etc.

```
sudo mkdir /var/www/html
sudo mkdir /var/www/html/foobar
```

Now we change the owner and permissions of the folder and add pi to the www-data group.
```
sudo chown -R www-data:www-data /var/www/html/foobar
sudo chmod 775 /var/www/html/foobar
sudo usermod -a -G www-data pi
```

Now put your website files into the folder /var/www/html/foobar

If you don't have any files for this yet you could make a basic index.html page:

```
echo '<h1>Hello, World!</h1>' > /var/www/html/foobar/index.php
```

Now we need to edit the lighttpd config file:

```
sudo nano /etc/lighttpd/lighttpd.conf
```

change ```server.document-root``` to (or whatever folder structure you chose):
```
server.document-root        = "/var/www/html"
```

and change ```server.port``` to the following (or whatever port you chose in the torrc config above):
```
server.port                 = 7658
```

Now we're going to add our website as a virtual host. The main reason is so that we can add other sites later if we want to. Add the following lines:
```
$HTTP["host"] == "duskgytldkxiuqc6.onion" {
      server.document-root = "/var/www/html/foobar"
}
```

```duskgytldkxiuqc6.onion``` is whatever onion address you got earlier.

```server.document-root``` should point to whichever folder you created earlier and put your web files in.

now restart lighttpd:
```
sudo service lighttpd restart
```

## Opening Ports and Testing it All

Everything should now be setup but our firewall should be blocking access so we need to open up a hole in ufw.

```
sudo ufw allow 7658
```

This should be it, the site doesn't need to be accessible any way other than via Tor so no other ports should need opening (though you probably opened up port 22 in the Raspberry Pi setup so as you can SSH. Make sure you keep this port open or you won't be able to login to your Pi).

Lighttpd is serving your site locally but it isn't accessible externally.

Tor however is proxying this site and serving it as a hidden onion service.

Visiting duskgytldkxiuqc6.onion (or whatever your equivalent is) in Tor browser from another computer should display your website.

And that's it really. I hope it works for you as it did for me.
