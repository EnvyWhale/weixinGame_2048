Page({
    data: {
        latitude: 30.160766,
        longitude: 114.948279,
        markers: [{
            iconPath: '/images/navi.png',
            id: 0,
            latitude: 30.160766,
            longitude: 114.948279,
            width: 50,
            height: 50
        }]

    },
    markertap: function () {
        wx.openLocation({
            latitude: this.data.latitude,
            longitude: this.data.longitude,
            name: '湖北理工学院',
            address: '湖北省 黄石市 下陆区 湖北理工学院'
        })
    }
})