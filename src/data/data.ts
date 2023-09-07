export const menu = [
  {
    title: 'Historia',
    title_en: 'Historia',
    title_fr: 'Historia',
    title_por: 'Historia',
    path: '',
    url: '/historia'
  },
  {
    title: 'Habitaciones',
    title_en: 'Rooms',
    title_fr: 'Chambres',
    title_por: 'Quartos',
    path: '#habitaciones',
    url: '/habitaciones'
  },
  {
    title: 'Servicios',
    title_en: 'Services',
    title_fr: 'Services',
    title_por: 'Serviços',
    path: '#servicios',
    url: '/servicios'
  },
  {
    title: 'Restaurant',
    title_en: 'Restaurant',
    title_fr: 'Restaurant',
    title_por: 'Restaurante',
    path: '#restaurant',
    url: '/restaurant'
  },
  {
    title: 'Ubicación',
    title_en: 'Location',
    title_fr: 'Location',
    title_por: 'Localização',
    path: '#ubicacion',
    url: '/ubicacion'
  },
  {
    title: 'Ruta del vino',
    title_en: 'Wine Route',
    title_fr: 'Route du vin',
    title_por: 'Rota do Vinho',
    path: '',
    url: '/ruta-del-vino'
  },
  {
    title: 'Beneficios y Promociones',
    title_en: 'Benefits and Promotions',
    title_fr: 'Bénéfices et promotions',
    title_por: 'Benefícios e promoções',
    path: '',
    url: '/beneficios-y-promociones'
  },
  {
    title: 'Viví Molinos',
    title_en: 'Live Molinos',
    title_fr: 'Vivimos Molinos',
    title_por: 'Vivimos Molinos',
    path: '',
    url: '/vivi-molinos'
  },
  {
    title: 'Contacto',
    title_en: 'Contact',
    title_fr: 'Contact',
    title_por: 'Contato',
    path: '#contacto',
    url: '/contacto'
  }
]

export const languages = [
  {
    title: 'ES'
  },
  {
    title: 'EN'
  },
  {
    title: 'FR'
  },
  {
    title: 'POR'
  }
]

export const dataContact = {
  es: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje :-(',
    required: 'Por favor complete este campo'
  },
  en: {
    name: 'Name and surname*',
    city: 'City',
    email: 'E-Mail*',
    location: 'Location',
    phone: 'Phone*',
    country: 'Country',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message :-(',
    required: 'Please complete this field'
  }
}

interface Texts {
  [key: string]: {
    title: string
    subtitle: string
    image?: string
  }
}

export const textsNosotros: Texts = {
  ES: {
    title: 'pasado',
    subtitle: 'y presente',
    image: '/ En medio de los cerros Salteño'
  },
  EN: {
    title: 'past',
    subtitle: 'and future',
    image: '/ In the middle of the Salteño hills'
  },
  FR: {
    title: 'passé',
    subtitle: 'et présent',
    image: '/ Au milieu des collines de Salteño'
  },
  POR: {
    title: 'passado',
    subtitle: 'e presente',
    image: '/ No meio das colinas de Salteño'
  }
}

export const textsHabitaciones: Texts = {
  ES: {
    title: 'habitaciones',
    subtitle: 'nuestras'
  },
  EN: {
    title: 'rooms',
    subtitle: 'our'
  },
  FR: {
    title: 'chambres',
    subtitle: 'nos'
  },
  POR: {
    title: 'quartos',
    subtitle: 'nossos'
  }
}
