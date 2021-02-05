export default {
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333',
    list: [
      {
        'pagePath': 'pages/index/index',
        'iconPath': './assets/images/home.png',
        'selectedIconPath': './assets/images/home-s.png'
      },
      {
        'pagePath': 'pages/home/index',
        'iconPath': './assets/images/user.png',
        'selectedIconPath': './assets/images/user-s.png'
      }
    ]
  }
}
