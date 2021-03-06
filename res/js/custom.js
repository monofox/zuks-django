$(function () {
    $('.header .navbar-nav a').smoothScroll();

    function activate(navbarItem) {
      navbarItem.addClass('active').siblings('li').removeClass('active');
    }

    $('.section').mouseenter(function() {
      var sectionName = $(this).attr('id');
      var navbarItem = $('.navbar-nav a[href="#' + sectionName + '"]').parent();
      activate(navbarItem);
    });

    $('.navbar-nav a').click(function() {
      var navbarItem = $(this).parent();
      activate(navbarItem);
    });

    $('#contactform').ajaxForm(function(returnVal) {
        $('#contactform').html($(returnVal).html());
    });

    $('#newsletterform').ajaxForm(function(returnVal) {
        $('#newsletterform').html($(returnVal).html());
    });
});
