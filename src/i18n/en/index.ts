/* eslint-disable max-len */
import {TranslationMessages} from 'react-admin';
import enMessages from 'ra-language-english';
import enDocs from './enDocs';
import enReports from './enReports';
import enCatalogs from './enCatalogs';
import enInfoRegistries from './enInfoRegistries';
import enSumRegistries from './enSumRegistries';

const translationMessages: TranslationMessages = {
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
    mainTab: 'Summary',
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
      dashboard: 'Dashboard',
      functions: 'Functions',
      resources: 'Resources',
      settings: 'Settings',
      meta: 'Meta',
      members: 'Members',
      managers: 'Managers',
      newMember: 'New member',
      mergeProfiles: 'Merge profiles',
      transactions: 'Transactions',
      issueCardByManager: 'Card issue',
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
      null: 'null',
    },
  },
};

export default translationMessages;
