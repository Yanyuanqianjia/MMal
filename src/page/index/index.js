/*
* @Author: Rosen
* @Date:   2017-05-08 15:19:12
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-26 19:36:18
*/


//首页加载的时候需要做的事情
//左侧栏，focus
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var _mm             = require('util/mm.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
    //这里对guide进行初始话
    //对下面的小图进行初始化
    //对左侧的用户区域进行初始化
    //对商品的module区域进行初始化
    //对商品的double区域进行初始化
    //对copyRight进行初始化
    //引导区域进行初始化


});
