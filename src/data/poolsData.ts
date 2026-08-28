import { PoolTypeItem, ServiceItem, StepProcess, WhyChooseUsItem } from '../types';

export const POOL_TYPES: PoolTypeItem[] = [
  {
    id: 'obra-gunitado',
    name: 'Piscinas de obra y hormigón gunitado',
    category: 'gunitado',
    shortDesc: 'Máxima resistencia estructural y libertad total de diseño geométrico o curvo.',
    fullDesc: 'La técnica del hormigón gunitado por vía húmeda proyectado a alta presión crea un vaso monolítico estanco, sin juntas ni fisuras. Es el sistema constructivo por excelencia en Cataluña por su longevidad superior a 50 años y adaptabilidad a cualquier terreno rocoso o desnivel.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Jardines de viviendas unifamiliares, parcelas con desniveles y diseños a medida.',
    features: ['Garantía estructural 10 años', 'Libertad absoluta de formas y profundidades', 'Compatible con gres porcelánico gran formato', 'Integración de playas secas y bancos de relax'],
    approxTime: '3 a 5 semanas',
    tag: 'Más solicitada'
  },
  {
    id: 'poliester',
    name: 'Piscinas de poliéster y fibra',
    category: 'poliester',
    shortDesc: 'Instalación rápida, superficie suave al tacto y excelente relación calidad-precio.',
    fullDesc: 'Monocascos prefabricados de poliéster reforzado con fibra de vidrio y resina viniléster antiosmosis. Permiten disfrutar de una piscina de alta calidad con un tiempo de obra mínimo de escasos días, gran facilidad de limpieza y tacto muy agradable.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Instalaciones rápidas con mínima molestia de obra y presupuestos contenidos.',
    features: ['Instalación en menos de 7 días', 'Superficie atérmica y ultrasuave', 'Menor consumo de productos químicos', 'Excelente resistencia a movimientos del terreno'],
    approxTime: '5 a 8 días',
    tag: 'Rápida instalación'
  },
  {
    id: 'desbordante-infinita',
    name: 'Piscinas desbordantes e infinitas',
    category: 'desbordante',
    shortDesc: 'El agua se fusiona con el horizonte, el mar o el paisaje de tu jardín.',
    fullDesc: 'Diseños de alta gama arquitectónica donde la lámina de agua se mantiene al nivel exacto de la coronación (desbordamiento perimetral o tipo Munich) o cae en cascada hacia el horizonte (efecto Infinity). El sonido relajante del agua en recirculación continua crea un microclima de serenidad inigualable.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Parcelas con vistas a la Costa Brava, viñedos del Penedès o entornos panorámicos.',
    features: ['Efecto visual continuo con el entorno', 'Lámina de agua siempre libre de impurezas flotantes', 'Canaleta oculta con gres porcelánico', 'Depósito de compensación automatizado'],
    approxTime: '4 a 6 semanas',
    tag: 'Gama Premium'
  },
  {
    id: 'cloracion-salina',
    name: 'Piscinas con cloración salina',
    category: 'salina',
    shortDesc: 'Agua pura, cristalina y suave que no irrita los ojos ni reseca la piel.',
    fullDesc: 'Sistemas ecológicos de electrólisis salina que transforman la sal común en un desinfectante natural continuo, volviendo a convertirse en sal sin generar subproductos químicos como las cloraminas. El agua tiene una salinidad similar a una lágrima humana (0,4%), aportando una sensación de baño natural y saludable.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Familias con niños, personas con piel sensible o alergias y amantes del bienestar.',
    features: ['Cero olor a cloro químico', 'Regulación automática de pH y Redox', 'Ahorro del 80% en productos químicos', 'Agua sedosa y protectora de la piel'],
    approxTime: 'Integrable en obra o reforma',
    tag: 'Salud y Confort'
  },
  {
    id: 'pequenas-urbanas',
    name: 'Piscinas pequeñas y patios urbanos',
    category: 'pequena',
    shortDesc: 'Soluciones compactas de ensueño para patios, terrazas y parcelas reducidas.',
    fullDesc: 'Piscinas optimizadas para maximizar cada metro cuadrado en chalets adosados, patios interiores de masías o terrazas urbanas en Barcelona y el Maresme. Incorporan bancos con hidromasaje, nado contracorriente y diseño vertical para convertirse en auténticos oasis privados.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Patios urbanos, jardines pequeños, casas de pueblo y zonas residenciales densas.',
    features: ['Aprovechamiento total del espacio', 'Mínimo consumo hídrico y energético', 'Opciones de nado contracorriente', 'Climatización rápida y eficiente'],
    approxTime: '2 a 3 semanas',
    tag: 'Espacios Reducidos'
  },
  {
    id: 'diseno-exclusivo',
    name: 'Piscinas de diseño exclusivo',
    category: 'diseno',
    shortDesc: 'Arquitectura vanguardista con materiales nobles, iluminación escultural y fuego.',
    fullDesc: 'Proyectos singulares concebidos junto a arquitectos y paisajistas. Empleamos gres porcelánico de gran formato en tonos arena o antracita, islas de vegetación flotante, pasarelas de madera tecnológica, cascadas de piedra natural y ventanales subacuáticos de cristal acrílico.',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Viviendas de diseño contemporáneo que buscan una pieza escultórica central.',
    features: ['Materiales de autor y revestimientos exóticos', 'Iluminación escenográfica regulable por domótica', 'Cascadas laminares integradas en muros', 'Zonas de fuego (fire pit) anexas a la piscina'],
    approxTime: '5 a 8 semanas',
    tag: 'Alta Arquitectura'
  },
  {
    id: 'comunitarias-hoteles',
    name: 'Piscinas comunitarias y hoteles',
    category: 'hotel',
    shortDesc: 'Instalaciones de alto aforo con máxima seguridad, accesibilidad y eficiencia normativa.',
    fullDesc: 'Construcción integral y adecuación de piscinas para comunidades de propietarios, hoteles boutique, campings y casas de turismo rural en toda Cataluña. Cumplimiento estricto del Decreto 95/2000 de la Generalitat de Catalunya sobre piscinas de uso público.',
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80',
    idealFor: 'Complejos residenciales, hoteles, casas rurales y campings en Cataluña.',
    features: ['Sistemas de filtración comercial de alto rendimiento', 'Pavimentos antideslizantes Clase 3 certificados', 'Accesibilidad para personas de movilidad reducida', 'Monitorización y dosificación telemática 24/7'],
    approxTime: '6 a 10 semanas',
    tag: 'Uso Colectivo'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'construccion',
    title: 'Construcción de piscinas',
    shortDesc: 'Diseñamos y construimos piscinas de obra, piscinas de poliéster y soluciones personalizadas para toda clase de jardines y espacios exteriores.',
    fullDesc: 'Nos encargamos del proyecto integral "llave en mano": desde el replanteo topográfico, la excavación y la cimentación con hormigón gunitado de alta resistencia, hasta los revestimientos cerámicos de última generación y la puesta en marcha de los equipos de filtración.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Gunitado de alta compacidad y resistencia química',
      'Impermeabilización bicomponente garantizada',
      'Diseño personalizado 100% a medida del terreno',
      'Gestión de licencias municipales en Cataluña'
    ],
    subServices: [
      'Piscinas de hormigón gunitado',
      'Piscinas de poliéster y fibra',
      'Piscinas desbordantes e infinitas',
      'Mini-piscinas para patios y terrazas'
    ]
  },
  {
    id: 'reforma',
    title: 'Reforma y rehabilitación',
    shortDesc: 'Renovamos piscinas antiguas, solucionamos problemas de impermeabilización y actualizamos revestimientos, instalaciones y sistemas de filtración.',
    fullDesc: 'Transformamos tu piscina vieja o deteriorada en una instalación moderna, eficiente y atractiva. Corregimos pérdidas de agua, sustituimos tuberías degradadas, cambiamos el antiguo gresite por porcelánico de gran formato o lámina armada 3D, y adaptamos la profundidad para un mayor confort.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Detección y sellado definitivo de fugas de agua',
      'Modernización estética con acabados de tendencia',
      'Reducción de profundidad para ahorrar agua y climatizar',
      'Actualización a sistemas de bajo consumo energético'
    ],
    subServices: [
      'Sustitución de revestimiento y gresite',
      'Instalación de lámina armada termosoldada',
      'Construcción de escaleras de obra y playas',
      'Renovación de caseta de filtración y cuadros'
    ]
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento de piscinas',
    shortDesc: 'Nos encargamos de la limpieza, el tratamiento del agua y la revisión de los equipos para que tu piscina esté siempre preparada.',
    fullDesc: 'Planes de mantenimiento preventivo y correctivo periódicos (semanal, quincenal o mensual) en viviendas particulares y comunidades de vecinos. Analizamos los parámetros químicos, calibramos sondas, revisamos bombas y filtros y preparamos el invernaje para conservar el agua año tras año.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Agua cristalina y libre de bacterias todo el año',
      'Apertura y puesta a punto en primavera',
      'Invernaje ecológico para no vaciar la piscina',
      'Servicio de asistencia técnica rápida ante averías'
    ],
    subServices: [
      'Mantenimiento regular para particulares',
      'Gestión de piscinas comunitarias y turísticas',
      'Calibración y cambio de arena/vidrio filtrante',
      'Tratamientos de choque y recuperación de aguas verdes'
    ]
  },
  {
    id: 'equipamiento',
    title: 'Equipamiento y accesorios',
    shortDesc: 'Instalamos sistemas de cloración salina, iluminación, climatización, cubiertas, limpiafondos y soluciones para mejorar la eficiencia y comodidad de tu piscina.',
    fullDesc: 'Equipamos tu piscina con la tecnología más avanzada del mercado: bombas de velocidad variable con hasta un 80% de ahorro eléctrico, bombas de calor inverter para bañarte de abril a noviembre, cubiertas automáticas de lamas de seguridad y sistemas domóticos con control desde el móvil.',
    iconName: 'Sliders',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    benefits: [
      'Equipos de primeras marcas con máxima fiabilidad',
      'Ahorro en la factura eléctrica y consumo hídrico',
      'Control domótico de iluminación y temperatura por app',
      'Mayor seguridad para niños y mascotas con cubiertas'
    ],
    subServices: [
      'Electrólisis salina y control de pH automático',
      'Bombas de calor inverter para climatización',
      'Cubiertas automáticas sumergidas o elevadas',
      'Robots limpiafondos autónomos y focos LED RGB'
    ]
  }
];

export const WORK_STEPS: StepProcess[] = [
  {
    number: 1,
    title: 'Escuchamos tu idea',
    subtitle: 'Toma de contacto y asesoramiento',
    description: 'Nos explicas qué piscina tienes en mente, el uso previsto, tu presupuesto y las expectativas estéticas de tu familia.',
    details: [
      'Entrevista personalizada presencial o telemática',
      'Definición de necesidades (relax, deporte, niños, diseño)',
      'Asesoramiento inicial sobre tipologías y sistemas recomendados'
    ],
    duration: 'Día 1 - 2',
    iconName: 'MessageSquare'
  },
  {
    number: 2,
    title: 'Estudiamos el espacio',
    subtitle: 'Visita técnica sobre el terreno',
    description: 'Analizamos el terreno, las dimensiones, la orientación solar, la composición del suelo y los accesos de maquinaria en tu parcela en Cataluña.',
    details: [
      'Inspección geotécnica visual y toma de cotas topográficas',
      'Estudio de asoleamiento para ubicar la piscina en la zona más cálida',
      'Comprobación de acometidas de agua, desagüe y electricidad'
    ],
    duration: 'Día 3 - 5',
    iconName: 'Maximize2'
  },
  {
    number: 3,
    title: 'Diseñamos tu piscina',
    subtitle: 'Propuesta 3D y presupuesto cerrado',
    description: 'Preparamos una propuesta personalizada con los materiales, acabados, equipamiento recomendado, infografía y presupuesto detallado sin sorpresas.',
    details: [
      'Plano técnico de distribución y vistas 3D realistas',
      'Selección de gres cerámico, tonalidad de agua y accesorios',
      'Presupuesto desglosado partida por partida sin costes ocultos'
    ],
    duration: 'Día 6 - 10',
    iconName: 'Layers'
  },
  {
    number: 4,
    title: 'Construimos el proyecto',
    subtitle: 'Ejecución con equipo propio',
    description: 'Nuestro equipo coordina todas las fases de la obra respetando los más altos estándares de calidad, plazos pactados y normativas vigentes.',
    details: [
      'Excavación precisa y armado de hierro corrugado',
      'Proyección de hormigón gunitado a 7 bar de presión',
      'Impermeabilización, colocación de revestimientos e instalaciones'
    ],
    duration: '3 a 5 semanas',
    iconName: 'Hammer'
  },
  {
    number: 5,
    title: 'Entregamos la piscina',
    subtitle: 'Puesta en marcha y formación',
    description: 'Realizamos la puesta en marcha, el equilibrado químico inicial y te explicamos todo lo necesario para disfrutarla y conservarla con total facilidad.',
    details: [
      'Llenado, tratamiento inicial del agua y calibración de equipos',
      'Explicación práctica de uso y mantenimiento diario',
      'Entrega de manual de usuario y certificado de garantía decenal'
    ],
    duration: 'Entrega final',
    iconName: 'CheckCircle2'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'experiencia',
    title: 'Experiencia',
    description: 'Contamos con una amplia trayectoria en el diseño, construcción y mantenimiento de piscinas en toda Cataluña.',
    iconName: 'Award',
    stat: '+15',
    statLabel: 'Años de experiencia'
  },
  {
    id: 'calidad',
    title: 'Calidad',
    description: 'Trabajamos con materiales de primeras marcas y sistemas constructivos de máxima calidad homologados por la UE.',
    iconName: 'ShieldCheck',
    stat: '10',
    statLabel: 'Años garantía estructural'
  },
  {
    id: 'profesionalidad',
    title: 'Profesionalidad',
    description: 'Nuestro equipo está formado por profesionales especializados que cuidan cada detalle técnico y estético del proyecto.',
    iconName: 'Users',
    stat: '100%',
    statLabel: 'Personal técnico cualificado'
  },
  {
    id: 'atencion',
    title: 'Atención personalizada',
    description: 'Escuchamos tus ideas y te asesoramos para encontrar la solución que mejor se adapte a tus necesidades y presupuesto.',
    iconName: 'HeartHandshake',
    stat: '+450',
    statLabel: 'Piscinas construidas'
  },
  {
    id: 'servicio-integral',
    title: 'Servicio integral',
    description: 'Nos ocupamos de todas las fases: diseño, tramitación de licencias, construcción, instalación y puesta en marcha.',
    iconName: 'CheckCheck',
    stat: '360°',
    statLabel: 'Gestión llave en mano'
  }
];

export const CATALONIA_REGIONS = [
  {
    province: 'Barcelona',
    areas: ['Barcelona Ciudad', 'Baix Llobregat', 'Maresme', 'Vallès Occidental', 'Vallès Oriental', 'Garraf', 'Osona', 'Bages'],
    highlight: 'Proyectos en Sant Cugat, Mataró, Sitges, Castelldefels, Sabadell y Granollers.'
  },
  {
    province: 'Girona',
    areas: ['Costa Brava (Alt y Baix Empordà)', 'Gironès', 'La Selva', 'Pla de l\'Estany', 'Garrotxa'],
    highlight: 'Piscinas integradas en Begur, Palafrugell, Platja d\'Aro, Lloret de Mar y Girona.'
  },
  {
    province: 'Tarragona',
    areas: ['Costa Daurada (Tarragonès, Baix Camp)', 'Baix Penedès', 'Alt Camp', 'Terres de l\'Ebre'],
    highlight: 'Instalaciones en Cambrils, Salou, Reus, Tarragona y El Vendrell.'
  },
  {
    province: 'Lleida',
    areas: ['Segrià', 'Pla d\'Urgell', 'Noguera', 'Urgell', 'Pirineus'],
    highlight: 'Piscinas de hormigón climatizadas y de alta resistencia térmica en Lleida y comarcas.'
  }
];

export const FAQS = [
  {
    question: '¿Qué tipo de piscina es más recomendable para mi jardín?',
    answer: 'La elección depende del espacio, el tipo de terreno, el presupuesto y tus preferencias estéticas. Las piscinas de hormigón gunitado ofrecen total libertad de diseño y máxima durabilidad. Las de poliéster son ideales si buscas rapidez de instalación (menos de 7 días). Las desbordantes o infinitas son perfectas para parcelas con vistas panorámicas.'
  },
  {
    question: '¿Cuánto tiempo se tarda en construir una piscina?',
    answer: 'Una piscina de hormigón gunitado suele tardar entre 3 y 5 semanas de ejecución en obra (excavación, estructura, secado del gunitado, revestimiento y puesta en marcha). Una piscina de poliéster puede estar lista en 5 a 8 días hábiles. En piscinas de diseño singular o desbordantes, el plazo suele oscilar entre 4 y 7 semanas.'
  },
  {
    question: '¿Se encargan de tramitar la licencia de obras en mi ayuntamiento?',
    answer: 'Sí. Como parte de nuestro servicio integral llave en mano, redactamos el proyecto técnico visado por arquitecto o ingeniero y gestionamos la solicitud de licencia de obras (obra mayor o menor según normativa del municipio catalán correspondiente).'
  },
  {
    question: '¿Por qué es mejor la cloración salina frente al cloro tradicional?',
    answer: 'La electrólisis salina genera un cloro 100% natural a partir de sal común sin añadir químicos industriales. El agua no pica en los ojos, no reseca la piel ni daña el pelo, y no produce el característico olor a cloro fuerte. Además, se amortiza rápidamente y reduce drásticamente el mantenimiento.'
  },
  {
    question: '¿Qué garantía tienen las piscinas que construyen?',
    answer: 'Ofrecemos 10 años de garantía decenal sobre la estanqueidad y estructura del vaso de hormigón gunitado, además de las garantías oficiales de 2 a 5 años en todos los equipos de filtración, bombas, cloradores salinos y bombas de calor de primeras marcas.'
  },
  {
    question: '¿Puedo reformar o reducir la profundidad de mi piscina antigua?',
    answer: 'Totalmente. Somos especialistas en reformas: podemos elevar el fondo para hacer la piscina más cómoda y segura, construir escaleras de acceso integradas tipo playa, sustituir el gresite desprendido por gres porcelánico o lámina armada, y actualizar toda la sala de máquinas.'
  }
];
