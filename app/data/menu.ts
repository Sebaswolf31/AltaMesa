export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'entradas',
    title: 'Entradas',
    items: [
      {
        name: 'Patacones Crocantes x5',
        price: '$00.000',
        description: 'Servido con hogao de la casa y guacamole fresco.',
      },
      {
        name: 'Empanadas Artesanales x5',
        price: '$00.000',
        description: 'Acompañadas de ají de la casa.',
      },
      {
        name: 'Nachos de Arepa con Carne',
        price: '$00.000',
        description:
          'Crujientes nachos de arepa, carne desmechada, queso fundido, pico de gallo, guacamole y crema agria.',
      },
      {
        name: 'Ceviche de Chicharrón',
        price: '$00.000',
        description:
          'Crujiente chicharrón de cerdo marinado en limón, cebolla morada, pimentón, mango verde, cilantro y chips de plátano.',
      },
      {
        name: 'Morcilla Artesanal',
        price: '$00.000',
        description: 'Servida con arepa artesanal, papa criolla y limón.',
      },
    ],
  },
  {
    id: 'parrilla',
    title: 'Parrilla',
    items: [
      {
        name: 'Churrasco 320gr',
        price: '$00.000',
        description:
          'Jugoso corte de res a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Punta de Anca 320gr',
        price: '$00.000',
        description:
          'Selecto corte de res a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Lomo de Res 320gr',
        price: '$00.000',
        description:
          'Tierno lomo de res a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Cordón de Cerdo 320gr',
        price: '$00.000',
        description:
          'Jugoso lomo de cerdo a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Pechuga 320gr',
        price: '$00.000',
        description:
          'Jugosa pechuga de pollo a la plancha, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Chorizo Artesanal x2',
        price: '$00.000',
        description:
          'Dos chorizos artesanales a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Ojo de Bife 320gr',
        price: '$00.000',
        description:
          'Selecto corte de res con excelente marmoleo, con papa a la francesa, ensalada fresca y chimichurri.',
      },
      {
        name: 'Bife Chorizo 320gr',
        price: '$00.000',
        description:
          'Selecto corte de res con excelente marmoleo, con papa a la francesa, ensalada fresca y chimichurri.',
      },
      {
        name: 'Chicharrón al Barril 320gr',
        price: '$00.000',
        description:
          'Chicharrón de cerdo con piel crocante y carne jugosa, servido con papa francesa, arepa, limón, ensalada y chimichurri.',
      },
      {
        name: 'Chatarraso',
        price: '$00.000',
        description:
          'Jugoso lomo de cerdo a la parrilla, con papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        name: 'Picada para 2',
        price: '$00.000',
        description:
          'Selección de la parrilla para compartir, con papa a la francesa, ensalada fresca y chimichurri.',
      },
      {
        name: 'Picada Familiar',
        price: '$00.000',
        description:
          'Selección de la parrilla para compartir en familia, con papa a la francesa, ensalada fresca y chimichurri.',
      },
    ],
  },
  {
    id: 'burger',
    title: 'Burger',
    items: [
      {
        name: 'La Insignia',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, queso cheddar, queso mozzarella, tocineta crujiente, cebolla caramelizada, lechuga cogollo y salsa BBQ.',
      },
      {
        name: 'Emperadora',
        price: '$00.000',
        description:
          'Pan artesanal, salsa de ajo de la casa, carne de res 180g, doble queso cheddar, tocineta crujiente, cebolla crispy y salsa de maracuyá.',
      },
      {
        name: 'La Patrona',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, doble queso mozzarella, chorizo parrillero, tomate, pepinillos y chimichurri.',
      },
      {
        name: 'Volcán',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, doble queso cheddar fundido, tocineta crujiente, cebolla crispy, jalapeños y salsa chipotle.',
      },
      {
        name: 'Vaquera',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, queso cheddar fundido, tocineta crujiente, tomate, cebolla, pepinillos y salsa chipotle.',
      },
      {
        name: 'La Imperial',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, queso mozzarella, tocineta crujiente, pera caramelizada y salsa de queso azul.',
      },
      {
        name: 'La Reina Crispy',
        price: '$00.000',
        description:
          'Pan artesanal, pechuga de pollo apanada, doble queso mozzarella, tocineta crujiente, mermelada de pimentón y salsa BBQ.',
      },
    ],
  },
  {
    id: 'sandwich',
    title: 'Sandwich',
    items: [
      {
        name: 'Sandwich de Res',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, queso cheddar fundido, tocineta crujiente, tomate, cebolla, pepinillos y salsa chipotle.',
      },
      {
        name: 'Sandwich Gourmet',
        price: '$00.000',
        description:
          'Pan artesanal, carne de res 180g, queso mozzarella, tocineta crujiente, pera caramelizada y salsa de queso azul.',
      },
    ],
  },
];
