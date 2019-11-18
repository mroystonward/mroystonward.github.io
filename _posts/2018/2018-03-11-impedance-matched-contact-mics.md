---
title:  "Testing Impedance Matching Contact Mic's"
date:   2018-03-11 15:00:00 +1724
excerpt: "More A/B Comparisons"
header:
  teaser: /assets/images/contact-imp-ab-500x300.jpg
  overlay_image: /assets/images/contact-imp-ab-wide.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  image_description: "Testing Contact Mic's"
  show_overlay_excerpt: False
---

I've been thinking about and comparing contact mic's recently for a combination of reasons. Firstly I have some broad assumptions that I've never really tested and secondly I'm curious as to how the ones I make stack up against other offerings. What makes a difference in a contact mic and how much difference does it really make?

Previously I've compared how much difference backing my contact mic's with epoxy resin (to make them more durable) makes to their performance - [https://mroystonward.github.io/epoxy-backed-contact-mics/](https://mroystonward.github.io/epoxy-backed-contact-mics/).

The piezo-electric elements used in building contact mic's are very high impedance and so various methods of matching, buffering and pre-amplifying the signal are recommended. I decided to buy and test an Hosa MIT-129 Impedance Matching Transformer.

I tested at work on a metal-clad table using some rulers and sellotape to generate sounds for recording. The mic's were placed roughly equidistant from the sound source.

{% include figure image_path="/assets/images/imp-a-b-rig.jpg" alt="Impedance Matching A/B Contact Mic Testing with Twangers and Sellotape" caption="Impedance Matching A/B Contact Mic Testing with Twangers and Sellotape" %}

The sounds are a procession of ruler 'twanging', scraping and sellotaping. An image of the set up is above and the sound recordings are below (you can download from soundcloud too for your own analysis if you like).

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/468993066&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

I listened back and also used Ableton Live's built in spectral analysis. I'm still a complete lay person here but have some conclusions.

{% include figure image_path="/assets/images/imp-a-b-analysis-1.jpg" alt="Impedance Matching A/B Contact Mic Analysis" caption="Impedance Matching A/B Contact Mic Analysis" %}

In the image above I've highlighted 3 areas on the spectral analysis with the following thoughts:

- A. The unmatched input shows a peak of activity below 20Hz. I'm surprised and confused by this. Firstly this kind of response at low frequencies is unexpected with a basic contact mic with no buffering/matching/etc. Secondly, this is below general human hearing and has little to no impact on the perceivable audio performance. I'm not saying these frequencies are meaningless (they undoubtably are part of the signal and potentially influence the perceptible frequencies) but simply, in cases such as this, don't appear to be significant. I expect that there are perfectly reasonable electrical-engineering reasons for this but I'm still rather surprised.
- B. Without impedance matching the contact mic is fairly unresponsive around the 80-90Hz range. This is likely part of where contact mic's are considered to perform weakly with low frequencies.
- C. The unmatched mic has several weak points throughout the 200Hz-2.5kHz range. This again weakens the low to mid range response and robs the recording of some richness. Said richness is present in the impedance matched recording along with generally improved low-mid frequency response.

Below is another screenshot from later on in the track and again we see similar results.

{% include figure image_path="/assets/images/imp-a-b-analysis-2.jpg" alt="Impedance Matching A/B Contact Mic Analysis" caption="Impedance Matching A/B Contact Mic Analysis" %}

There are further, qualitative differences that I think are worth consideration.

* Firstly, the unmatched contact mic bristles with a little something not present on the other channel. As with the epoxy resin comparisons I think this is related to the resonant frequencies of the contact mic itself and I think that these are attenuated by the impedance matching. Whilst that little bit of extra energy might be desirable in certain situations (I'm primarily thinking noise-music type applications) if you're after more 'audiophile' results it's worth investing in an impedance matching adaptor.
* Secondly, the impedance matching transformer reduces the overall recording amplitude slightly. The tracks were normalised but no further edits/processing was undertaken. If I boost the volume on the 2nd channel the noise floor comes up with it (and apparently Zoom H4s can be a bit noisy anyway). This isn't really a problem. When recording using impedance matching transformers we could raise the input sensitivity so the recording wouldn't be quieter and it wouldn't need a boost which brings the noise floor with it. As much as the slight 'bristling' mentioned above is possibly linked to resonance, I think the recording volume differences also play a small part. The moral of the story here is simply that I could have gotten a slightly better recording via the matched channel if it wasn't for the controlled variables of the A/B comparison.

That's it really, these strike me as the most significant comparisons/differences. Again, I'm quite pleased as to how well an epoxy-backed, unmatched contact mic stacks up in general and would recommend anyone without the budget to invest in more expensive pro-mic's and additional equipment to get stuck in and have a go. I'm also pleased with how well an impedance matching adaptor complements a relatively cheap contact mic. I paid ~£16.50 for the adaptor which, considering how much use I'm likely to get out of it, seems pretty good value. I'll probably get a second one at some point so I can use them on both channels on my audio recorder or even use them for live work.
