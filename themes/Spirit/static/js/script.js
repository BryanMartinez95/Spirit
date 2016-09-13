function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    event.stopPropagation();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$('html').click(function() {
  //Hide the menus if visible
  document.getElementById("mySidenav").style.width = "0";
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
