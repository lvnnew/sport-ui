/* eslint-disable max-len */
import {TranslationMessages} from 'react-admin';
import ruMessages from 'ra-language-russian';
import ruDocs from './ruDocs';
import ruReports from './ruReports';
import ruCatalogs from './ruCatalogs';
import ruInfoRegistries from './ruInfoRegistries';
import ruSumRegistries from './ruSumRegistries';

const customEnglishMessages: TranslationMessages = {
  ...ruMessages,
  app: {
    documents: 'Документы',
    catalogs: 'Справочники',
    infoRegistries: 'Регистры сведений',
    sumRegistries: 'Регистры накоплений',
    reports: 'Отчеты',
    sbrInvestigation: 'Sbr Investigation',
    cardIssue: 'Выпуск карты',

    approve: 'Утвердить',
    cancel: 'Отмена',
    review: 'Отклонить',
    reviewReason: 'Причина отклонения',
    createManualAccounting: 'Создать ручное начисление',

    addRole: 'Добавить роль',
    addPermission: 'Добавить разрешение',
    from: 'From',
    to: 'To',
    add: 'Добавить',
    actions: 'Действия',
    edit: 'Редактировать профиль',
    configuration: 'Configuration',
    dashboard: {
      all_customers: 'See all customers',
      all_reviews: 'See all reviews',
      month_history: '30 Day Revenue History',
      monthly_revenue: 'Monthly Revenue',
      new_customers: 'New Customers',
      new_orders: 'New Orders',
      order: {
        items:
          'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
      },
      pending_orders: 'Pending Orders',
      pending_reviews: 'Pending Reviews',
      welcome: {
        demo_button: 'Source for this demo',
        ra_button: 'react-admin site',
        subtitle:
          'This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it\'s local to your computer, and will reset each time you reload.',
        title: 'Welcome to the react-admin e-commerce demo',
      },
    },
    language: 'Language',
    menu: {
      catalog: 'Catalog',
      customers: 'Customers',
      sales: 'Sales',
    },
    search: 'Поиск',
    theme: {
      dark: 'Dark',
      light: 'Light',
      name: 'Theme',
    },
  },
  validation: {
    minLength: 'Длина минимум:',
    maxLength: 'Длина максимум:',
    minValue: 'Минимальное значение',
    noSpaces: 'Пробелы запрещены.',
    noDigits: 'Цифры запрещены.',
    notFutureDate: 'Выбор будущей даты не допустим',
    required: 'Это обязательное поле',
    onlyLatinLetters: 'Разрешено использовать только латинские буквы. ',
    onlyNumbers: 'Разрешено использовать только цифры',
    exactLength: 'Точное количество символов: %{smart_count}.',
  },
  reportsColumns: {
    date: 'Дата',
    cardNmber: 'Номер карты',
    partner: 'Партнер',
    miles: 'Баллов',
  },
  reports: ruReports,
  documents: ruDocs,
  catalogs: ruCatalogs,
  infoRegistries: ruInfoRegistries,
  sumRegistries: ruSumRegistries,
  menu: {
    dashboard: 'Панель управления',
    members: 'Участники',
    managers: 'Менеджеры',
    newMember: 'Новый участник',
    mergeProfiles: 'Склеить профили',
    transactions: 'Транзакции',
    issueCardByManager: 'Выпуск карты',
  },
  calcs: {
    calculators: 'Калькуляторы',
    milesCalc: 'Начисления за полеты',
    upgradeCalc: 'Списания за апгрейд',
    flightCalc: 'Списания за наградной билет',
  },
  managers: {
    deactivate: 'Деактивировать',
    deactivated: 'Менеджер деактивирован',
  },
  member: {
    show: {
      recalculate: 'Обновить баллы',
      markedAsDeleted: 'Пользователь помечен удаленным',
    },
  },
  members: {
    list: {
      memberType: 'Тип участия',
      search: 'Поиск',
    },
  },
  ra: {
    ...ruMessages.ra,
    page: {
      ...ruMessages.ra.page,
      dashboard: 'Панель управления',
    },
    boolean: {
      ...ruMessages.ra.boolean,
      null: 'No value',
    },
  },
  resources: {
    categories: {
      fields: {
        products: 'Products',
      },
      name: 'Category |||| Categories',
    },
    commands: {
      amount: '1 order |||| %{smart_count} orders',
      fields: {
        address: 'Address',
        basket: {
          delivery: 'Delivery',
          quantity: 'Quantity',
          reference: 'Reference',
          sum: 'Sum',
          tax_rate: 'Tax Rate',
          taxes: 'Tax',
          total: 'Total',
          unit_price: 'Unit Price',
        },
        customer_id: 'Customer',
        date_gte: 'Passed Since',
        date_lte: 'Passed Before',
        nb_items: 'Nb Items',
        returned: 'Returned',
        status: 'Status',
        total_gte: 'Min amount',
      },
      name: 'Order |||| Orders',
      section: {
        customer: 'Customer',
        items: 'Items',
        order: 'Order',
        shipping_address: 'Shipping Address',
        total: 'Totals',
      },
      title: 'Order %{reference}',
    },
    customers: {
      errors: {
        password_mismatch:
          'The password confirmation is not the same as the password.',
      },
      fieldGroups: {
        address: 'Address',
        change_password: 'Change Password',
        history: 'History',
        identity: 'Identity',
        password: 'Password',
        stats: 'Stats',
      },
      fields: {
        commands: 'Orders',
        confirm_password: 'Confirm password',
        first_seen: 'First seen',
        groups: 'Segments',
        last_seen: 'Last seen',
        last_seen_gte: 'Visited Since',
        name: 'Name',
        password: 'Password',
        stateAbbr: 'State',
        total_spent: 'Total spent',
      },
      filters: {
        earlier: 'Earlier',
        group: 'Segment',
        has_newsletter: 'Has newsletter',
        has_ordered: 'Has ordered',
        last_month: 'Last month',
        last_visited: 'Last visited',
        last_week: 'Last week',
        this_month: 'This month',
        this_week: 'This week',
        today: 'Today',
      },
      name: 'Customer |||| Customers',
      page: {
        delete: 'Delete Customer',
      },
    },
    invoices: {
      fields: {
        address: 'Address',
        command_id: 'Order',
        customer_id: 'Customer',
        date: 'Invoice date',
        date_gte: 'Passed Since',
        date_lte: 'Passed Before',
        total_gte: 'Min amount',
      },
      name: 'Invoice |||| Invoices',
    },
    products: {
      fields: {
        category_id: 'Category',
        height: 'Height',
        height_gte: 'Min height',
        height_lte: 'Max height',
        image: 'Image',
        price: 'Price',
        reference: 'Reference',
        sales: 'Sales',
        stock: 'Stock',
        stock_lte: 'Low Stock',
        thumbnail: 'Thumbnail',
        width: 'Width',
        width_gte: 'Min width',
        width_lte: 'Max width',
      },
      filters: {
        average_sellers: 'Average',
        average_stock: '10 - 49 items',
        best_sellers: 'Best sellers',
        categories: 'Categories',
        enough_stock: '50 items & more',
        low_sellers: 'Low',
        low_stock: '1 - 9 items',
        never_sold: 'Never sold',
        no_stock: 'Out of stock',
        sales: 'Sales',
        stock: 'Stock',
      },
      name: 'Poster |||| Posters',
      tabs: {
        description: 'Description',
        details: 'Details',
        image: 'Image',
        reviews: 'Reviews',
      },
    },
    reviews: {
      action: {
        accept: 'Accept',
        reject: 'Reject',
      },
      amount: '1 review |||| %{smart_count} reviews',
      detail: 'Review detail',
      fields: {
        command_id: 'Order',
        comment: 'Comment',
        customer_id: 'Customer',
        date: 'Date',
        date_gte: 'Posted since',
        date_lte: 'Posted before',
        product_id: 'Product',
        rating: 'Rating',
      },
      name: 'Review |||| Reviews',
      notification: {
        approved_error: 'Error: Review not approved',
        approved_success: 'Review approved',
        rejected_error: 'Error: Review not rejected',
        rejected_success: 'Review rejected',
      },
      relative_to_poster: 'Review on poster',
    },
    segments: {
      data: {
        collector: 'Collector',
        compulsive: 'Compulsive',
        ordered_once: 'Ordered once',
        regular: 'Regular',
        returns: 'Returns',
        reviewer: 'Reviewer',
      },
      fields: {
        customers: 'Customers',
        name: 'Name',
      },
      name: 'Segment |||| Segments',
    },
  },
};

export default customEnglishMessages;
