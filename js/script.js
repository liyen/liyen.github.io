// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById( "btn-back-to-top" );
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function clickNavBtn() {
  var checkBox = document.getElementById( "nav_btn" );
  var sidewrapper = document.getElementById( "nav_wrapper" );

  // get button icon
  var navIcon = document.getElementById("navIcon");

  // If the checkbox is checked, show right side menu
  if ( checkBox.checked == true ) {
    showRightSideMenu();
  } else {
    hideRightSideMenu();
  }
};

function showRightSideMenu() {  
  var checkBox = document.getElementById( "nav_btn" );
  var sidewrapper = document.getElementById( "nav_wrapper" );

  // get button icon
  var navIcon = document.getElementById("navIcon");
  checkBox.checked = true;
  navIcon.classList.replace("fa-bars", "fa-xmark");
  sidewrapper.className = "showSideBar";
};

function hideRightSideMenu() {  
  var checkBox = document.getElementById( "nav_btn" );
  var navIcon = document.getElementById("navIcon");
  var sidewrapper = document.getElementById( "nav_wrapper" );
  checkBox.checked = false;

  navIcon.classList.replace("fa-xmark", "fa-bars");
  sidewrapper.className = "hideSideBar";
};