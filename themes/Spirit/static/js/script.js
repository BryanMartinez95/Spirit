function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.body.style.backgroundColor = "#AA0000 !important";
//   /  document.getElementById("body").style.backgroundColor = "#f8f8f8 ";
    
    // document.getElementById("content").style.backgroundColor = "rgba(0,0,0,0.4)";
    // document.getElementById("content").style.opacity = "0.5";
    $('.dim').fadeIn(200);
    event.stopPropagation();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.dim').fadeOut(200);
    // document.getElementById("content").style.backgroundColor = "white";
}

$('html').click(function() {
  //Hide the menus if visible
  var width= document.getElementById("mySidenav").style.width;
  console.log("test");
  console.log(width);
  if(width != "0")
  {
    document.getElementById("mySidenav").style.width = "0";
     $('.dim').fadeOut(200);
  }

//   document.getElementById("content").style.backgroundColor = "white";
});

// $('#menucontainer').click(function(event){
//     event.stopPropagation();
// });

$(document).ready(function() {
  $("ul.opMenu li").click(function(){
   $('#MainOptSubMenu',this).css('visibility', 'visible');
  });

  $("ul.opMenu li").mouseleave(function(){
      $('#MainOptSubMenu',this).css('visibility', 'hidden');
  });
});
