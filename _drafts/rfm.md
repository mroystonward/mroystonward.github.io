

## Introduction

Seeing as I've been talking about the merits of using p2p technologies for DIY publishing I thought I'd try a practical demonstration. I'm going to mirror and re-publish [Radio Free Midwich](rfm) using Beaker Browser (which uses the DAT protocol). I really wanted to do this because a) the site is excellent (though sadly dormant), b) it acts as a bit of a rallying call around the No-Audience Underground, and c) it feels appropriate to help maintain archival copies in free and open ways.

Before we proceed though I think there's an ethics around how to do this worth mentioning. Previously I have used EOTK to onionise Bandcamp which came with some criticisms of 'forcing' Tor on websites. I could see how this could become a problem if enacted on a large scale by the Tor community but I stand by a) doing something as a small-scale, individual provocation within a net-art context, and b) purely offering an onionised proxy to the site.

What I'm doing in this example though is quite different. We will scrape the RFM website to make a local copy and then republish it using alternative publishing tools. It's not my website and it would be very uncool to re-host someone else's project without talking to them first. First things first then, I messaged Rob Hayler via twitter to get his blessing before doing this. Should you be tempted to try this yourself, for anything more than a super private trial-run, please either publish your own content or get permission from the site owner (look out for creative commons licensing which already grants you such permissions).

## Downloading a Site Mirror with wget

First off we need to scrape the site, in this case [radiofreemidwich.wordpress.com](radiofreemidwich.wordpress.com), and we're going to use wget to do this. We'll need to install it first though.

__Windows:__ I've little experience here but downloading the 'setup' package from [here](http://gnuwin32.sourceforge.net/packages/wget.htm) should do the trick.
__Linux:__ ```$ sudo apt install wget``` or whatever package manager you use for your distro (I'm presuming you can figure this out if you're using linux).
__Mac:__ You can get (and build) wget on OSX but you need Z-Code and [it's a bit of a faff](http://osxdaily.com/2012/05/22/install-wget-mac-os-x/). Much better to install [Homebrew](https://brew.sh/) and then simply run ```$ brew install wget```

Now wget is installed we'll run some commands in the terminal/command prompt. I followed the instructions [here](https://fosswire.com/post/2008/04/create-a-mirror-of-a-website-with-wget/)

I'm using a Mac but the wget commands will also work in Linux/Windows.

You'll also want to navigate, in Terminal, to a suitable folder to download the website to. It doesn't matter too much where just so long it works for you. Personally though I have a folder within Documents for tech projects. An good alternative would be a 'Sites' folder (which is Beaker Browser's default on Mac).

```
$ wget -mk -w 20 radiofreemidwich.wordpress.com
```

just to explain the options in this command:
- m - creates a mirror (and is shorthand for several useful wget commands).
- k - converts links, once it's finished downloading the site, so the work relatively and off-line.
- w - waits, in this case 20 secs, between download requests. This eases off the burden placed on the server you're requesting from. For wordpress probably not a big deal but it's good etiquette anyway.

That's it, leave it running, plug in if needed and don't shutdown your system. It'll take several hours (especially with the rate limiting) so make a hot drink.

## Installing Beaker Browser

In the meantime you can also install Beaker Browser. Download and follow instructions from [here](https://beakerbrowser.com/). Or, if you're like me and use [Homebrew](https://brew.sh/) on a Mac then run:

```
$ brew update
$ brew cask install beaker-browser
```

Let's launch beaker and have a quick look around. Beaker works like any other web browser but it's also capable of accessing sites using the dat:// protocol. Addresses look like long, random, complex strings but this a) will be fine and b) there's ways around this that we'll explore in another post.

If you open the settings page you can see where Beaker defaults to for projects (in my case the 'Sites' directory).

You probably want it to be the default for dat:// links. You could use Beaker as your main browser too but I'm sticking to Firefox for several plugins I use with it so http:// is off.

Next, open the 'Library' page. In my example I've already gotten two projects set up. You'll likely have nothing. If you click the blue 'New' button we can create a new p2p archive/project.

You can create a black project and put stuff in it later. Or a basic website which basically has a html index page you can edit.

I'll show you this a bit more because it's kinda cool. You get a list of files and you can edit these files directly in the browser. You'll need some basic HTML chops as there's no WYSIWIG interface etc. but it's really easy to work with.

In the following images you can see that I simply edited the index.html page by adding 'Blah Blah Blah' to the existing template.

You can add and import files/folders so you could build something quite complex if needed.

Right, I'm going to scrap that.

Let's create a new project from an existing folder (our downloaded RFM mirror).
