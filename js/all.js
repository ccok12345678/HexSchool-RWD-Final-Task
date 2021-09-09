$(document).ready(function () {
  
  // 漢堡選單
  $('.open-menu').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('show');
  });

  // off canvas 側邊選單 
  $('.open').click(function (e) { 
    e.preventDefault();
    $('body').addClass('open-aside');
  });
  $('.close, .aside-bg').click(function (e) { 
    e.preventDefault();
    $('body').removeClass('open-aside');
  });

});