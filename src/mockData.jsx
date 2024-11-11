import barranquilla from './imagenes/barranquilla.jpg';
import bogota from './imagenes/bogota.jpg';
import cartagena from './imagenes/cartagena.jpg';
import san_andres from './imagenes/san_andres.jpg';
import pereira from './imagenes/pereira.jpg';
import guajira from './imagenes/guajira.jpg';

export const mockData = [
    {
      src: san_andres,
      title: "San Andrés islas",
      Description: "San Andrés es una isla en el Caribe colombiano, conocida por sus playas de arena blanca y aguas cristalinas, ideal para deportes acuáticos.",
      price: 600,
    },
    {
      src: cartagena,
      title: "Cartagena",
      Description: "Cartagena de Indias es una ciudad costera en la costa caribeña de Colombia, famosa por su centro histórico y playas.",
      price: 500,
    },
    {
      src: guajira,
      title: "Guajira",
      Description: "La Guajira es un departamento único en Colombia, conocido por su paisaje desértico y su cultura indígena vibrante. En esta región, el paisaje desértico domina, con extensas dunas de arena, playas prístinas y un clima cálido y seco que le otorga una personalidad singular",
      price: 400,
  
    },
    {
      src: pereira,
      title: "Pereira",
      Description: "Pereira es una ciudad ubicada en el corazón del Eje Cafetero, en la región montañosa central de Colombia, conocida por su papel destacado en la producción de café y su relevancia económica en la región.",
      price: 300,
  
    },
    {
      src: barranquilla,
      title: "Barranquilla",
      Description: "Barranquilla es una ciudad portuaria en la costa norte de Colombia, conocida por su animado carnaval y su importancia económica e industrial.",
      price: 150,
  
    },
    {
      src: bogota,
      title: "Bogotá",
      Description: "Bogotá es la capital de Colombia y la ciudad más grande del país, con una rica herencia cultural y numerosas atracciones.",
      price: 100,
    },
    
    
];

export const chips =[
  {key:0, label:"Flexibilidada de cancelación"},
  {key:1, label:"Vuelos de primera clase"},
  {key:2, label:"Vuelos ejecutivos"},
  {key:3, label:"vuelos estandar"},
  {key:4, label:"Más filtros"},
];