var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "The Memory Project",
      excerpt: "A realisation of the score ‘Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante’ is played...",
      categories: [],
      tags: [],
      id: 0
    });
    
  

  
  
    idx.add({
      title: "Hello World",
      excerpt: "Obligatory first post. Portfolio and more to follow.\n",
      categories: ["update","new","hello-world"],
      tags: [],
      id: 1
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "The Memory Project",
        "url": "http://localhost:4000/portfolio/the-memory-project/",
        "excerpt": "A realisation of the score ‘Do You Want To Expand Your Parameters Or Play Museums Like Some Dilettante’ is played...",
        "teaser":
          
            "http://localhost:4000/assets/images/the-memory-project-001.jpg"
          
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
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
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
