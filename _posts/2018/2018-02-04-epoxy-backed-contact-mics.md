---
title:  "Testing Epoxy Backed Contact Mic's"
date:   2018-02-04 15:00:00 +1724
header:
  teaser: /assets/images/contact-ab-500x300.jpg
  overlay_image: /assets/images/contact-ab-wide.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  image_description: "Epoxy Resin Coated Contact Mic's"
  show_overlay_excerpt: False
---

I've been making contact mic's for myself and others for some years now (and I'm planning on putting some up for sale again quite soon so get in touch if you want any making to order). Whilst they're very simple to make and utilise fairly cheap parts there's a handful of variables and build options at play. There are some expensive high quality one's on the market (Jez Riley French's spring to mind) but I've always been more about durability. I want a contact mic that will take a good bashing. _(This has worked well for a number of people where, e.g. they have been used to mic up a log which was being hacked at with a toy axe made from frozen piss.)_

I've tried a few variations here, especially in terms of how it is wired and where on the mic the wire is positioned. These variations, over time, have ultimately proved to be less successful than a standard wiring directly onto the piezo element. What has worked consistently well though is backing the element/wiring with epoxy resin. Often twists and snaps of the wiring are the primary site of failure and so encasing these joints in glue helps secure it. It also has the bonus of protecting the element from random shorts whilst handling etc.

I want to do some comparisons with the high-end mic's on the market at a later date (I need to buy some first) but in the meantime I thought I'd check what effects this epoxy backing actually has on sound quality/mic performance. My test was fairly simple. Two mics made from the same components (wiring, piezo elements etc.), one epoxy backed and the other bare. Here's a picture of the set-up.

{% include figure image_path="/assets/images/a-b-rig.jpg" alt="A/B Contact Mic Testing in Window with Vibration Speaker" caption="A/B Contact Mic Testing in Window with Vibration Speaker" %}

I thought about the sound source and decided to use something pre-recorded and chose a sound collage I'd made in Iceland with a combination of piano abuse and field recordings. I thought there was a broad tonal range to help determine if there were any significant difference across the spectrum. I played this collage back using a vibration speaker placed on a wooden window bay. It was placed fairly centrally and the contact mics were an equal distance either side of the speaker. I thought the material qualities of the wood might bring out some of the bottom end and, seeing as contact mics generally don't perform well in this part of the spectrum, I thought it would make a useful comparison.

Both mic's went into a Zoom H4n with the gain set equally. I noted at the recording stage that the epoxy backed mic was recording at a lower volume so it does already look like the resin effects sensitivity of the mic.

Once recorded I imported the stereo file into Audacity. I normalised the tracks (I chose not to maintain stereo balance so L/R signal were essentially normalised independently of one another). I then split the stereo track into separate mono files. Here are those normalised tracks for you to compare for yourself.

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/439471452&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>

I listened back and also used Ableton Live's built in spectral analysis. I'm a complete lay person here but have concluded the following.

I couldn't spot any discernible difference in frequency response. There are obviously minor differences as the 2 tracks do sound slightly different. I couldn't however isolate any areas of the audio spectrum where the epoxy backed mic performed worse than the unbacked mic.

As noted above, the backed mic was slightly less sensitive. This means that when it was normalised the noise floor would have been amplified slightly too. Usually this wouldn't present a significant issue as we'd simply raise the sensitivity of the recorder. I couldn't do this for the purpose of testing but, if I was setting the recorder to the appropriate level for the mic, normalisation wouldn't have increased the volume as much or any background preamp noise.

As to the qualitative differences. Well, I can't quite put my finger on it. I think the higher and lower ends perform very similarly. Instead, I have a theory. I think there are some resonances in the unbacked recording that aren't very strong in the epoxy-backed recording. I think that the piezo element has natural, material resonances itself. These elements are initially designed to act as buzzers so there is a natural frequency at which they will oscillate and self-resonate. When the piezo element is distorted by vibrations it generates an electrical signal and this is what we hear when we record it and play back through a loudspeaker. I think that these self-resonances, the material properties of the piezo element, are shaping the recording slightly and that this is the difference we hear. The epoxy resin backing suppresses the distortion of the piezo element. This makes it a little less sensitive to vibration but also suppresses the resonant properties of the piezo element.

Practically speaking my interpretation is that the epoxy backed contact mic is a little quieter when recording so needs a little more gain. It performs equally well across the frequency spectrum (within the general limitations of a contact mic's frequency response). The material resonances of the piezo element are somewhat suppressed. What the suppression of those resonances actually means is quite subjective. Suggesting one is more 'honest' is quite ridiculous as any recording/listening process is far from 'neutral'. For general purpose I think I prefer less of those resonances. For others they may be preferable. I could certainly see making work specifically addressing those resonances.

The purpose of this experiment though was to understand what difference epoxy backing made and to determine whether it had particularly negative or unfavourable consequences. I feel I can confidently say they perform as well if not better with the caveats of personal preference/context regarding resonance.
