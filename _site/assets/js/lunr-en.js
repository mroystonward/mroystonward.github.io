var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Lustfaust",
      excerpt: "An exercise in fictional archives and mediated histories - focussing upon little-known, 1970s, German noise band, Lustfaust. Exhibitions and Performances:...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "When We Hit the Sky We Were High Over the Roofs, a Field of Gnarled Antennae",
      excerpt: "Audio installation activating listeners through dynamically modulating sound in space.\n\n\n  \n    \n      \n        \n      \n    \n  \n    \n      \n        \n      \n    \n  \n    \n      \n        \n      \n    \n  \n  \n\n",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "The Rusty Trombone of God",
      excerpt: "Cardiff based DIY gig collective - bringing fringe highlights and dirt-rare performances to Cardiff between 2010 and 2012. And then...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "A Walk by the Water",
      excerpt: "Between the 25th and the 30th of September 2013, in groups and alone, we walked sections of the River Trent...",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Contact Mics Uganda",
      excerpt: "A 2 day workshop ran in the Katwe slums of Nsambya in Kampala, Uganda during December 2013. Participants built contact...",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Audio Transducers Nepal",
      excerpt: "In March 2014 I visited Nepal with my wife. I was there to run a workshop where we would turn...",
      categories: [],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante",
      excerpt: "Composed in response to Marvin Gaye Chetwynd’s exhibition at Nottingham Contemporary as part of their ‘Memory’ project and permanent collection....",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "The Memory Project",
      excerpt: "A realisation of the score ‘Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante’ is played...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Rainforest IV",
      excerpt: "Based upon David Tudor’s Rainforest IV (1973) and realised as a collaborative electronics workshop and performance. Between 1968 and 1973...",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Optophonic Workshop",
      excerpt: "I was invited to run a workshop as part of PS2N’s Optophonic Workshop. We built the same amplifier box and...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "They Ain’t Fucked with the Milk since Louis Pasteur, Except Maybe Diluted It a Little Bit",
      excerpt: "Sound installation and score drawing upon the alternative tuning systems of La Monte Young and the musical legacy of Sunny...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Improvisations: Series 1",
      excerpt: "An ongoing archive of staged realities and material flows leaking into the world, inviting you to listen with the ‘ear...",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "FOAM",
      excerpt: "One off 12” vinyl commission for Mat Jenner’s FOAM project. For FOAM I chose specifically to respond to the physical...",
      categories: [],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Rammel Club",
      excerpt: "Nights of visionary global music in Nottingham, UK. From 2014-2015 I joined Nottingham based DIY gig collective Rammel Club. Artists:...",
      categories: [],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Reactor Halls E14: Cables - Contact Mic Workshop",
      excerpt: "Workshop conducted as part of the Rammel Club/Reactor Halls E14: Cables event. There is something inherently musical in the process...",
      categories: [],
      tags: [],
      id: 14
    });
    
  

  
  
    idx.add({
      title: "Hello World",
      excerpt: "Obligatory first post. Portfolio and more to follow.\n",
      categories: ["update","new","hello-world"],
      tags: [],
      id: 15
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Lustfaust",
        "url": "http://localhost:4000/portfolio/lustfaust/",
        "excerpt": "An exercise in fictional archives and mediated histories - focussing upon little-known, 1970s, German noise band, Lustfaust. Exhibitions and Performances:...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/lustfaust-001.jpg"
          
      },
    
      
      {
        "title": "When We Hit the Sky We Were High Over the Roofs, a Field of Gnarled Antennae",
        "url": "http://localhost:4000/portfolio/when-we-hit-the-sky/",
        "excerpt": "Audio installation activating listeners through dynamically modulating sound in space.\n\n\n  \n    \n      \n        \n      \n    \n  \n    \n      \n        \n      \n    \n  \n    \n      \n        \n      \n    \n  \n  \n\n",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/hit-the-sky-001.jpg"
          
      },
    
      
      {
        "title": "The Rusty Trombone of God",
        "url": "http://localhost:4000/portfolio/rtog/",
        "excerpt": "Cardiff based DIY gig collective - bringing fringe highlights and dirt-rare performances to Cardiff between 2010 and 2012. And then...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/rtog-001.jpg"
          
      },
    
      
      {
        "title": "A Walk by the Water",
        "url": "http://localhost:4000/portfolio/walk-by-the-water/",
        "excerpt": "Between the 25th and the 30th of September 2013, in groups and alone, we walked sections of the River Trent...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/water-001.jpg"
          
      },
    
      
      {
        "title": "Contact Mics Uganda",
        "url": "http://localhost:4000/portfolio/contact-mics-uganda/",
        "excerpt": "A 2 day workshop ran in the Katwe slums of Nsambya in Kampala, Uganda during December 2013. Participants built contact...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/contact-mics-uganda-001.jpg"
          
      },
    
      
      {
        "title": "Audio Transducers Nepal",
        "url": "http://localhost:4000/portfolio/audio-transducers-nepal/",
        "excerpt": "In March 2014 I visited Nepal with my wife. I was there to run a workshop where we would turn...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/audio-transducers-nepal-001.jpg"
          
      },
    
      
      {
        "title": "Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante",
        "url": "http://localhost:4000/portfolio/expand-your-parameters/",
        "excerpt": "Composed in response to Marvin Gaye Chetwynd’s exhibition at Nottingham Contemporary as part of their ‘Memory’ project and permanent collection....",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/expand-your-parameters-001.jpg"
          
      },
    
      
      {
        "title": "The Memory Project",
        "url": "http://localhost:4000/portfolio/the-memory-project/",
        "excerpt": "A realisation of the score ‘Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante’ is played...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/the-memory-project-001.jpg"
          
      },
    
      
      {
        "title": "Rainforest IV",
        "url": "http://localhost:4000/portfolio/rainforest-iv/",
        "excerpt": "Based upon David Tudor’s Rainforest IV (1973) and realised as a collaborative electronics workshop and performance. Between 1968 and 1973...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/rainforest-iv-001.jpg"
          
      },
    
      
      {
        "title": "Optophonic Workshop",
        "url": "http://localhost:4000/portfolio/optophonic-workshop/",
        "excerpt": "I was invited to run a workshop as part of PS2N’s Optophonic Workshop. We built the same amplifier box and...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/optophonic-workshop-001.jpg"
          
      },
    
      
      {
        "title": "They Ain’t Fucked with the Milk since Louis Pasteur, Except Maybe Diluted It a Little Bit",
        "url": "http://localhost:4000/portfolio/aint-fucked-with-the-milk/",
        "excerpt": "Sound installation and score drawing upon the alternative tuning systems of La Monte Young and the musical legacy of Sunny...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/aint-fucked-with-the-milk-004.jpg"
          
      },
    
      
      {
        "title": "Improvisations: Series 1",
        "url": "http://localhost:4000/portfolio/improvisations/",
        "excerpt": "An ongoing archive of staged realities and material flows leaking into the world, inviting you to listen with the ‘ear...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/improvs1-001.jpg"
          
      },
    
      
      {
        "title": "FOAM",
        "url": "http://localhost:4000/portfolio/foam/",
        "excerpt": "One off 12” vinyl commission for Mat Jenner’s FOAM project. For FOAM I chose specifically to respond to the physical...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/foam-004.jpg"
          
      },
    
      
      {
        "title": "Rammel Club",
        "url": "http://localhost:4000/portfolio/rammel-club/",
        "excerpt": "Nights of visionary global music in Nottingham, UK. From 2014-2015 I joined Nottingham based DIY gig collective Rammel Club. Artists:...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/rammel-001.gif"
          
      },
    
      
      {
        "title": "Reactor Halls E14: Cables - Contact Mic Workshop",
        "url": "http://localhost:4000/portfolio/contact-mic-surgery/",
        "excerpt": "Workshop conducted as part of the Rammel Club/Reactor Halls E14: Cables event. There is something inherently musical in the process...",
        "teaser":
          
            "http://localhost:4000/assets/images/portfolio/contact-mic-surgery-001.jpg"
          
      },
    
  
    
    
    
      
      {
        "title": "Hello World",
        "url": "http://localhost:4000/update/new/hello-world/welcome-to-jekyll/",
        "excerpt": "Obligatory first post. Portfolio and more to follow.\n",
        "teaser":
          
            "http://localhost:4000/assets/images/teaser500x300.jpg"
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
