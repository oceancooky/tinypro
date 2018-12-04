//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      },
      {
        id: 2,
        latitude: 23.099994,
        longitude: 113.344520,
        iconPath: '/images/location.png',
        name: 'T.I.T 创意园'
      },
      {
        id: 3,
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '/images/location.png',
        name: 'T.I.T 创意园'
      }
    ],

  },
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function() {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },

  onLoad: function() {},
})