/**
 * Author: lj
 * Date: 2018/4/2
 * Time: 23:51
 *
 */


require('./index.css')

var _mm             = require('util/mm.js');
var templateIndex   = require('./index.string');



// 侧边导航
var floorNav = {
    option : {
        name : '',
        floorNavList : [
            {floorNavClass : 'words', desc : '新品优选', floorNavUrl: '#J_newGoods',name:'new-sell'},
            {floorNavClass : 'words', desc : '当前好卖', floorNavUrl: '.#J_hotGoods',name:'hot-sell'},
            {floorNavClass : 'words', desc : '高毛精选', floorNavUrl: '#J_gaomao',name:'select-sell'},
            {floorNavClass : 'words', desc : '常备好货', floorNavUrl: '#J_changbei',name:'bank-sell'},
            {floorNavClass : 'words', desc : '资讯信息', floorNavUrl: '#J_article',name:'info-sell'}
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
        for(var i = 0, iLength = this.option.floorNavList.length; i < iLength; i++){
            if(this.option.floorNavList[i].name === this.option.name){
                this.option.floorNavList[i].isActive = true;
            }
        };
        // 渲染list数据
        var navHtml = _mm.renderHtml(templateIndex, {
            floorNavList : this.option.floorNavList
        });
        // 把html放入容器
        $('#floorNav').html(navHtml);
    }
};
//使用这里的时候需要传{name:''} 去激活
//根据当前的位置来判断 当前激活的背景module.exports =
floorNav.init();