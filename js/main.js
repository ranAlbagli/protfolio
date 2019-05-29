console.log('Starting up');

$(document).ready(initPage);

function initPage() {
    createProjs();
    renderProjs();
}

function renderProjs() {
    var strHtml = '';
    gProjs.forEach(function (proj){
      strHtml += ` <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid proj-img" src="img/portfolio/${proj.id}.png"alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
          </div>
        </div>`
    })
    $('.head-protfolio').html(strHtml)
}


function renderModal(projId) {
    var proj = getProj(projId)
    var strHtml = `<div class="col-lg-8 mx-auto">
 <div class="modal-body">

   <h2>${proj.name}</h2>
   <p class="item-intro text-muted">${proj.title}</p>
   <img class="img-fluid d-block mx-auto modal-img" src="img/portfolio/${proj.id}.png" alt="">
   <ul class="list-inline">
     <li>${proj.publishedAt}</li>
   </ul>
   <a href='${proj.url}'>Go to the project</a>
   <button class="btn btn-primary" data-dismiss="modal" type="button">
       <i class="fa fa-times"></i>
       Close Project</button>
 </div>
</div>`
    $('.head-modal').html(strHtml)
}



function onContact() {
    var userSubject = $('.user-subject').val();
    var userMsg = $('.user-msg').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=albagli.ran@gmail.com&su=${userSubject}&body=${userMsg}`, '_blank')
}








