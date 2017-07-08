var data = require('../../data.js');
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      page_num: 1,
      activity_data: data.data.activity.slice(0, 5),
      swiperUrls: [
          '/images/swiper/1.jpg',
          '/images/swiper/2.jpg',
          '/images/swiper/3.jpg',
      ],
      tag: ['学术活动','社团活动','外语讲座','人工智能','学院通知','报销流程'],
      temp_data: [{'data':1},{'data':2}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindscroll: function(e){
      console.log('e.detail.scrollTop');
  }
})