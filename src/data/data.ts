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

interface dataContactProps {
  [key: string]: {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
    send: string
    thanks: string
    error: string
    required: string
  }
}

export const dataContact: dataContactProps = {
  ES: {
    name: 'Nombre y apellido*',
    city: 'Ciudad',
    email: 'E-Mail*',
    location: 'Localidad',
    phone: 'Teléfono*',
    country: 'País',
    message: 'Mensaje',
    send: 'Enviar',
    thanks: '¡Su mensaje fue enviado! Gracias por contactarte con nosotros.',
    error: 'Se produjo un error al enviar el mensaje.',
    required: 'Por favor complete este campo.'
  },
  EN: {
    name: 'Name and surname*',
    city: 'City',
    email: 'E-Mail*',
    location: 'Location',
    phone: 'Phone*',
    country: 'Country',
    message: 'Message',
    send: 'Send',
    thanks: 'Your message was sent! Thank you for contacting us.',
    error: 'An error occurred while sending the message.',
    required: 'Please complete this field.'
  },
  FR: {
    name: 'Nom et prénom*',
    city: 'Ville',
    email: 'E-Mail*',
    location: 'Localisation',
    phone: 'Téléphone*',
    country: 'Pays',
    message: 'Message',
    send: 'Envoyer',
    thanks: 'Votre message a été envoyé ! Merci de nous avoir contactés.',
    error: 'Une erreur sest produite lors de lenvoi du message.',
    required: 'Veuillez remplir ce champ.'
  },
  POR: {
    name: 'Nome e apelido*',
    city: 'Cidade',
    email: 'E-Mail*',
    location: 'Localidade',
    phone: 'Telefone*',
    country: 'País',
    message: 'Mensagem',
    send: 'Enviar',
    thanks: 'A sua mensagem foi enviada! Obrigado por nos contactar.',
    error: 'Ocorreu um erro ao enviar a mensagem.',
    required: 'Preencher este campo.'
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

export const textsServicios: Texts = {
  ES: {
    title: 'hotel',
    subtitle: 'servicios',
    image: '/ Un Molle que cuenta historias.'
  },
  EN: {
    title: 'hotel',
    subtitle: 'services',
    image: '/ A Molle that tells stories.'
  },
  FR: {
    title: 'hotel',
    subtitle: 'services',
    image: '/ Un Molle qui raconte des histoires.'
  },
  POR: {
    title: 'hotel',
    subtitle: 'serviços',
    image: '/ Um Molle que conta histórias.'
  }
}

export const textsRestaurant: Texts = {
  ES: {
    title: 'restaurant',
    subtitle: 'nuestro',
    image: '/ Sabores que cautivan'
  },
  EN: {
    title: 'restaurant',
    subtitle: 'our',
    image: '/ Tastes that captivate'
  },
  FR: {
    title: 'restaurant',
    subtitle: 'nous',
    image: '/ Savoirs qui captivent'
  },
  POR: {
    title: 'restaurant',
    subtitle: 'nossos',
    image: '/ Sabor que cautiva'
  }
}

export const textsUbicacion: Texts = {
  ES: {
    title: 'hacienda',
    subtitle: 'ubicación',
    image: 'ruta del vino'
  },
  EN: {
    title: 'hacienda',
    subtitle: 'location',
    image: 'wine route'
  },
  FR: {
    title: 'ferme',
    subtitle: 'emplacement',
    image: 'route du vin'
  },
  POR: {
    title: 'fazenda',
    subtitle: 'localização',
    image: 'rota do vinho'
  }
}

export const textsRuta: Texts = {
  ES: {
    title: 'Vino',
    subtitle: 'ruta del',
    image: 'mapa'
  },
  EN: {
    title: 'Wine',
    subtitle: 'route of',
    image: 'map'
  },
  FR: {
    title: 'Vin',
    subtitle: 'route du',
    image: 'map'
  },
  POR: {
    title: 'Vinho',
    subtitle: 'rota do',
    image: 'mapa'
  }
}

export const textsVivi: Texts = {
  ES: {
    title: 'molinos',
    subtitle: 'viví'
  },
  EN: {
    title: 'molinos',
    subtitle: 'live'
  },
  FR: {
    title: 'molinos',
    subtitle: 'viví'
  },
  POR: {
    title: 'molinos',
    subtitle: 'vivemos'
  }
}

export const textsHistoria: Texts = {
  ES: {
    title: 'historia',
    subtitle: 'un poco de',
    image: '/ Un lugar con historias propias'
  },
  EN: {
    title: 'history',
    subtitle: 'a little of',
    image: '/ A place with its own stories'
  },
  FR: {
    title: 'histoire',
    subtitle: 'un peu de',
    image: '/ Un lieu avec ses propres histoires'
  },
  POR: {
    title: 'história',
    subtitle: 'um pouco de',
    image: '/ Um lugar com suas próprias histórias'
  }
}
