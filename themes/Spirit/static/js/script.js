
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.body.className += " stop-scrolling";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   document.body.className = document.body.className.replace( /(?:^|\s)stop-scrolling(?!\S)/g , '' );

}

