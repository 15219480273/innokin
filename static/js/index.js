$(document).ready(function () {
  // Design list switching
  $(".list-of-filter h5").click(function () {
    var i = $(".list-of-filter h5").index(this);
    $(".list-of-filter h5").removeClass("list-of-filter-active");
    $(".list-of-filter h5").eq(i).addClass("list-of-filter-active");
    $(".designs-list").css("display", "none");
    $(".designs-list").eq(i).css("display", "grid");
  });

  // Button under banner
  $(".banner-btn a").click(function () {
    var i = $(".banner-btn a").index(this);
    $(".banner-btn a").removeClass("banner-btn-active");
    $(".banner-btn a").eq(i).addClass("banner-btn-active");
    if (i === 0) {
      $("html,body").animate({ scrollTop: $("#get").offset().top }, 600);
    } else if (i === 1) {
      $("html,body").animate({ scrollTop: $("#view").offset().top }, 600);
    }
  });
});
