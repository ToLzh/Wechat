//index.js
//获取应用实例
const app = getApp()

const screenWidth = wx.getSystemInfoSync().screenWidth;
const screenHeight = wx.getSystemInfoSync().screenHeight;

Page({
  data: {
   oriPic:{
      'width':300,
      'hegiht':300,
      'img':[{num:1,src:'/image/pin1.jpg',flag:false},
      {num:2,src:'/image/pin2.jpg',flag:false},
      {num:3,src:'/image/pin3.jpg',flag:false},
      {num:4,src:'/image/pin4.jpg',flag:false}]
   },
   canvas:{
      'width':600,
      'height':600
    },
    bottomVas:{
      'width':screenWidth*0.7,
      'height':80
    },
    width: 60,
    hegiht: 60,
    dif:(screenWidth*0.7 - 2*60)/3,
    newImg:[
      {num:2,src:'/image/pin2.jpg',X:0,Y:0},
      {num:4,src:'/image/pin4.jpg',X:0,Y:0}
    ],
    flag:false,
  },
  onLoad(){
    let num = this.data.newImg.length;
    let dif = (screenWidth*0.7 - num*this.data.width)/(num+1);
    this.setData({dif})
  },
  handleStart(e){
    console.log(e)
    let flag = true;
    let ent = e.currentTarget.dataset.ent;
    let newImg = this.data.newImg
    let index = newImg.findIndex(x=>x.num == ent.num)
    ent.flag = true
    newImg[index] = ent
    this.setData({flag,newImg})
  },
  handleMove(e){
    if(this.data.flag){

      let bw = screenHeight*0.7;
      let ent = e.currentTarget.dataset.ent;
      let curwidth = (screenWidth*this.data.oriPic.width)/750
      let curHeight = (screenWidth*this.data.oriPic.hegiht)/750
      ent.X = e.touches[0].clientX - curwidth/2 - (screenWidth*0.2)/2 ;
      ent.Y = e.touches[0].clientY - bw - curHeight/2 - (this.data.bottomVas.height-curHeight)/2;
      // ent.Y = e.touches[0].clientY - bw + this.data.hegiht/2 - (this.data.bottomVas.height-this.data.hegiht)/2;

      let newImg = this.data.newImg
      let index = newImg.findIndex(x=>x.num == ent.num)
      newImg[index] = ent
      this.setData({ newImg})
    }
  },
  checkPic(){
    console.log("123")
  }
})
