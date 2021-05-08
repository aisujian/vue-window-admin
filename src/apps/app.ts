export default {
  _apps: [
    {
      name: '个人设置',
      appid: 'Setting',
      icon: 'Setting',
      window: {
        title: '个人设置',
        left: 200,
        top: 300,
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600
      }
    },
    {
      name: '资源管理',
      appid: 'Resource',
      icon: 'Resource',
      window: {
        title: '资源管理',
        left: 200,
        top: 300,
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600
      }
    }
  ],
  apps: [
    { x: 0, y: 0, w: 1, h: 2, i: '0', name: '个人设置', icon: 'Setting', appid: 'Setting' },
    // { x: 1, y: 0, w: 1, h: 2, i: '1', name: '命令行', icon: 'Powershell', appid: 'Powershell' },
    { x: 1, y: 0, w: 1, h: 2, i: '2', name: '团队管理', icon: 'People', appid: 'People' },
    { x: 2, y: 0, w: 1, h: 2, i: '3', name: '全局搜索', icon: 'Search', appid: 'Search' },
    { x: 3, y: 0, w: 1, h: 2, i: '4', name: '监控中心', icon: 'Monitor', appid: 'Monitor' },
    // { x: 5, y: 0, w: 1, h: 2, i: '5', name: '浏览器', icon: 'Browser', appid: 'Browser' },
    { x: 4, y: 0, w: 1, h: 2, i: '7', name: '资源管理', icon: 'Resource', appid: 'Resource' },
    { x: 5, y: 0, w: 1, h: 2, i: '9', name: '帮助中心', icon: 'Help', appid: 'Help' },
    { x: 6, y: 0, w: 1, h: 2, i: '10', name: '控制面板', icon: 'ControlPanel', appid: 'ControlPanel' },
    { x: 0, y: 1, w: 1, h: 2, i: '12', name: '用户中心', icon: 'User', appid: 'User' },
    { x: 1, y: 1, w: 1, h: 2, i: '13', name: '作业中心', icon: 'Work', appid: 'Work' },
    { x: 2, y: 1, w: 1, h: 2, i: '21', name: '费用中心', icon: 'Money', appid: 'Money' },
    { x: 3, y: 1, w: 1, h: 2, i: '14', name: '工单中心', icon: 'WorkOrder', appid: 'WorkOrder' },
    {
      x: 4,
      y: 1,
      w: 1,
      h: 2,
      i: '15',
      name: '消息中心',
      icon: 'Message',
      appid: 'Message',
      window: {
        stratX: 200,
        startY: 300,
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    },
    { x: 5, y: 1, w: 1, h: 2, i: '8', name: '日志中心', icon: 'Logs', appid: 'Logs' },
    {
      x: 6,
      y: 1,
      w: 1,
      h: 2,
      i: '16',
      name: '云账号接入',
      icon: 'CloudAccount',
      appid: 'CloudAccount'
    },
    { x: 0, y: 2, w: 1, h: 2, i: '18', name: '物理设备管理', icon: 'Physical', appid: 'Physical' },
    { x: 1, y: 2, w: 1, h: 2, i: '19', name: '成本中心', icon: 'Cost', appid: 'Cost' },
    { x: 2, y: 2, w: 1, h: 2, i: '20', name: '安全中心', icon: 'Security', appid: 'Security' }
  ],
  mainMenu: [
    { x: 0, y: 0, w: 1, h: 2, i: '0', name: '个人设置', icon: 'Setting', appid: 'Setting' },
    // { x: 1, y: 0, w: 1, h: 2, i: '1', name: '命令行', icon: 'Powershell', appid: 'Powershell' },
    { x: 1, y: 0, w: 1, h: 2, i: '2', name: '团队管理', icon: 'People', appid: 'People' },
    { x: 2, y: 0, w: 1, h: 2, i: '3', name: '全局搜索', icon: 'Search', appid: 'Search' },
    { x: 3, y: 0, w: 1, h: 2, i: '4', name: '监控中心', icon: 'Monitor', appid: 'Monitor' },
    // { x: 5, y: 0, w: 1, h: 2, i: '5', name: '浏览器', icon: 'Browser', appid: 'Browser' },
    { x: 4, y: 0, w: 1, h: 2, i: '7', name: '资源管理', icon: 'Resource', appid: 'Resource' },
    { x: 5, y: 0, w: 1, h: 2, i: '9', name: '帮助中心', icon: 'Help', appid: 'Help' },
    { x: 6, y: 0, w: 1, h: 2, i: '10', name: '控制面板', icon: 'ControlPanel', appid: 'ControlPanel' },
    { x: 0, y: 1, w: 1, h: 2, i: '12', name: '用户中心', icon: 'User', appid: 'User' },
    { x: 1, y: 1, w: 1, h: 2, i: '13', name: '作业中心', icon: 'Work', appid: 'Work' },
    { x: 2, y: 1, w: 1, h: 2, i: '21', name: '费用中心', icon: 'Money', appid: 'Money' },
    { x: 3, y: 1, w: 1, h: 2, i: '14', name: '工单中心', icon: 'WorkOrder', appid: 'WorkOrder' },
    {
      x: 4,
      y: 1,
      w: 1,
      h: 2,
      i: '15',
      name: '消息中心',
      icon: 'Message',
      appid: 'Message',
      window: {
        stratX: 200,
        startY: 200,
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    },
    { x: 5, y: 1, w: 1, h: 2, i: '8', name: '日志中心', icon: 'Logs', appid: 'Logs' },
    {
      x: 6,
      y: 1,
      w: 1,
      h: 2,
      i: '16',
      name: '云账号接入',
      icon: 'CloudAccount',
      appid: 'CloudAccount'
    },
    { x: 0, y: 2, w: 1, h: 2, i: '18', name: '物理设备管理', icon: 'Physical', appid: 'Physical' },
    { x: 1, y: 2, w: 1, h: 2, i: '19', name: '成本中心', icon: 'Cost', appid: 'Cost' },
    { x: 2, y: 2, w: 1, h: 2, i: '20', name: '安全中心', icon: 'Security', appid: 'Security' }
  ],
  desktop: [
    // {
    //   x: 0,
    //   y: 0,
    //   w: 1,
    //   h: 2,
    //   i: '0',
    //   name: '公有云管理',
    //   icon: 'Public',
    //   appid: 'Public',
    //   multiple: false
    // },
    // {
    //   x: 0,
    //   y: 1,
    //   w: 1,
    //   h: 2,
    //   i: '1',
    //   name: '私有云管理',
    //   icon: 'Private',
    //   appid: 'Private',
    //   multiple: false
    // },
    {
      x: 0,
      y: 2,
      w: 1,
      h: 2,
      i: '2',
      name: '资源管理',
      icon: 'Resource',
      appid: 'Resource',
      multiple: false,
      window: {
        stratX: 150,
        startY: 50,
        width: 'max',
        height: 'max',
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    },
    {
      x: 0,
      y: 3,
      w: 1,
      h: 2,
      i: '3',
      name: '监控中心',
      icon: 'Monitor',
      appid: 'Monitor',
      multiple: false,
      window: {
        stratX: 200,
        startY: 300,
        width: 900,
        height: 500,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    },
    {
      x: 0,
      y: 4,
      w: 1,
      h: 2,
      i: '4',
      name: '控制面板',
      icon: 'ControlPanel',
      appid: 'ControlPanel',
      multiple: false
    },
    {
      x: 0,
      y: 5,
      w: 1,
      h: 2,
      i: '5',
      name: '作业中心',
      icon: 'Work',
      appid: 'Work',
      multiple: false,
      window: {
        stratX: 100,
        startY: 100,
        width: 800,
        height: 500,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    },
    {
      x: 0,
      y: 6,
      w: 1,
      h: 2,
      i: '6',
      name: '安全中心',
      icon: 'Security',
      appid: 'Security',
      multiple: false,
      window: {
        stratX: 100,
        startY: 100,
        width: 800,
        height: 500,
        minWidth: 800,
        minHeight: 600,
        maxWidth: 'unset',
        maxHeight: 'unset',
        maximize: false,
        minimize: true
      }
    }
    // {
    //   x: 1,
    //   y: 0,
    //   w: 1,
    //   h: 2,
    //   i: '33',
    //   name: 'SmartAnt一站式迁移平台',
    //   icon: 'SmartAnt',
    //   appid: 'SmartAnt',
    //   multiple: false,
    //   type: 'iframe',
    //   url: 'https://baidu.com',
    //   window: {
    //     stratX: 0,
    //     startY: 41,
    //     width: 1250,
    //     height: 768,
    //     minWidth: 1250,
    //     minHeight: 768,
    //     maxWidth: 'unset',
    //     maxHeight: 'unset',
    //     maximize: false,
    //     minimize: true
    //   }
    // }
  ]
}
