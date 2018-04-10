/**
 * Author: lj
 * Date: 2018/4/9
 * Time: 23:20
 * Desc: 左侧的guide栏
 */


require('./index.css')

var _mm             = require('util/mm.js');
var templateIndex   = require('./index.string');

var floorGuide={
    option : {
        name : '',
        keyword_list: [
            {keywords_item: [{hrefKeywords: '手机', keyword: '手机'}, {hrefKeywords: '数码', keyword: '数码'}],},
            {
                keywords_item: [
                    {hrefKeywords: '电脑', keyword: '电脑'},
                    {hrefKeywords: '数码配件', keyword: '数码配件'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '电视', keyword: '电视'},
                    {hrefKeywords: '空调', keyword: '空调'},
                    {hrefKeywords: '冰箱', keyword: '冰箱'},
                    {hrefKeywords: '洗衣机', keyword: '洗衣机'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '厨卫家电', keyword: '厨卫家电'},
                    {hrefKeywords: '小家电', keyword: '小家电'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '家具', keyword: '家具'},
                    {hrefKeywords: '家具', keyword: '家具'},
                    {hrefKeywords: '家装', keyword: '家装'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '厨卫家电', keyword: '厨卫家电'},
                    {hrefKeywords: '小家电', keyword: '小家电'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '个护化妆', keyword: '个护化妆'},
                    {hrefKeywords: '清洁用品', keyword: '清洁用品'},
                    {hrefKeywords: '纸品', keyword: '纸品'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '母婴用品', keyword: '母婴用品'},
                    {hrefKeywords: '儿童玩具', keyword: '儿童玩具'},
                    {hrefKeywords: '童装童鞋', keyword: '童装童鞋'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '母婴用品', keyword: '母婴用品'},
                    {hrefKeywords: '儿童玩具', keyword: '儿童玩具'},
                    {hrefKeywords: '童装童鞋', keyword: '童装童鞋'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '鞋靴', keyword: '鞋靴'},
                    {hrefKeywords: '箱包', keyword: '箱包'},
                    {hrefKeywords: '珠宝', keyword: '珠宝'},
                    {hrefKeywords: '钟表', keyword: '钟表'}
                ],
            },
            {
                keywords_item: [
                    {hrefKeywords: '图书', keyword: '图书'},
                    {hrefKeywords: '音像', keyword: '音像'},
                    {hrefKeywords: '电子书', keyword: '电子书'}
                ],
            },

        ],
        bottom_solider:[
            {desc:'',href:'',imgSrc:""},
            {desc:'',href:'',imgSrc:""},
            {desc:'',href:'',imgSrc:""},
        ]
    },
    init : function(option){
        // 合并选项
        $.extend(this.option, option);
        this.renderNav();
    },
    // 渲染导航菜单
    renderNav : function(){
        // 计算active数据
        // for(var i = 0, iLength = this.option.keyword_list.length; i < iLength; i++){
        //     if(this.option.floorNavList[i].name === this.option.name){
        //         this.option.floorNavList[i].isActive = true;
        //     }
        // };
        // 渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            keyword_list : this.option.keyword_list
        });
        // 把html放入容器
        $('#keywords-list').html(navHtml);
    }
}

floorGuide.init()