export let MENU_ITEM = [
    {
        path: 'dashboard',
        title: 'داشبورد',
        icon: 'dashboard'
    },
    {
        path: 'licenses',
        title: 'ثبت جواز',
        icon: 'edit'
    },
    {
        path: 'ngo',
        title: 'موسسات',
        icon: 'business',
        children: [
            {
                path: 'ngo-list',
                title: 'لست موسسات'
            },
            {
                path: 'public-info',
                title: 'معلومات عمومی'
            },
            {
                path: 'keypersons',
                title: 'افراد کلیدی'
            },
            {
                path: 'address',
                title: 'آدرس'
            },
            {
                path: 'delegations',
                title: 'هيت ها'
            },
            {
                path: 'banck-accounts',
                title: 'حساب بانکی',
            },
            {
                path: 'assessments',
                title: ' ارزیابی موسسات',
            },
            {
                path: 'activities',
                title: 'عدم فعالیت موسسه'
            },
        ]
    },
    {
        path: 'projects',
        title: 'پروژه ها',
        icon: 'widgets',
        children: [
            {
                path: 'project-list',
                title: 'لست پروژه ها'
            },
            {
                path: 'employees',
                title: 'کارمندان'
            },
            {
                path: 'equipments',
                title: 'تجهیزات'
            },
            {
                path: 'vehicles',
                title: 'وسایل نقلیه'
            }
        ]
    },
    {
        path: 'reports',
        title: 'راپورها',
        icon: 'event_note',
        children: [
            {
                path: 'project-info',
                title: 'معلومات عمومی پروژه'
            },
            {
                path: 'employees',
                title: 'کارمندان'
            },
            {
                path: 'equipments',
                title: 'تجهیزات'
            },
            {
                path: 'six-months-report',
                title: 'راپور شش ماهه'
            },
        ]
    },
    {
        path: 'static-data',
        title: 'معلومات ثابت',
        icon: 'folder_open',
        children: [
            {
                path: 'lookups',
                title: 'معلومات ثابت '
            },
            {
                path: 'types',
                title: 'انواع'
            }
        ]
    },
    {
        path: 'website',
        title: 'ویب سایت',
        icon: 'vpn_lock',
        children: [
            {
                path: 'home',
                title: 'صفحه اصلی'
            },
            {
                path: 'about-us',
                title: 'درباره ما'
            },
            {
                path: 'org-registeration',
                title: 'ثبت موسسه'
            },
            {
                path: 'org-list',
                title: 'لست موسسه'
            },
            {
                path: 'news',
                title: 'رسانه ها'
            },
            {
                path: 'org-laws',
                title: 'قانون موسسات'
            },
            {
                path: 'jobs',
                title: 'کاریابی'
            },

            {
                path: 'biography',
                title: 'بیوگرافی',
            },
            {
                path: 'contact-us',
                title: 'تماس'
            }
        ]
    }

];

