---
title:  "Onionised Bandcamp"
date:   2018-02-15 15:00:00 +1724
toc: true
excerpt: "Behold, Bandcamp on the Tor Network."
header:
  teaser: /assets/images/bc-tor-500x300.jpg
  overlay_image: /assets/images/bc-tor-wide.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [By Carle Hessay (carlehessay.com) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/4/43/Carle_Hessay_-_There_Shall_Be_Sound_%281974%29.jpg)"
  image_description: "Carle Hessay - There Shall Be Sound (1974)"
---
I'll cut to the chase, I've 'Onionised' Bandcamp.

If you want to see it in action it's here [bandc2v6rbqrn6vx.onion](https://bandc2v6rbqrn6vx.onion/) (You need the Tor browser to visit .onion links - [https://www.torproject.org/](https://www.torproject.org/))

A word of warning though, you need to jump through some hoops due to HTTPS over Tor. If you know what you're doing check out this 'landing' page - [https://gist.github.com/mroystonward/aec1fa678186fe62c692b1d5b9d129c2](https://gist.github.com/mroystonward/aec1fa678186fe62c692b1d5b9d129c2) / [bctorowb7blvvryo.onion](http://bctorowb7blvvryo.onion) - if not, read on.

{% include figure image_path="/assets/images/torscreenshot.jpg" alt="Bandcamp Onion Address in Tor Browser" caption="Bandcamp Onion Address in Tor Browser" %}

## Platforms, Surveilance and Commercialisation of Data

> Independent artists, punk labels, and do-it-yourself (DIY) organizers have long suggested that the means through which music is created and distributed carries as much political weight as the content of the songs—by subverting the status quo, making their own platforms, and creating alternative worlds.
>
> What do these ideologies mean in today’s hyper-mediated, corporate digital culture? New enemies of agency now surround music communities in the form of centralized and exploitative platforms that musicians and listeners increasingly grow beholden to.

([https://shadowproof.com/2017/11/01/protest-platforms-resonate-streaming-co-op-agency-to-artists/](https://shadowproof.com/2017/11/01/protest-platforms-resonate-streaming-co-op-agency-to-artists/))

Many platforms are exploiting your 'content' for corporate, commercial advantage. Driving engagement to maximise advertising revenues served alongside your work. Tracking and harvesting massive troves of data to train AI algorithms which can later be commercialised further or just selling it on via data-brokers. The political/societal ramifications spread wider, just consider the dynamics of power and capital associated with Facebook and Cambridge Analytica's role in Brexit/Trump victories (consider the various investigative links here - [https://en.wikipedia.org/wiki/Cambridge_Analytica#Criticism](https://en.wikipedia.org/wiki/Cambridge_Analytica#Criticism)).

The terms are frequently inequitable for artists (i.e. Spotify streaming payment rates) yet there seem to be few viable alternatives for engaging with audiences and the successful platforms have monopolised their spaces with little room for small independent publishing. Rather, the only way to 'compete' is to go in and 'disrupt' with rounds of angel backing to try and build something even bigger (though this pessimism is somewhat disingenuous as I do believe that collectively we can build better systems).

Some of the worst excesses of such platforms seem to be thankfully absent from Bandcamp. They're not profiting from advertising alongside your content and instead it's in their interest to drive your sales for their business model. They're not claiming undue license over the work you put online through their platform. Their fees certainly don't seem unreasonable. PWYL embodies a tension along a continuum of exploitative benefits to the platform from music moving around itself easily and freely vs. an artistic desire to make sounds available widely and to try and engender forms of sharing and 'patronage' rather than a pure sales focus. There are options and consent (though sometimes requiring a premium subscription for maximum control over one's own work within the limited options given by the platform).

Bandcamp does however use Quantcast tracking and Google Analytics. I won't labour this other than to say that Google Analytics, for most average users, is probably not of concern (however there should be broader public debate on the implications of state level surveillance programs and their access to such data), whereas Quantcast provide machine learning, demographic tracking and shopping insights etc. ([https://www.quantcast.com/](https://www.quantcast.com/), [https://en.wikipedia.org/wiki/Quantcast](https://en.wikipedia.org/wiki/Quantcast)). I don't know 'how' Bandcamp is using this. It may be driving recommendations (which for many has tangible benefits to 'us' as well as 'them') or other insights for optimising the platform. It may be part of a much larger data gathering exercise that provides Bandcamp with additional revenue. Either way, our browser activity is being tracked and commercialised both as 'artits' and 'fans' and the equitability of this relationship is unclear.

I don't know about how and how much Bandcamp engages in forms of censorship. They presumably have to deal with copyright infringement, issues around free and hate speech, they may have to engage different filtering depending upon geopolitical requirements. I can't say I've heard about blocking, banning, spam etc. on Bandcamp the way it pervades other platforms and networks. That this _could_ be done though still enters into the debate I wish to raise.

>Beyond a certain tipping point, platforms become difficult not to use. All this means that power, and a conservative form of power at that, is deeply involved in platforms within the human world. But I think it is also important to emphasize that the reason platforms become successful is partly because they enable you to do things; they are productive, generative. Those seeking to oppose a given platform—a technical one, like Microsoft, Google, or Apple, or a political one, like Neoliberalism, or an aesthetic one, like conservative genre boundaries or tuning systems—have to remember that. It implies that a purely negative or transgressive project will be unlikely to be able to seriously disrupt the functioning of existing malignant platforms. Only the building of new, better ones, will suffice. Or perhaps the re-engineering of those already in existence.

([http://www.glass-bead.org/article/reengineering-hegemony/](https://web.archive.org/web/20180215175713/http://www.glass-bead.org/article/reengineering-hegemony/?lang=enview) - note Internet Archive link due to source not being available via HTTPS)

I say all this because the desire to 'onionise' Bandcamp isn't one of being anti-Bandcamp. Rather it's one of engaging with broader debate and scrutiny around content/market/social platforms, especially as they relate to power dynamics in publishing and sharing creative content.

{% include figure image_path="/assets/images/Just_yellow_paint_(12645841144).jpg" alt="Yellow paint on a piece of film wrap over a bass speaker playing very loud music" caption="[By aceebee from Camberley, UK (Just yellow paint) [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/3/31/Just_yellow_paint_%2812645841144%29.jpg)" %}

## The Onion Routing network

If you don't know much about Tor already you should have a look around [https://www.torproject.org/about/torusers.html.en](https://www.torproject.org/about/torusers.html.en). Whilst it is talked about and useful in terms of resisting state level surveillance it has a longer history in resisting corporate surveillance (and an even longer history in secure military communication). One can use Tor to browse relatively anonymously (this claim comes with caveats about browsing habits and online behaviour), securely and privately. It is also relevant in terms of censorship circumvention and network resilience.

This won't be a technical primer about Tor and it's benefits/risks. It is perfectly legal to use here in the UK but your local jurisdiction may differ. Along with the many positive uses of Tor it has been, and continues to be, used for illegal marketplaces. Take the usual precautions online regarding links, spam, information sharing etc. If you do want more information about online privacy/security and the wider issues check out some of the following resources:

* [https://tacticaltech.org/](https://tacticaltech.org/)
* [https://www.eff.org/](https://www.eff.org/)
* [https://www.openrightsgroup.org/](https://www.openrightsgroup.org/)

## EOTK

I have been exploring this area for a while now, publishing via [https://thehouseorgan.xyz/](https://thehouseorgan.xyz/) / [tho2f4fceyghjl6s.onion](http://tho2f4fceyghjl6s.onion/) using a home Raspberry Pi powered server ([https://mroystonward.github.io/self-hosting-with-raspberry-pi-and-tor/](https://mroystonward.github.io/self-hosting-with-raspberry-pi-and-tor/)).

Having been recommended to look at The Enterprise Onion ToolKit ([EOTK](https://github.com/alecmuffett/eotk)) by [@moananddrone](https://twitter.com/moananddrone) I mirrored this site ([https://mroystonward.github.io/eotk-tor-mirroring-on-google-cloud-engine/](https://mroystonward.github.io/eotk-tor-mirroring-on-google-cloud-engine/)).

I have also been volunteering with [Radical Librarians Collective](https://rlc.radicallibrarianship.org/) as there is an overlap in issues of privacy and working with tools such as Tor. Related to this work @moanandrone has, quite exceptionally and it will be interesting to see the longer-term impact of this project, gone on to 'onionise' the University of West London Repository and his documentation offers some valuable insight as to how issues of intellectual freedom and centralised platforms effect scholarly work - [https://moananddrone.github.io/bag-of-onions](https://moananddrone.github.io/bag-of-onions).

If you are interested in how to use EOTK yourself the above links should be helpful.

{% include figure image_path="/assets/images/Metropolitan_Opera_House,_a_concert_by_pianist_Josef_Hofmann_-_NARA_541890_-_Edit.jpg" alt="A full house, seen from the rear of the stage, at the Metropolitan Opera House for a concert by pianist Josef Hofmann, November 28, 1937" caption="[By Unknown or not provided  Retouched by Mmxx [Public domain], via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3AMetropolitan_Opera_House%2C_a_concert_by_pianist_Josef_Hofmann_-_NARA_541890_-_Edit.jpg)" %}

## Decentralisation and Alternatives

Decentralisation continues to offer strong alternatives to current calcifications of power. Opportunities have spread far beyond p2p file-sharing and torrents. The potential demise of Soundcloud last year raised 2 particularly interesting responses.

>Soundcloud is a good example of a project with modest ambition gaining traction with subcultures who then elevate it to a place of relevance. As that growth is recognized, the gears of homogeneity start to turn, and the intent shifts from being one of creating something interesting to creating something larger.

[https://jon-kyle.com/entries/2017-08-19-platform-death/](https://jon-kyle.com/entries/2017-08-19-platform-death/)

Jon Kyle and the [DAT](https://datproject.org/) community offered a Soundcloud archive tool (to preserve your tracks should the service shutdown) that would be served and hosted using p2p. I made an archive here - [dat://5525a6916dbed65eb9ea8d1fe7501cda094f937ec7b674337e038dc8427077fd/](dat://5525a6916dbed65eb9ea8d1fe7501cda094f937ec7b674337e038dc8427077fd/) (you need [Beaker Browser](https://beakerbrowser.com/) to view). Projects like [ZeroNet](https://zeronet.io/) and [OpenBazaar](https://www.openbazaar.org/) are also viable alternatives.

> Many factions of the independent musical infrastructure have become closer and closer aligned with corporate interests and advertising supported journalistic models in order to keep their head just slightly above water, and are in danger of losing their distinction and identity as a result. Unless we construct an intervention, this curve towards the commercially viable and mediocre templates of the bland, centralized, content warehouses ultimately threatens to displace the role of music as the preeminent critical space of psychedelic possibility, experimentation and collective desire.

[https://medium.com/blockchannel/soundcrowd-tokenizing-collectivizing-soundcloud-5c4f60ed4961](https://medium.com/blockchannel/soundcrowd-tokenizing-collectivizing-soundcloud-5c4f60ed4961)

Elsewhere Matt Dryhurst suggested tokenising Soundcloud using blockchain technology to engender decentralised, collective ownership. His article is well worth a read and it raises numerous salient points. I would add to my general enthusiasm towards his suggestions that the crypto/blockchain space has a number of inherent issues that need to be resolved. Not only has 'mining' proved incredibly resource inefficient there are fundamental 'oracle' problems in 'smart contracts' which undermine the decentralisation possibilities. And that's ignoring the general hyperbolic bubble surrounding such technologies. Still as a model for possible collective ownership there's a lot of potential.

There's no reason why similar considerations couldn't also feature in the ongoing development of Bandcamp or other such marketplaces. These aren't systems of intervention we can easily implement _within_ the platform though. We either set up alternatives (set up our own p2p archives etc.) or we take over the platform (tokenising Soundcloud would likely take the form of 'buying it out' and distributing it equitably).

{% include figure image_path="/assets/images/Drimia_maritima_-_Sea_onion,_Adana_2016-12-04_01-1.jpg" alt="Dry flowers of Sea onions (Drimia maritima) at Çukurova University Campus in Balcalı, Adana - Turkey" caption="[By Zeynel Cebeci (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3ADrimia_maritima_-_Sea_onion%2C_Adana_2016-12-04_01-1.jpg)" %}

## Bandcamp Onion

For now we aren't looking to immediately replace or change Bandcamp (or Soundcloud etc.). We are looking to ensure that, as a platform, it offers opportunities to _publicise_ our music without sacrificing the broader privacy of ourselves or our fans.

Some of these benefits could be garnered through simply accessing the existing site using Tor browser and, in combination with HTTPS, we would experience improved privacy from various forms of tracking. [Onion Services](https://www.torproject.org/docs/onion-services) however improve anonymity/privacy even further and so I'd like to see more platforms, such as Bandcamp, embracing these positively ([much as Alec Muffett has done with Facebook](https://www.facebook.com/notes/protect-the-graph/making-connections-to-facebook-more-secure/1526085754298237/)).

Onionising Bandcamp is a provocation: it aims to gauge interest in using such a platform in this manner; it hopes to further debate around the role platforms play in music publshing and consumption; and it intends to show Bandcamp their onionised site in action in the hope they would implement it officially.

The biggest problem with this implementation is to do with the way browsers handle HTTPS certificates. The EOTK proxy generates self-signed certificates which generate warnings.

.onion domains don't require HTTPS as the layers of encryption already present in the Tor network infrastructure offer greater security. The only real use for HTTPS with a .onion domain would be in cases of public sites also offering onionised versions and demonstrating ownership. In such cases the site would procure a signed certificate for the original site and the onion version.

As I don't own Bandcamp and am simply proxying it through Tor I have no claim to ownership. If anything what I am doing is _unauthorised_. I can not, and would not, provide a signed certificate for HTTPS.

The implication is that it is necessary to allow these security exceptions as you browse. Where images, CSS and JS etc are handled by various CDN domains it becomes necessary to allow several exceptions for the site to simply display properly.

If Bandcamp implemented a .onion domain themselves, with an appropriate HTTPS certificate, this game of certificate whack-a-mole would become unnecessary.

The main Bandcamp Onion is available at [bandc2v6rbqrn6vx.onion](https://bandc2v6rbqrn6vx.onion).

If you want the site to function correctly though I would recommend pre-authorising several domains as listed [here](https://gist.github.com/mroystonward/aec1fa678186fe62c692b1d5b9d129c2) (or [bctorowb7blvvryo.onion](http://bctorowb7blvvryo.onion))

Performance may vary and the current implementation isn't setup 'yet' for scale. I'll update this page as necessary and if Bandcamp respond to the provocation.
