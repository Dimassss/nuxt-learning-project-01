export const nav = [
  {
    icon: 'mdi-view-dashboard',
    title: 'Dashboard',
    href: '/'
  },
  {
    icon: 'mdi-calendar-multiselect',
    title: 'Расписание',
    href: '/schedule',
    childrens: [
      {
        title: 'Залы',
        href: '/rooms'
      },
      {
        title: 'Направления',
        href: '/directions'
      },
      {
        title: 'Классы',
        href: '/classes'
      },
      {
        title: 'Все расписание',
        href: '/calendar'
      },
      {
        title: 'Должности',
        href: '/positions'
      },
      {
        title: 'Подразделения',
        href: '/units'
      },
      {
        title: 'Типы занятий',
        href: '/types'
      }
    ]
  },
  {
    icon: 'mdi-weight-lifter',
    title: 'Тренеры',
    href: '/coaches',
    childrens: [
      {
        title: 'Список',
        href: '/list'
      },
      {
        title: 'Отчеты',
        href: '/reports'
      },
      {
        title: 'Рейтинги',
        href: '/rate'
      },
      {
        title: 'График Роботы',
        href: '/schedule'
      }
    ]
  },
  {
    icon: 'mdi-account-multiple',
    title: 'Клиенты',
    href: '/clients',
    childrens: [
      {
        title: 'Список',
        href: '/list'
      },
      {
        title: 'Рассылки',
        href: '/newsletters'
      },
      {
        title: 'Записи',
        href: '/orders'
      }
    ]
  },
  {
    icon: 'mdi-file-document-box-search',
    title: 'Отчеты',
    href: '/',
    childrens: [
      {
        title: 'Продажи',
        href: '/'
      },
      {
        title: 'Сотрудники',
        href: '/'
      },
      {
        title: 'Услуги',
        href: '/'
      },
      {
        title: 'Клиенты',
        href: '/'
      }
    ]
  },
  {
    icon: 'mdi-cash-multiple',
    title: 'Финансы',
    href: '/',
    childrens: [
      {
        title: 'Счета и кассы',
        href: '/'
      },
      {
        title: 'Эквайринг',
        href: '/'
      },
      {
        title: 'Зарплаты',
        href: '/'
      }
    ]
  },
  {
    icon: 'mdi-settings',
    title: 'Настройки',
    href: '/settings',
    childrens: [
      {
        title: 'Пользователи',
        href: '/users'
      },
      {
        title: 'Уведомления',
        href: '/notifications'
      },
      {
        title: 'Права доступа',
        href: '/roles'
      }
    ]
  },
  {
    icon: 'mdi-account',
    title: 'Профиль',
    href: '/profile'
  },
  {
    icon: 'mdi-help-circle',
    title: 'Помощь',
    href: '/help'
  }
];
