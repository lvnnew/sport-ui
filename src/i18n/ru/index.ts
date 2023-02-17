/* eslint-disable max-len */
import {TranslationMessages} from 'react-admin';
import ruMessages from 'ra-language-russian';
import ruDocs from './ruDocs';
import ruReports from './ruReports';
import ruCatalogs from './ruCatalogs';
import ruInfoRegistries from './ruInfoRegistries';
import ruSumRegistries from './ruSumRegistries';
import {DeepPartial} from 'utility-types';
import * as R from 'ramda';

const translationMessages: DeepPartial<TranslationMessages> = {
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

    newPassword: 'Новый пароль',
    changePasswordByManagerId: 'Изменить пароль',
    addRole: 'Добавить роль',
    addPermission: 'Добавить разрешение',
    mainTab: 'Основная',
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
      dashboard: 'Панель управления',
      functions: 'Functions',
      resources: 'Resources',
      settings: 'Настройки',
      meta: 'Meta',
      members: 'Участники',
      managers: 'Менеджеры',
      newMember: 'Новый участник',
      mergeProfiles: 'Склеить профили',
      transactions: 'Транзакции',
      issueCardByManager: 'Выпуск карты',
    },
    theme: {
      dark: 'Dark',
      light: 'Light',
      name: 'Theme',
    },
  },
  validation: {
    minLength: 'Mинимальная длина - %{min} символов. ',
    maxLength: 'Максимальная длина - %{max} символов. ',
    minValue: 'Минимальное значение - %{min}. ',
    maxValue: 'Максимальное значение - %{max}. ',
    noSpaces: 'Пробелы запрещены. ',
    noDigits: 'Цифры запрещены. ',
    password: 'Пароль должен содержать строчные и прописные буквы, цифры и спецсимволы. ',
    notFutureDate: 'Выбор будущей даты недопустим. ',
    required: 'Это обязательное поле. ',
    onlyLatinLetters: 'Разрешено использовать только латинские буквы. ',
    onlyLatinAndCyrillicLetters: 'Разрешено использовать только латиницу и кириллицу. ',
    onlyNumbers: 'Разрешено использовать только цифры. ',
    onlyLetters: 'Разрешено использовать только буквы. ',
    onlyIntegers: 'Разрешено использовать только целые числа. ',
    exactLength: 'Точное количество символов: %{length}. ',
    datesInFilter: 'Необходимо заполнить даты в фильтрах. ',
    emailFormat: 'Введите корректный email. ',
    onlyLatinAndCyrillicLettersAndDigits: 'Можно использовать только буквы и цифры. ',
    notPastDate: 'Выбор прошедшей даты недопустим. ',
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
  ra: {
    action: {
      remove_all_filters: 'Удалить все фильтры',
      create_item: 'Создать %{item}',
    },
    boolean: {
      null: 'не выбрано',
    },
    saved_queries: {
      new_label: 'Сохранить текущие настройки',
    },
    page: {
      empty: 'Нет элементов.',
      invite: 'Хотите добавить?',
    },
    message: {
      noOptions: 'Нет вариантов',
    },
  },
};

export default R.mergeDeepRight(ruMessages, translationMessages) as TranslationMessages;
