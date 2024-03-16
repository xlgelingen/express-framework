exports.seed = function (knex) {
    return Promise.all([
        knex('users').insert([
            { name:'aa', email:'aa@', password: 111 },
            { name:'bb', email:'bb@', password: 222 },
            { name:'cc', email:'cc@', password: 333},
            { name:'dd', email:'dd@', password: 444 },
            { name:'ee', email:'ee@', password: 555 },
            { name:'ff', email:'ff@', password: 666 },
        ]),

        knex('roles').insert([
            { id: 1, name: '管理员' },
        ]),

        knex('permissions').insert([
            { id: 1, group_id: 1, slug: 'carousel-manager', name: '轮播图管理' },
            { id: 2, group_id: 2, slug: 'admin-manager', name: '管理员' },
        ]),

        knex('role_permissions').insert([
            { role_id: 1, permission_id: 1 },
            { role_id: 1, permission_id: 2 },
        ]),

        knex('user_roles').insert([
            { role_id: 1, user_id: 1 },
        ]),

        knex('clue').insert([
            {name: '顾一', phone: '13511111111', utm: 'baidu_search', create_time: '2024-01-15 16:30:21', sale_name: '季梦梦', status: 2, remark: '备注1' },
            {name: '季二', phone: '13522222222', utm: 'baidu_search', create_time: '2024-01-15 16:30:21', sale_name: '季梦梦', status: 3, remark: '备注2' },
            {name: '苏三', phone: '13533333333', utm: 'baidu_search', create_time: '2024-01-15 16:32:46', sale_name: '王晨晨', status: 1, remark: '备注3' },
            {name: '梦四', phone: '13544444444', utm: 'google', create_time: '2024-01-16 23:09:34', sale_name: '曲筱筱', status: 3, remark: '222' },
            {name: '武五', phone: '13555555555', utm: 'google', create_time: '2024-01-17 11:06:22', sale_name: '曲筱筱', status: 4, remark: '66666666' },
        ]),

        knex('clue_log').insert([
            { clue_id: 5, create_time: '2024-01-17 12:39:38', content: '挂断了，顾客脾气有点大哦'},
            { clue_id: 5, create_time: '2024-01-17 12:58:27', content: '6666666'},
            { clue_id: 4, create_time: '2024-01-17 12:58:42', content: '1111111'},
            { clue_id: 4, create_time: '2024-01-17 14:43:09', content: '用户接电话了'},
            { clue_id: 1, create_time: '2024-01-17 15:32:26', content: '111'},
            { clue_id: 1, create_time: '2024-01-17 15:32:30', content: '222'},
            { clue_id: 3, create_time: '2024-01-17 16:44:07', content: '苏三苏三'},
            { clue_id: 3, create_time: '2024-01-17 16:44:21', content: '苏三苏三苏三'},
            { clue_id: 2, create_time: '2024-01-17 16:44:42', content: '顾客没接电话'},
            { clue_id: 2, create_time: '2024-01-17 16:44:50', content: '顾客没接电话'},
        ]),
    ])
};
