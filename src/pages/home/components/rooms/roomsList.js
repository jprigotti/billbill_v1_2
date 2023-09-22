import img1 from "../../../../assets/images/rooms/shared_boys.jpeg";
import img2 from "../../../../assets/images/rooms/shared_girls.jpeg";
import img3 from "../../../../assets/images/rooms/shared_mix.jpg";
import img4 from "../../../../assets/images/rooms/private.jpg";


const roomsList = [
  {
    id: 1,
    image: img1,
    title: "Habitacion 1",
    priceTag: "Precio por noche",
    price: "$20usd",
    category: "Habitaciones compartidas",
    type: "Solo chicos",
    description: "Descripcion habitacion 1",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 2,
    image: img2,
    title: "Habitacion 2",
    priceTag: "Precio por noche",
    price: "$10usd",
    category: "Habitaciones compartidas",
    type: "Solo chicas",
    description: "Descripcion habitacion 2",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 3,
    image: img3,
    title: "Habitacion 3",
    priceTag: "Precio por noche",
    price: "$30usd",
    category: "Habitaciones compartidas",
    type: "Mixtas",
    description: "Descripcion habitacion 3",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
  {
    id: 4,
    image: img4,
    title: "Habitacion 3",
    priceTag: "Precio por noche",
    price: "$30usd",
    category: "Habitaciones privadas",
    type: "",
    description: "Descripcion habitacion 3",
    color1: 'var(--secondary-1)',
    color2: 'var(--secondary-1)'
  },
];

export default roomsList;
