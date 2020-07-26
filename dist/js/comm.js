$(function () {

  var $itemDetail = $('.itemdetail'),
      $itemdetail_depth1 = $itemDetail.find('dt'),
      $itemdetail_depth2 = $itemDetail.find('dd'),
      $itemdetail_head = $('.itemdetail-head'),
      $reportDaily = $('.report-daily>.daily-list > ul > li dd'),
      $scheduleMonth = $('.schedule-month > .daily-list > ul > li dt'),
      $scheduleMonthDD = $('.schedule-month dd .group-period');

  $itemdetail_depth1.on('click',function () {
    $(this).parent('.itemdetail').toggleClass('on');
      $(this).next('.slideToggle').slideToggle('fast');

    // if($(this).parent('dl').hasClass("toggled")) {
    //      $(this).parent('dl').animate({"max-height": "2000px"}).removeClass("toggled");
    //   } else {
    //     $(this).parent('dl').animate({"max-height": "47px"}).addClass("toggled");
    //   }
  });

  $itemdetail_depth2.on('click',function () {
    $(this).toggleClass('on');
  });

  // $itemdetail_head.on('click',function () {
  //   $(this).next('.itemdetail_cont').slideToggle('fast');
  // })

  $reportDaily.on('click',function () {
    $(this).toggleClass('on');
  });

  $scheduleMonth.on('click',function () {
    $(this).parents('li').toggleClass('on');
  });

  $scheduleMonthDD.on('click',function () {
    $(this).toggleClass('on');
  });

});
