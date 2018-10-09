---
title:  "rfm"
date:   2017-09-23 12:00:00 +1724
toc: true
excerpt: ""
header:
  teaser: /assets/images/diy-digital-500x300.png
  overlay_image: /assets/images/diy-digital-wide.png
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  image_description: "Glitched photo of TQ zine and An (Opinionated) Critical Guide to DIY Digital Publishing supplement"
---
## Introduction

I've just wasted 5 days on something that didn't work. That's not entirely uncommon, but what's most frustrating is that this task should have been easy, and I didn't see this failure coming at all.

All is not lost, there are possible solutions on the horizon.

I should also point out that, this was a project designed to help demonstrate how easy some of the p2p web stuff, I've recently been talking about, actually is ([https://mroystonward.github.io/an-opinionated-critical-guide-to-diy-digital-publishing/](https://mroystonward.github.io/an-opinionated-critical-guide-to-diy-digital-publishing/)). Sod's bloomin law!

Trying to salvage something from this though I'd like to talk about when things go wrong, and they frequently do.

In particular, mostly with helping relatives and friends with technical things, there can be a sense of fear to experiment, to poke and prod, with technology. Mostly this can seem to be a fear of breaking things, and I wonder if this goes back to early experiences when learning to use software etc.

In the context of the music community I associate with, where improvisation and experimentation often features, I'd like to make the claim that similar processes equally apply to software, computers, coding, servers etc. I've never had any training in any of this but, through trial and error, have gradually built up a patchy but functional knowledge base.

Of course, there's not enough hours in the day and frequently competing priorities but, should you be inclined, things going wrong is part of the process.

## The Original Proposal

Seeing as I've been talking about the merits of using peer-to-peer (p2p) technologies for DIY publishing, I thought I'd try a practical demonstration that people could either try themselves or repurpose for their own ends.

I was going to mirror and re-publish [Radio Free Midwich](rfm) using Beaker Browser (which uses the DAT protocol). I really wanted to do this because a) the site is excellent (though sadly dormant), b) it acts as a bit of a rallying call around the No-Audience Underground, and c) it feels appropriate to help maintain archival copies in free and open ways.

I messaged Rob Hayler and got his blessing to proceed. Below is what happened next.

## Downloading a Site Mirror with wget

First off I needed to scrape the site, in this case [radiofreemidwich.wordpress.com](radiofreemidwich.wordpress.com).

I did a quick search online and it looked like 'wget' would be the best tool to use. It's a tool I've used before but never delved into so I found a few examples online for the parameters to use. Mostly I followed the instructions [here](https://fosswire.com/post/2008/04/create-a-mirror-of-a-website-with-wget/).

The command I ran was:

```
$ wget -mk -w 20 radiofreemidwich.wordpress.com
```

just to explain the options in this command:
- m - creates a mirror (and is shorthand for several useful wget commands).
- k - converts links, once it's finished downloading the site, so they work relatively and off-line.
- w - waits, in this case 20 secs, between download requests. This eases off the burden placed on the server you're requesting from. For wordpress probably not a big deal but it's good etiquette anyway.

## The First Seeds of Things Not Going to Plan

Actually before I ran the above command I tried a slightly different version. I wasn't convinced that I'd done it correctly so tried the 'proper' way. My trial run however has suggested this would take a few hours so I left it running, plugged in, and make a hot drink.

I wasn't prepared for the fact that the ```-w 20``` parameter would make this whole process take 4+ days. Ouch!!!!

I wont change my advice but in the future I'd weigh up removing '-w 20' part. I'd say, consider the nature of the site you are downloading and how much strain you are likely to put on the servers. For hosted wordpress we likely won't tax them too much, but for a small, limited site we could temporarily slow it down to a grinding halt.

The other thing that wasn't very satisfactory is the nature of the downloaded site. On the one hand wget has done its job properly but the results are highly inefficient. The wordpress site has many, many posts and they are collected in a number of different ways. The main site landing pages display posts in chronological order, secondly there are numerous 'tag' pages, 'category' pages and even some searches that are somewhere/somehow embedded within the site.

When wget scrapes the site, it scrapes all of those multiple representations of the individual posts, so a single post may be saved under it's date, along with multiple copies for each of a number of tags, plus trackbacks, and comments. This results in the ~630 posts becoming ~3-4k duplicates and different representations. What in reality probably only uses approx 150 MB of diskspace now takes up 550-600 MB.

What that all basically means, is that I'm wasting time, space, and resources, on a highly inefficient representation of the rfm site.

## Beaker browser

The next stage in my project was to set-up the site using beaker browser. I wrote a tutorial to install and set this up.

As this is still useful information I leave this, unedited, below. Feel free to skip or still try for yourself. On the whole Beaker works brilliantly and the problem I later encounter is a little specialised, being fixed, and shouldn't trouble you at this stage.

### Installing/Exploring Beaker Browser

In the meantime you can also install Beaker Browser. Download and follow instructions from [here](https://beakerbrowser.com/). Or, if you're like me and use [Homebrew](https://brew.sh/) on a Mac then run:

```
$ brew update
$ brew cask install beaker-browser
```

Let's launch beaker and have a quick look around. Beaker works like any other web browser but it's also capable of accessing sites using the dat:// protocol. Addresses look like long, random, complex strings but a) this will be fine, and b) there's ways around this that we'll explore in another post.

If you open the settings page you can see where Beaker defaults to for projects (in my case the 'Sites' directory).

{% include figure image_path="/assets/images/rfm-beaker/beaker-settings.png" alt="Beaker Settings Page" caption="Beaker Settings Page" %}

You probably want it to be the default for dat:// links. You could use Beaker as your main browser too but I'm sticking to Firefox, for several plugins I use with it, so http:// is off.

Next, open the 'Library' page. In my example I've already gotten two projects set up. You'll likely have nothing. If you click the blue 'New' button we can create a new p2p archive/project.

{% include figure image_path="/assets/images/rfm-beaker/beaker-library.png" alt="Beaker Library Page" caption="Beaker Library Page" %}

{% include figure image_path="/assets/images/rfm-beaker/beaker-new-project.png" alt="Creating a new project in Beaker" caption="Creating a new project in Beaker" %}

You can create a blank project and put stuff in it later. Or a basic website which has a html index page you can edit.

{% include figure image_path="/assets/images/rfm-beaker/beaker-blank-website.png" alt="Beaker Blank Website Project" caption="Beaker Blank Website Project" %}

I'll show you this a bit more because it's kinda cool. You get a list of files and you can edit these files directly in the browser. You'll need some basic HTML chops as there's no WYSIWIG interface etc. but it's really easy to work with.

In the following images you can see that I simply edited the index.html page by adding 'Blah Blah Blah' to the existing template.

{% include figure image_path="/assets/images/rfm-beaker/beaker-edit-html.png" alt="Editing index.html" caption="Editing index.html" %}

{% include figure image_path="/assets/images/rfm-beaker/beaker-editing-page.png" alt="Updating the text of index.html" caption="Updating the text of index.html" %}

{% include figure image_path="/assets/images/rfm-beaker/beaker-edited-page.png" alt="Here's the edited webpage" caption="Here's the edited webpage" %}

You can add and import files/folders so you could build something quite complex if needed.

{% include figure image_path="/assets/images/rfm-beaker/beaker-new-file.png" alt="Adding a new file/folder to the project" caption="Adding a new file/folder to the project" %}

Right, I'm going to scrap that.

{% include figure image_path="/assets/images/rfm-beaker/beaker-trash.png" alt="Moving the project to the trash" caption="Moving the project to the trash" %}

{% include figure image_path="/assets/images/rfm-beaker/beaker-delete.png" alt="Deleting the project" caption="Permanently deleting the project" %}

## Creating our Site Mirror in Beaker Browser

So, with Beaker set-up I went on to create a new project using an existing folder (our downloaded RFM mirror).

Then Beaker crashed. I restarted it and my project was still there, so I didn't worry. I 'published' the site and Beaker ground to a halt. I left it struggling for an hour but it couldn't cope and I had to force quit it. Restarting Beaker, it froze almost instantly, and I had to restart and close the tabs quickly, before it froze, to get enough functionality back, to delete the project and get Beaker back to normal.

So, I tried it all again and went through the same problems.

Here's one reason why opensource projects are great. I searched the public issues here - [https://github.com/beakerbrowser/beaker/issues](https://github.com/beakerbrowser/beaker/issues) - and found a few cases of people having similar problems with large files or directories. The developers had noted that there were some inefficiencies in the DAT protocol and Beaker browser that were being addressed.

In fact, these issues were old enough that they should have been fixed by recent beta releases. I checked the version of beaker I was running and I was up-to-date and in fact more recent that the version which should have solved these problems.

Damn, still no answer.

Next I raised an issue here - [https://github.com/beakerbrowser/beaker/issues/1169](https://github.com/beakerbrowser/beaker/issues/1169).

Within an hour I'd gotten a response from the deveopers. Basically, there's more work to do here but further improvements should roll out soon.

## Conclusions

Where does this all leave me? Well, waiting for a fix.

I can try a different way of getting the RFM site though. I can rebuild it from an XML export. This involves more work on my part and doesn't replicate the visual design of the site so that's even more work.

I could publish a different way but that defeats my purpose of demonstrating Beaker.

In this instance I will see how I get on with the XML export but won't commit any major time to it whilst I focus on other priorities. In the meantime, I'll see if my issues gets updated.

It's rare to not have any other workarounds though, so if this was time-sensitive or critical there'd usually be options.

What I think is the biggest take-away here, and why I still wanted to publish this even though it failed, is that it demonstrates the process of failing, improvising, and trying alternatives. I don't have the coding skills to work on Beaker browser myself, or write my own software, or do any number of other complicated things. But I can still participate and contribute by getting my hands a bit mucky.

Basically, don't worry about fucking this shit up if you fancy having a go, and there's always sources of help/information when it does go wrong.

## A Final Positive Note

I've published with Beaker Browser before so this is definitely only an issue with a large, inefficient site. My other experiments have worked without hitch.

If you want to see some sites hosted using Beaker/DAT try these:

* [dat://thehouseorgan.hashbase.io](dat://thehouseorgan.hashbase.io) / [dat://aab4cc712ee92808b1311eed724fc9fa0ace5dc0e40e242e3f9ec2f2f26ee587/](dat://aab4cc712ee92808b1311eed724fc9fa0ace5dc0e40e242e3f9ec2f2f26ee587/) / [https://thehouseorgan.hashbase.io](https://thehouseorgan.hashbase.io)
* [dat://time-stretch.hashbase.io](dat://time-stretch.hashbase.io) / [dat://fa38bb17fc5039ded8363e40541306d6e285f1b6b983c1029f32b33e1dd44d5e/](dat://fa38bb17fc5039ded8363e40541306d6e285f1b6b983c1029f32b33e1dd44d5e/) / [https://time-stretch.hashbase.io](https://time-stretch.hashbase.io)
