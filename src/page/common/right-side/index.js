/**
 *
 * Author lj
 * Date 2018-04-02 14:54
 * Descriotion 侧边栏的js
 *
 */

require('./index.css')
var _cart           = require('service/cart-service.js');
//给下面的添加点击时间，返回最顶端
$("#sidebarGoTop").on("click",function() {
        $(document).scrollTop(0)
})
//绑定事件
$("#cartNum").on('click',function () {
    _cart.getCartList()
})
//初始化 根据登录状态来显示购物车的数量


