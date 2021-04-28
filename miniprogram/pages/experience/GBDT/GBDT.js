// pages/GBDT/GBDT.js
var util = require('../../../util/util.js');
var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {
  },
  formsubmit(e) {
    util.reqFunc("https://phmlearn.com/component/upload/ML/model/158/368",
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.output_fileName,
      },'result',function(res){
        console.log("sada",res.data);
        app.globalData.resultArray = [
          res.data.data.result.accuracy.toFixed(5), 
          res.data.data.result.recall.toFixed(5), 
          res.data.data.result.precision.toFixed(5), 
          res.data.data.result.fMeasure, 
          res.data.data.result.rocArea];
      })
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

  }
})