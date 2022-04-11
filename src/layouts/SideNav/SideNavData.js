const navData = [
    {
        name: 'Home',
        icon: ['fa-solid', 'fa-home'],
        link: '/',
        roles: ['superAdmin', 'admin', 'teacher', 'student']
    },
    {
        groupName: 'Teacher',
        icon: ['fa-solid', 'fa-chalkboard-teacher'],
        navLinks: [
            {
                name: 'My tests',
                icon: ['fa-solid', 'fa-list'],
                link: '/form'
            }
        ],
        roles: ['superAdmin', 'admin', 'teacher']
    },
    {
        name: 'Do exam',
        icon: ['fa-solid', 'fa-text-slash'],
        link: '/find',
        roles: ['superAdmin', 'admin', 'student']
    },
]

export default navData