import img1 from "../../../../assets/images/hostel_image_1.jpg";
import img2 from "../../../../assets/images/gallery_6.jpg";
import img3 from "../../../../assets/images/gallery_9.jpg";


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
    image: img1,
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
    image: img3,
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
