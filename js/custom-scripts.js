$(window).on('load',function() {
    $(".loader").delay(1000).fadeOut("slow");
    $("#overlayer").delay(1000).fadeOut("slow");
});


/* close overlay */
$('.close-nav').on('click',function(){
    // $('body').removeClass('overlay-active');
    $('.side-nav').addClass('re-animate');
    setTimeout(function () {
        $('.side-nav').removeClass('open');
    },200);
    $.scrollify.enable();
});

$('.close-nav + ul li').on('click',function() {
    $('.side-nav').removeClass('open');
})

//--------------------------------------------------
/* navigation*/
$('.nav-toggler .open-nav').on('click', function(){
    // $('body').addClass('overlay-active');
    $('.side-nav').addClass('open');
    $('.side-nav').removeClass('re-animate');
    $.scrollify.disable();
});

//--------------------------------
$(function(){
    $('.nav-tabs').each(function () {
        var IDs = $(this).attr('id');
        var before = $(this).siblings('.before');

        var tabElements = $(this).find('li');
        var tabsWidth = tabElements.map(function(){
            return $(this).width();
        });

        var maxwidth = Math.max.apply(Math, tabsWidth);

        $(this).css('width', $(this).find('li').length * maxwidth );
        tabElements.each(function () {
            $(this).width(maxwidth);
        });

        before.css({
            'width':maxwidth,
        });



        var toggle = $(this).find('a[data-toggle="tab"]');
        toggle.on('shown.bs.tab', function (e){
            var parent = $(this).closest('.nav-tabs').attr('id');
            var activeTab = $(this).closest('.nav-tabs').find('.active').parent().index();

            var activeBefore = $(this).closest('.nav-tabs').siblings('.before');

            activeBefore.css({
                'left': maxwidth * activeTab
            })
        })

    })
});



$(document).on('click','.the-message .btn', function () {
    $(this).parent().removeClass("active");
});
