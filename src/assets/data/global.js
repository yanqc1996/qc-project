const menuConfig = [{
        code: 'A001',
        title: '首页',
        path: '/main/index'
    },
    {
        code: 'A002',
        title: '通用查询',
        path: '/main/customQuery'
    },
    {
        code: 'A003',
        title: '复杂查询',
        path: '/main/complexCond'
    },
    {
        code: 'A004',
        title: '模板管理',
        submenu: [{
                code: 'A004001',
                title: '模板查看',
                path: '/main/tempMana'
            },
            {
                code: 'A004002',
                title: '模板生成',
                path: '/main/template'
            }
        ]
    },
    {
        code: 'A005',
        title: '历史任务',
        path: '/main/histMission'
    },
    {
        code: 'A006',
        title: '权限管理',
        submenu: [{
                code: 'A006001',
                title: '用户管理',
                path: '/main/usermana'
            },
            {
                code: 'A006002',
                title: '角色管理',
                path: '/main/rolemana'
            }
        ]
    },
    {
        code: 'A007',
        title: '快捷工具',
        submenu: [{
            code: '003002',
            title: 'SQL编辑器'
        }]
    }
]
export default {
    menuConfig

}