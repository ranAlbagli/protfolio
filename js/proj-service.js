'use strict'

 var gProjs;

function createProjs() {
   gProjs=[           createProj('mineSweeper','Mine swepper','Be carful of the mines',
                      'Expose all the mines posions to win','https://ranalbagli.github.io/mine-sweeper/','April 2019'),
                      createProj ('wizard1','Guess who','better push those boxes',
                      'lorem ipsum','https://ranalbagli.github.io/guess-who/','May 2019'),
                      
]    
}

function createProj(id,name,title,desc,url,publishedAt){

    return {
              id:id,
              name:name,
              title: title,
              desc:desc,
              url:url,
              publishedAt:publishedAt,
            
    }
}


function getProj(projId){

    var found = gProjs.find(function(proj){
       return proj.id===projId
    })
    return found;
}