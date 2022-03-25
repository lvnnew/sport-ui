/* eslint-disable max-len */
import {TranslationMessages} from 'react-admin';
import enMessages from 'ra-language-english';
import enDocs from './enDocs';
import enReports from './enReports';
import enCatalogs from './enCatalogs';
import enInfoRegistries from './enInfoRegistries';
import enSumRegistries from './enSumRegistries';

const customEnglishMessages: TranslationMessages = {
  ...enMessages,
  app: {
    documents: 'Documents',
    catalogs: 'Catalogs',
    infoRegistries: 'Info registries',
    sumRegistries: 'Sum registries',
    reports: 'Reports',
    sbrInvestigation: 'Sbr Investigation',
    cardIssue: 'Card issue',

    approve: 'Approve',
    cancel: 'Cancel',
    review: 'Review',
    reviewReason: 'Review reason',
    createManualAccounting: 'Create manual accounting',

    addRole: 'Add role',
    addPermission: 'Add permission',
    from: 'From',
    to: 'To',
    add: 'Add',
    actions: 'Actions',
    edit: 'Edit',
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
    search: 'Search',
    theme: {
      dark: 'Dark',
      light: 'Light',
      name: 'Theme',
    },
  },
  validation: {
    minLength: 'Minimum length:',
    maxLength: 'Maximum length:',
    minValue: 'Minimum value',
    noSpaces: 'Spaces are not allowed. ',
    noDigits: 'Digits are not allowed. ',
    notFutureDate: 'Choosing a future date is not allowed',
    required: 'This field is required',
    onlyLatinLetters: 'Only latin letters allowed. ',
    onlyNumbers: 'Only numbers allowed',
    exactLength: 'Exact symbols quantity: %{smart_count}.',
  },
  reportsColumns: {
    date: 'Date',
    cardNmber: 'Card number',
    partner: 'Partner',
    miles: 'Miles',
  },
  reports: enReports,
  calcs: {
    calculators: 'Calculators',
    milesCalc: 'Miles to receive',
    upgradeCalc: 'Upgrade calculator',
    flightCalc: 'Flight calculator',
  },
  documents: enDocs,
  catalogs: enCatalogs,
  infoRegistries: enInfoRegistries,
  sumRegistries: enSumRegistries,
  menu: {
    dashboard: 'Dashboard',
    members: 'Members',
    managers: 'Managers',
    newMember: 'New member',
    mergeProfiles: 'Merge profiles',
    transactions: 'Transactions',
    issueCardByManager: 'Card issue',
  },
  managers: {
    deactivate: 'Deactivate',
    deactivated: 'Manager deactivated',
  },
  member: {
    show: {
      recalculate: 'Recalculate',
      markedAsDeleted: 'Status changed to Deleted',
    },
  },
  members: {
    list: {
      memberType: 'Member type',
      search: 'Search',
    },
  },
  ra: {
    ...enMessages.ra,
    boolean: {
      ...enMessages.ra.boolean,
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
    posts: {
      name: 'Posts',
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
    users: {
      name: 'Users',
    },
  },
};

export default customEnglishMessages;
