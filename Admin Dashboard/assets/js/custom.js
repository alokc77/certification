
// accessibility
$(document).ready(function () {
	document.addEventListener("keyup", function (e) {
		if (e.keyCode === 9) {
			jQuery("body").addClass("show-focus-outlines");
     
		}
	});

	document.addEventListener("mousedown", function (e) {
		jQuery("body").removeClass("show-focus-outlines");

	});
 

 });

 $('.arrow').keydown(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
    $(this).children('ul.sub-menu').toggleClass('show');
  }
  });



$(document).ready(function(){
  $(".guideline-checklist").click(function(){
    $('.checklist-show').show();
    $('.checklist-hide').hide();
  });
 

});



// progress form 
$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  var current = 1;
  var steps = $("fieldset").length;
  
  setProgressBar(current);
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
 next_fs.show();
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(++current);
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
 previous_fs.show();
  
 current_fs.animate({opacity: 0}, {
  step: function(now) {
 opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 500
  });
  setProgressBar(--current);
  });
  
  function setProgressBar(curStep){
  var percent = parseFloat(100 / steps) * curStep;
  percent = percent.toFixed();
  $(".progress-bar")
  .css("width",percent+"%")
  }
  
  $(".submit").click(function(){
  return false;
  })
  
  });
  //progress form accessibility
  // $("#progressbar li a").attr('tabindex' , '-1');
  $("#progressbar li.active a").attr('tabindex' , '0');


// sidebar menu 
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".hamburger");
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});



$('.nav-control').click(function(e){
  let hasClass= $('.sidebar').hasClass('close');
  if (hasClass){
    $('.content-body').css('margin-left', '6rem');
   
  }
  else{
    $('.content-body').css('margin-left', '21.563rem');
   
  }
 
});


var eventFired = 0;
$(window).on('resize', function() {
  if (!eventFired) {
      if (($(window).width() < 1024) && ($(window).width() > 767)) {
        $('.sidebar').addClass('close');
        $('.content-body').css('margin-left', '6rem');
      }
  }
});


if (($(window).width() < 1024) && ($(window).width() > 767)) {
  $('.sidebar').addClass('close');
  $('.content-body').css('margin-left', '6rem');

}









 






