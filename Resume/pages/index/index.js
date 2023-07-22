Page({
    BackgroundAudio : null,
    onReady: function () {
        // 创建getBackgroundAudioManager实例对象
        this.BackgroundAudio=wx.getBackgroundAudioManager()
        // 音频标题
        this.BackgroundAudio.title = '晴天'
        // 歌手名
        this.BackgroundAudio.singer = '周杰伦'
        // 指定音频的数据源，设置了 src 之后会自动播放
        this.BackgroundAudio.src ='http://121.40.230.147/images/qingtian.mp3'
    },
    data: {
        isPlayingMusic: true,
    },
    // 播放器的单击事件
    play: function () {
        if (this.data.isPlayingMusic) {
            this.BackgroundAudio.pause()
        } else {
            this.BackgroundAudio.play()
        }
        this.setData({
            isPlayingMusic: !this.data.isPlayingMusic
        })
    }
})