export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string; // Opcional, porque las bebidas a veces no tienen descripción
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
        id: 'ent-empanadas',
        name: 'Empanadas Artesanales x5',
        price: 15000,
        description: 'Acompañadas de ají de la casa.',
      },
      {
        id: 'ent-nachos',
        name: 'Nachos de Arepa con Carne',
        price: 25000,
        description:
          'Crujientes nachos de arepa, carne desmechada, queso fundido, pico de gallo, guacamole y crema agria.',
      },
      {
        id: 'ent-alitas',
        name: 'Alitas BBQ x8',
        price: 20000,
        description: 'Acompañadas de papas y miel mostaza.',
      },
    ],
  },
  {
    id: 'parrilla',
    title: 'Parrilla',
    items: [
      {
        id: 'par-punta',
        name: 'Punta de Anca 320gr',
        price: 40000,
        description:
          'Selecto corte de res a la parrilla, acompañado de papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        id: 'par-lomo-res',
        name: 'Lomo de Res 320gr',
        price: 40000,
        description:
          'Tierno lomo de res a la parrilla, acompañado de papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        id: 'par-lomo-cerdo',
        name: 'Lomo de Cerdo 320gr',
        price: 35000,
        description:
          'Jugoso lomo de cerdo a la parrilla, acompañado de papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        id: 'par-pechuga',
        name: 'Pechuga 320gr',
        price: 28000,
        description:
          'Jugosa pechuga de pollo a la plancha, acompañada de papa a la francesa, ensalada fresca y chimichurri de la casa.',
      },
      {
        id: 'par-chorizo',
        name: 'Chorizo Artesanal x2',
        price: 20000,
        description:
          'Dos chorizos artesanales a la parrilla, acompañados de papa a la francesa, arepa y chimichurri de la casa.',
      },
      {
        id: 'par-picada-2',
        name: 'Picada Para 2',
        price: 65000,
        description:
          'Punta de anca, lomo de res, lomo de cerdo, chicharrón, limón, chimichurri, papas a la francesa y arepa.',
      },
      {
        id: 'par-picada-fam',
        name: 'Picada Familiar',
        price: 140000,
        description:
          'Punta de anca, lomo de res, lomo de cerdo, chicharrón, limón, ensalada, chimichurri, papas a la francesa y arepa.',
      },
    ],
  },
  {
    id: 'burger',
    title: 'Burgers Y Sandwinch',
    items: [
      {
        id: 'brg-insignia',
        name: 'La Insignia',
        price: 26000,
        description:
          'La Burger que representa nuestra casa. Pan artesanal, jugosa carne de res de 180 g, queso cheddar, queso mozzarella, tocineta crujiente, cebolla caramelizada, lechuga cogollo y salsa BBQ. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-emperadora',
        name: 'Emperadora',
        price: 28000,
        description:
          'Pan artesanal, salsa de ajo de la casa, lechuga mézclum, jugosa carne de res de 180g, doble queso cheddar, tocineta crujiente, cebolla crispy y una exclusiva salsa de maracuyá. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-patrona',
        name: 'La Patrona o Parrillera',
        price: 35000,
        description:
          'Pan artesanal, salsa de la casa, lechuga cogollo, tomate, pepinillos, jugosa carne de res de 180g, doble queso mozzarella, chorizo parrillero y un toque de chimichurri. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-volcan',
        name: 'Volcán',
        price: 35000,
        description:
          'Pan artesanal, salsa de la casa, lechuga cogollo, jugosa carne de res de 180g, doble queso cheddar fundido, tocineta crujiente, jalapeños, cebolla crispy y un toque de salsa chipotle. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-imperial',
        name: 'La Imperial',
        price: 35000,
        description:
          'Pan artesanal, salsa de la casa, lechuga mézclum, jugosa carne de res de 180g, queso mozzarella, tocineta crujiente, pera caramelizada y una delicada salsa de queso azul. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-reina-crispy',
        name: 'La Reina Crispy',
        price: 30000,
        description:
          'Pan artesanal, salsa de la casa, lechugas mézclum, pechuga de pollo apanada, doble queso mozzarella fundido, tocineta crujiente, mermelada de pimentón y un toque de salsa BBQ. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-vaquera',
        name: 'Vaquera',
        price: 35000,
        description:
          'Pan artesanal, salsa de la casa, lechuga cogollo, tomate, cebolla, carne de res de 180g, queso cheddar fundido, tocineta crujiente, pepinillos y un toque de salsa chipotle. Acompañada de papas a la francesa.',
      },
      {
        id: 'brg-sandwich',
        name: 'Sandwich',
        price: 29000,
        description:
          'Combo de sandwich tipo cubano, con papas a la francesa y cocacola',
      },
    ],
  },

  {
    id: 'bebidas',
    title: 'Gaseosas y Bebidas',
    items: [
      {
        id: 'beb-coca',
        name: 'Productos CocaCola',
        description: 'Coca Cola, sprite, quatro, kola roman x400ml',
        price: 6000,
      },
      {
        id: 'beb-postobon',
        name: 'Postobon',
        description: 'Colombiana, pepsi, uva, manzana, naranja x400ml',
        price: 6000,
      },
      {
        id: 'beb-bretana',
        name: 'Bretaña',
        description: 'x300ml',
        price: 6000,
      },
      {
        id: 'beb-gatorade',
        name: 'Gatorade',
        description: 'Mora azul, naranja, frutos rojos x500ml',
        price: 7000,
      },
      {
        id: 'beb-jugo',
        name: 'Jugo Hit',
        description:
          'Lulo, Naranja piña, mango, mora, frutos tropiclaes x500ml',
        price: 7000,
      },
      { id: 'beb-agua', name: 'Agua', description: 'x500ml', price: 3000 },
    ],
  },
  {
    id: 'cervezas',
    title: 'Cervezas',
    items: [
      { id: 'cer-corona', name: 'Cerveza Corona', price: 9000 },
      { id: 'cer-sol', name: 'Cerveza Sol', price: 9000 },
      { id: 'cer-heineken', name: 'Cerveza Heineken', price: 9000 },
      { id: 'cer-club', name: 'Club Colombia Dorada', price: 8000 },
      { id: 'cer-poker', name: 'Cerveza Poker Latón', price: 7000 },
      { id: 'cer-andina', name: 'Cerveza Andina Latón', price: 7000 },
    ],
  },
  {
    id: 'sodas',
    title: 'Sodas',
    items: [
      { id: 'sod-manzana', name: 'Soda de Manzana y Kiwi', price: 16000 },
      { id: 'sod-frutos', name: 'Soda de Frutos Rojos', price: 16000 },
      { id: 'sod-maracuya', name: 'Soda de Maracuyá', price: 16000 },
      { id: 'sod-cereza', name: 'Soda de Cereza', price: 16000 },
      {
        id: 'sod-env-manzana',
        name: 'Soda Envenenada - Manzana y Kiwi',
        price: 18000,
      },
      {
        id: 'sod-env-frutos',
        name: 'Soda Envenenada - Frutos Rojos',
        price: 18000,
      },
      {
        id: 'sod-env-maracuya',
        name: 'Soda Envenenada - Maracuyá',
        price: 18000,
      },
      { id: 'sod-env-cereza', name: 'Soda Envenenada - Cereza', price: 18000 },
    ],
  },
  {
    id: 'licores',
    title: 'Licores',
    items: [
      { id: 'lic-amarillo-bot', name: 'Amarillo Botella', price: 70000 },
      { id: 'lic-amarillo-med', name: 'Amarillo Media', price: 40000 },
      {
        id: 'lic-agua-bot',
        name: 'Aguardiente Tradicional Botella',
        price: 60000,
      },
      {
        id: 'lic-agua-med',
        name: 'Aguardiente Tradicional Media',
        price: 40000,
      },
      { id: 'lic-ron5-bot', name: 'Ron 5 Años Botella', price: 80000 },
      { id: 'lic-ron5-med', name: 'Ron 5 Años Media', price: 50000 },
      { id: 'lic-ron8-bot', name: 'Ron 8 Años Botella', price: 130000 },
    ],
  },
];
