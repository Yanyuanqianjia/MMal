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
require("./module/index")
var navSide         = require('page/common/nav-side/index.js');
var templateBanner  = require('./banner.string');
var templateGuide   = require('./index.string');
var templateBotton   = require('./bottom-solider.string');
var _mm             = require('util/mm.js');


var floorGuide={
    option : {
        name : '',
        //这部分数据可以使用ajax获取
        keyword_list: [
            {keywords_item: [{hrefKeywords: '手机', keyword: '手机'}, {hrefKeywords: '数码', keyword: '数码'}],},
            {keywords_item: [{hrefKeywords: '电脑', keyword: '电脑'},{hrefKeywords: '数码配件', keyword: '数码配件'}],},
            {keywords_item: [{hrefKeywords: '电视', keyword: '电视'},{hrefKeywords: '空调', keyword: '空调'},{hrefKeywords: '冰箱', keyword: '冰箱'},
                             {hrefKeywords: '洗衣机', keyword: '洗衣机'}],},
            {keywords_item: [{hrefKeywords: '厨卫家电', keyword: '厨卫家电'},{hrefKeywords: '小家电', keyword: '小家电'}],},
            {keywords_item: [{hrefKeywords: '家具', keyword: '家具'},{hrefKeywords: '家具', keyword: '家具'},{hrefKeywords: '家装', keyword: '家装'}],},
            {keywords_item: [{hrefKeywords: '厨卫家电', keyword: '厨卫家电'},{hrefKeywords: '小家电', keyword: '小家电'}],},
            {keywords_item: [{hrefKeywords: '个护化妆', keyword: '个护化妆'},{hrefKeywords: '清洁用品', keyword: '清洁用品'},{hrefKeywords: '纸品', keyword: '纸品'}],},
            {keywords_item: [{hrefKeywords: '母婴用品', keyword: '母婴用品'},{hrefKeywords: '儿童玩具', keyword: '儿童玩具'},{hrefKeywords: '童装童鞋', keyword: '童装童鞋'}],},
            {keywords_item: [{hrefKeywords: '母婴用品', keyword: '母婴用品'},{hrefKeywords: '儿童玩具', keyword: '儿童玩具'},{hrefKeywords: '童装童鞋', keyword: '童装童鞋'}],},
            {keywords_item: [{hrefKeywords: '鞋靴', keyword: '鞋靴'},{hrefKeywords: '箱包', keyword: '箱包'},
                             {hrefKeywords: '珠宝', keyword: '珠宝'},{hrefKeywords: '钟表', keyword: '钟表'}],},
            {keywords_item: [{hrefKeywords: '图书', keyword: '图书'},{hrefKeywords: '音像', keyword: '音像'},{hrefKeywords: '电子书', keyword: '电子书'}],},
        ],
        bottom_solider:[
            //这里可以使用ajax从后台获取
            {desc:'精选秒杀', href:'', imgSrc:"https://static.ypzdw.com/Handler/FileHandler.ashx?fid=634e29ea-267b-4895-8a4d-1dc7df3d74a0",id:"bottom_solider_id1"},
            {desc:'每日好卷', href:'', imgSrc:"https://static.ypzdw.com/Handler/FileHandler.ashx?fid=8356956c-d082-4c7a-a2cd-e8991ecacf7b",id:"bottom_solider_id2"},
            {desc:'微课堂'  , href:'', imgSrc:"https://static.ypzdw.com/Handler/FileHandler.ashx?fid=ed97d2da-09b6-4819-8a2b-9b75e9896fb4",id:"bottom_solider_id3"}
        //
        ]
    },
    init : function(option){
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    renderNav : function(){
        var navHtml = _mm.renderHtml(templateGuide, {
            keyword_list : this.option.keyword_list
        });
        $('#keywords-list').html(navHtml);

        var bottomSoliderHtml = _mm.renderHtml(templateBotton, {
            bottom_solider: this.option.bottom_solider
        });
        $("#bottom_solider").html(bottomSoliderHtml);

    }
}



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
    floorGuide.init()
    //对下面的小图进行初始化
    //对左侧的用户区域进行初始化
    //对商品的module区域进行初始化
    //对商品的double区域进行初始化
    //对copyRight进行初始化
    //引导区域进行初始化
});

