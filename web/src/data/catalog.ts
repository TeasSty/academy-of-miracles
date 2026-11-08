export type ActId = 'shows' | 'heroes' | 'disco' | 'ethno'

export const CONTACTS = {
  phoneDisplay: '+7 (3953) 48-97-00',
  phoneHref: 'tel:+73953489700',
  vk: 'https://vk.com/academyofmiracles',
  orderName: 'Дмитрий Иванов',
  leadName: 'Дарья Иванова',
  ratingVk: '4,5',
  reviewsVk: 16,
  rating2gis: '4,4',
  reviews2gis: 23,
  subscribers: '3,7K',
} as const

export const RIDER = {
  duration: '50 мин',
  cast: '2 аниматора + диджей',
  capacity: 'до 15 детей',
  zone: 'Цены для Центрального района Братска',
  travel: 'Выезд в другие районы — с учётом транспорта',
} as const

export const PATHWAYS = [
  { id: 'birthday', label: 'День рождения', href: '#acts' },
  { id: 'school', label: 'Сад и школа', href: '#acts' },
  { id: 'newyear', label: 'Новый год', href: '#catalog' },
  { id: 'show', label: 'Шоу-эффект', href: '#act-shows' },
  { id: 'hero', label: 'Любимый герой', href: '#act-heroes' },
  { id: 'ethno', label: 'Этно / Сибирь', href: '#act-ethno' },
] as const

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const HERO_IMAGE = asset('images/hero-final.jpg')

export const ACTS: Array<{
  id: ActId
  title: string
  kicker: string
  priceFrom: string
  stageClass: string
  image: string
  imageAlt: string
  highlights: string[]
  note?: string
}> = [
  {
    id: 'shows',
    title: 'Увлекательные шоу',
    kicker: 'Акт I',
    priceFrom: 'от 7 000 ₽',
    stageClass: 'stage-bubbles',
    image: asset('images/act-shows-final.jpg'),
    imageAlt: 'Научное шоу: плазменный шар и свет',
    highlights: ['«Где логика?»', 'Наука-шоу', 'Шоу гигантских мыльных пузырей'],
  },
  {
    id: 'heroes',
    title: 'Активные программы и герои',
    kicker: 'Акт II',
    priceFrom: 'от 3 600 ₽',
    stageClass: 'stage-heroes',
    image: asset('images/act-heroes-final.jpg'),
    imageAlt: 'Аниматор и ребёнок на празднике',
    highlights: [
      'Трансформер, Бэтмен, Человек-паук',
      'Уэнсдей, Хогвартс, Лило и Стич',
      'Пиратский квест, сибирская Шамбала',
    ],
    note: '26+ готовых программ',
  },
  {
    id: 'disco',
    title: 'Интерактивные дискотеки',
    kicker: 'Акт III',
    priceFrom: 'от 7 000 ₽',
    stageClass: 'stage-disco',
    image: asset('images/act-disco-final.jpg'),
    imageAlt: 'Праздничный свет, конфетти и толпа',
    highlights: ['Неон-пати', 'Серебро-пати', 'Дискомен / Дискокостюмы', 'Дэнс-микс-макс'],
  },
  {
    id: 'ethno',
    title: 'Этнические программы',
    kicker: 'Акт IV',
    priceFrom: 'от 5 000 ₽',
    stageClass: 'stage-ethno',
    image: asset('images/act-ethno-final.jpg'),
    imageAlt: 'Детское творчество и яркий праздничный момент',
    highlights: [
      'Богатырь и конь',
      'Баба Яга и Леший',
      'В поисках сибирской Шамбалы',
      'Русские народные костюмы',
    ],
  },
]

export const SHOW_LIST = ['«Где логика?»', 'Наука-шоу', 'Шоу гигантских мыльных пузырей']

export const HERO_LIST = [
  'Трансформер',
  'Бэтмен',
  'Железный человек',
  'Человек-паук',
  'Куроми и Мелоди',
  'Лабубу',
  'Лило и Стич',
  'Аладдин, Жасмин, Джин',
  'Ледяное сердце',
  'Эверестик и Маша',
  'Охотники за привидениями',
  'Черепашки-ниндзя',
  'Монстры на каникулах',
  'Тайны Хогвартса',
  'Уэнсдей',
  'Зарница',
  'Пиратский квест',
  'Миссия выполнима',
  'Взрывной квест',
  'Казаки-разбойники',
  'В поисках сибирской Шамбалы',
  'Археологический квест',
  'Хаус-батл',
  'Вилли Вонка',
  'Стимпанк',
  'Пират-гигант',
]

export const DISCO_LIST = [
  'Дискомен',
  'Дискокостюмы',
  'Дискотека с любым героем',
  'Неон-пати [30/50 мин]',
  'Серебро-пати [30/50 мин]',
  'Дэнс-микс-макс [30/50 мин]',
]

export const ETHNO_LIST = [
  'Богатырь и его верный конь',
  'Баба Яга и Леший',
  'Лесной квест',
  'Зарница',
  'В поисках сибирской Шамбалы',
  'Казаки-разбойники',
  'Русские народные костюмы',
]

export const EXTRA_CATEGORIES = [
  { title: 'Новый год', priceFrom: 'от 2 000 ₽', href: CONTACTS.vk },
  { title: 'Поздравления', priceFrom: 'от 2 000 ₽', href: CONTACTS.vk },
  { title: 'Дополнительные услуги', priceFrom: 'от 2 000 ₽', href: CONTACTS.vk },
] as const
