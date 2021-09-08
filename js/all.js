$(document).ready(function () {
  
  // 漢堡選單
  $('.open-menu').click(function (e) { 
    e.preventDefault();
    $('.container').toggleClass('show');
  });

});