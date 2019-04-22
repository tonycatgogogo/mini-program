//index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerList: [],
        navList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 1.请求轮播图数据
        const list = [{
            "id": 3,
            "image": "https://image1.suning.cn/uimg/cms/img/155572257063879778.gif?format=_is_1242w_610h",
            "link": ""
        },
            {
                "id": 4,
                "image": "https://image.suning.cn/uimg/aps/material/155566632491683107.jpg?format=_is_1242w_610h",
                "link": ""
            },
            {
                "id": 5,
                "image": "https://image.suning.cn/uimg/aps/material/155555971120765914.jpg?format=_is_1242w_610h",
                "link": ""
            }
        ]
        wx.request({
            url: "https://locally.uieee.com/slides",
            success: (res) => {
                list.forEach(item => {
                    res.data.push(item)
                })
        this.setData({
            bannerList: res.data
        })
      }
        })
        // 2.请求导航栏数据
        wx.request({
            url: "https://locally.uieee.com/categories",
            success: (res) => {
                this.setData({
                    navList: res.data
                })
            }
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