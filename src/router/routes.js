export default [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/user-me',
        name: 'me',
        component: () => import('@/views/users/Me')
    },
    {
        path: '/userInfo/1/edit',
        name: 'InfoEdit',
        component: () => import('@/views/users/InfoEdit')
    },
    {
      path: '/userBindingCard/1/edit',
      name: 'userBindingCard',
      component: () => import('@/views/users/BindingCard')
    },
    {
        path: '/user-vip',
        name: 'UserVip',
        component: () => import('@/views/vips/Vip')
    },
    {
        path: '/yxxy-doc',
        name: 'YxxyDoc',
        component: () => import('@/views/vips/YxxyDoc')
    },
    {
        path: '/',
        name: 'HomeIndex',
        component: () => import('@/views/home/Index')
    },
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: () => import('@/views/Home')
    // },
    // 其他未配置的路由都跳转到首页
    {
        path: '*',
        // 重定向
        redirect: '/'
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    // 编辑资料路由
    {
        path: '/users/1/edit',
        //name: 'EditUsers',
        component: () => import('@/views/users/Edit.vue'),
        children: [{
                path: '',
                name: 'EditProfile',
                component: () => import('@/views/users/Profile.vue'),
                // auth 为 true，标识当前路由需要登录才能访问
                meta: {
                    auth: true
                }
            },
            // EditAvatar
            {
                path: '/users/1/edit_avatar',
                name: 'EditAvatar',
                component: () => import('@/views/users/Avatar.vue'),
                meta: {
                    auth: true
                }
            },
            // EditPassword
            {
                path: '/users/1/edit_password',
                name: 'EditPassword',
                component: () => import('@/views/users/Password.vue'),
                meta: {
                    auth: true
                }
            }
        ]
    },
    // Create
    {
        path: '/articles/create',
        name: 'Create',
        component: () => import('@/views/articles/Create'),
        meta: {
            auth: true
        }
    },
    // Content
    // {
    //     path: '/articles/:articleId/content',
    //     name: 'Content',
    //     component: () => import('@/views/articles/Content.vue')
    // },
    // Edit
    {
        path: '/articles/:articleId/edit',
        name: 'Edit',
        component: () => import('@/views/articles/Create'),
        meta: {
            auth: true
        }
    },
    // Column
    {
        path: '/:user',
        component: () => import('@/views/articles/Column'),
        children: [{
                path: '',
                name: 'Column',
                component: () => import('@/views/articles/List.vue')
            },
            {
                path: '/articles/:articleId/content',
                name: 'Content',
                component: () => import('@/views/articles/Content.vue')
            }
        ]
    },
]
