---
layout: single
title: Jehova's Fitness Bot Thoughts
toc: false
excerpt:
tags:
header:
  teaser: "/assets/images/-500x300.png"
  overlay_image: "/assets/images/-wide.png"
  overlay_filter: 0.5
  caption:
  image_description:
---

In the summer of 2018, I was living in Berlin and hooked up with old friend [Mathew Johnson](https://www.soundengineer-berlin.com/) for a mouth and guitar project we called [Jehova's Fitness](https://www.facebook.com/Jehovas-Fitness-2325237301091977). We naturally fell into a particularly spontaneous and ramshackle evolution: one rehearsal, [one recording session](https://thehouseorgan.xyz/2019/04/06/stop-stroking-your-chin.html), [one gig](https://www.facebook.com/2325237301091977/videos/2236176879753949/), and [one tour](https://screefuckingjunk.bandcamp.com/album/we-were-supported-by-tom-bacharach-split-w-jehovas-fitness). The next stage in that journey is the... Jehova's Fitness Telegram Bot.

If you just want to have a play you can visit [https://t.me/jehovasfitness_bot](https://t.me/jehovasfitness_bot) (you'll need Telegram installed on one of your devices).

As a response to Covid-19 and the numerous event cancellations, there's a whole range of online streaming and other publishing endeavours going on. Taking part in 'Isolated Mass #2 2020', I saw it as an opportunity to explore the format.

I'd initially signed up for Isolated Mass #1, taking place on Facebook Messenger, but I got postponed to the 2nd instalment. It wasn't quite the online experience I expected --- considering a lot of people are looking to live streaming this seemed somewhat archaic. I also find the interruptions of a messaging platform, even muted, personally anxiety-inducing. I bailed out came back to it the next day but could see that many had enjoyed it and it had developed a ramshackle charm all of its own. There were problems with Messenger which the organisers also recognised, and they tried moving to Telegram for the next edition.

With the move to Telegram, and seeing how Isolated Mass #1 had unfolded, I started thinking more about the format. In the IM#1 Acrid Lactations had used their devices to let the audience into their domestic setting and captured individual performances simultaneously --- 'bleeding' into each other through time and space. Telegram also affords continuously playing a stream of various formats (audio, voice memos, videos, etc.). Finally, it has a bot ecosystem that I thought it would be interesting to explore. My plan was to create a bot that eschewed some of the intimacy but embraced an overlapping world more attuned to a messaging platform. It would randomly curate a range of different items to result in a collaged stream of diverse content. It would also be an opportunity to push issues of technological mediation, inherent in any approach to an online event, into the foreground.

I used [Manybot](https://manybot.io/) for simple, codeless bot creation and found it pretty easy to follow and get up and running. I settled on a handful of themes from our tour such as reading reviews of fish and chip shops, the holiday town of Hunstanton, mucking around with objects, and tropical marine fish. I made a bunch of video and audio segments. I also got Mathew to contribute, and we added two further options that asked the user to submit content of their own. The menu was intentionally oblique, so users didn't feel especially grounded in their interactions --- we wanted it to be a little confusing.

The final considerations were re-encoding and compressing files to ensure it didn't clog up storage and/or bandwidth, especially for those on mobile devices using their data plans. I got the whole bot down to <250MB which was smaller in total than some of the individual video bits in their native encoding. We also tried to make it abundantly clear how to turn the bot off to stop it potentially overwhelming the event.

We ran a whole bunch of tests but, when we launched it in the group, it was a disaster. It didn't seem to scale up to a large group well at all, the initial message that explains how it works disappeared immediately, so no-one knew how to interact. A few attempts to try and re-trigger it confused people and led to wild commands being thrown around. A little bit of content managed to post before we resigned ourself to removing it and adding a handful of items manually so at least a 'performance' of some-kind occurred. We imagined it would be chaos and we'd have to pull the plug but we thought it'd at least get off the ground.

I'm quite disappointed as we put quite a bit of effort into creating this. Still, one-on-one I think the bot still works so I'd hope people might have a play with it on their own.

It's also quite interesting that this experiment garnered a combination of almost complete ambivalence and even occasional hostility. It was operating very far from the accepted forms of transmission that are emerging within this space, for this audience at least. There was a whole raft of other technical issues presented on the night, with file formats not working and file sizes being too large, causing failures, lags, and other delays to both upload and download. Where these 'performances' were celebrated, despite technical failings, the performance of a 'Bot' (irrespective of the human performance that went into creating it) was not worthy of note.

The whole event was mostly successful but not the ideal platform for a bot. Still, one-on-one I think it's a fun initial experiment in making something, even if not the most advanced example of the technology. I'd recommend trying to build something yourself, especially as the barrier to entry is low.
