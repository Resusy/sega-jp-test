var bgC = [
    '#3361c4',
    '#158d8d',
    '#d6563d',
    '#dd3e6f',
    '#743e5f',
    '#e57e29',
    '#17c261',
    '#e9b730'];

var bgImg = [
    'genre-icon-sp.png',
    'genre-icon-pc.png',
    'genre-icon-ac.png',
    'genre-icon-prize.png',
    'genre-icon-darts.png',
    'genre-icon-amusement.png',
    'genre-icon-toy.png',
    'genre-icon-anime.png'];

var bgImgHv = [
    'genre-icon-sp_hv.png',
    'genre-icon-pc_hv.png',
    'genre-icon-ac_hv.png',
    'genre-icon-prize_hv.png',
    'genre-icon-darts_hv.png',
    'genre-icon-amusement_hv.png',
    'genre-icon-toy_hv.png',
    'genre-icon-anime_hv.png'];

var imgSrc = [
    'bg_00_topbg_kemono-friends.jpg',
    'bnr_top_shin-sakura_b.jpg',
    'bg_00_topbg_chunithm_191024.jpg',
    '4_orbi_location_bg.jpg',
    'A_segajpTOP_BANANYA_blur.jpg',
    'bnr_top_kimetsu_bg.jpg'
];

//遍历li
$('.nav-item>li').each(function (index, ele) {
    //更改a的背景图
    $(ele).children('a').css({
        backgroundImage: 'url(\"./images/' + bgImg[index] + '\")'
    });
    //更改背景色
    $(ele).children('.down-box').css({
        borderColor: bgC[index]
    });
    $(ele).children('.down-box').children('.local-area').children('li').children('a').css({
        color: bgC[index]
    });
    //鼠标移入
    $(ele).mouseenter(function () {
        $(this).children('a').css({
            backgroundImage: 'url(\"./images/' + bgImgHv[index] + '\")',
            backgroundColor: bgC[index],
            color: '#fff'
        });
        $(this).children('.down-box').stop().fadeIn(100);
    });
    //鼠标移出
    $(ele).mouseleave(function () {
        $(this).children('a').css({
            backgroundImage: 'url(\"./images/' + bgImg[index] + '\")',
            backgroundColor: '#fff',
            color: '#000'
        });
        $(this).children('.down-box').stop().fadeOut(200);
    });
});

//轮播图
var num = 0;
var timer = null;
var len = $('.banner .banner-in li').length - 1;
// console.log(len);

//鼠标移入下方按钮时停止自动播放，改为手动
$('.banner .rotary-btn li').mouseenter(function () {
    var index = $(this).index();
    clearInterval(timer);
    num = index;
    play(index);
});
//鼠标移出下方按钮时自动播放
$('.banner .rotary-btn li').mouseleave(function () {
    autoplay();
});
//鼠标移入图片时停止自动播放，移出图片时自动播放
$('.banner .banner-in').hover(function () {
    clearInterval(timer);
}, function () {
    autoplay();
});

autoplay();

//手动播放函数
function play(i) {
    $('.banner .rotary-btn li').eq(i).addClass('current').siblings().removeClass('current');
    $('.banner .banner-in li').eq(i).stop().fadeIn().siblings().stop().fadeOut();
    $('.banner').css({
        /*backgroundImage: 'url("./images/bg_00_topbg_tokyo2020olympic.jpg")'*/
        backgroundImage: 'url(\"./images/' + imgSrc[i] + '\")'
    });
}

//自动播放函数
function autoplay() {
    timer = setInterval(function () {
        if (num > len) {
            num = 0;
        }
        play(num);
        num++;
    }, 4000);
}

$('.slide-show .arrow .right').on('click', function () {
    $(this).css({
        borderLeftColor: 'white'
    });
    $('.slide-show .arrow .left').css({
        borderRightColor: '#0078ff'
    })
    $('.slide-show .list').animate({
        marginLeft: -386
    });
});

$('.slide-show .arrow .left').on('click', function () {
    $(this).css({
        borderRightColor: 'white'
    });
    $('.slide-show .arrow .right').css({
        borderLeftColor: '#0078ff'
    })
    $('.slide-show .list').animate({
        marginLeft: 0
    });
});

$('#back').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    });
});

(function () {
    $(window).scroll(function () {
        var scrollT = $(window).scrollTop();
        if (scrollT < 200) {
            $('#back').stop().fadeOut(200);
        } else {
            $('#back').stop().fadeIn(200);
        }
    })
})();