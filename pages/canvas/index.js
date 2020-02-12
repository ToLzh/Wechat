// pages/canvas/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onReady: function () {
    var my_carvas = wx.createCanvasContext('myCanvas', this) //1.创建carvas实例对象，方便后续使用。
    // my_carvas.setStrokeStyle('red') //设置边框颜色。
    // my_carvas.moveTo(20, 100)  //设置绘画路线的起点 （20,100）>>>（当前画布对象的 x 轴，当前画布对象的 y 轴）
    // my_carvas.lineTo(120, 100)  //增加一个新点，然后创建一条从上次指定点到目标点的线。（120,100）>>>（当前画布对象的 x 轴，当前画布对象的 y 轴)
    // my_carvas.stroke()  //画出当前路径的边框。默认颜色色为黑色。
    my_carvas.draw()   //将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
  }

})