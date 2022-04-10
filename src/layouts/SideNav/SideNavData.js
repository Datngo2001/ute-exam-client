const navData = [
    {
        name: 'Home',
        icon: ['fa-solid', 'fa-home'],
        link: '/'
    },
    {
        
        name:'Google Form',
        icon:['fa-brands','fa-google'],
        link:'/form'
    },
    {
        groupName: 'System management',
        icon: ['fa-solid', 'fa-computer'],
        navLinks: [
            {
                name: 'User Management',
                icon: ['fa-solid', 'fa-user'],
                link: '/form'
            }
        ]
    },
]

export default navData