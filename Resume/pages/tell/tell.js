function getCurrentDate() {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + '-' + M + '-' + D
}

Page({
    data: {
        interview_date: getCurrentDate()
    },
    pickerChange: function (e) {
        this.setData({
            'interview_date': e.detail.value
        })
    },
    // 验证姓名
    nameChange: function (e) {
        this.checkName(e.detail.value)
    },
    // 验证手机号
    phoneChange: function (e) {
        this.checkPhone(e.detail.value)
    },
    // 验证地址
    addressChange: function (e) {
        this.checkAddress(e.detail.value)
    },
    // checkName()方法
    checkName: function (data) {
        var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
        return this.check(data, reg, '姓名输入错误或不能为空！')
    },
    // checkPhone()方法
    checkPhone: function (data) {
        var reg = /^(((13)|(15)|(17)|(18))\d{9})$/;
        return this.check(data, reg, '手机号码输入有误或不能为空！')
    },
    // checkAddress()方法
    checkAddress: function (data) {
        var reg = /^\S{6,}$/
        return this.check(data, reg, '面试地点长度至少6位且不能为空！')
    },
    // check()方法
    check: function (data, reg, errMsg) {
        if (!reg.test(data)) {
            wx.showToast({
                title: errMsg,
                icon: 'none',
                duration: 1500
            })
            return false
        }
        return true
    },
    formSubmit: function (e) {
        var name = e.detail.value.name
        var phone = e.detail.value.phone
        var c_date = e.detail.value.c_date
        var address = e.detail.value.address

        if (this.checkName(name) && this.checkPhone(phone) && this.checkAddress(address)) {
            wx.showToast({
                title: '提交成功！',
                icon: 'success',
                duration: 1500
            })
        }
    },
})