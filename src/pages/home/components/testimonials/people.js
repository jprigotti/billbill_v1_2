// import img7 from "../../../../assets/images/img1.png"


const img1 = "https://lh3.googleusercontent.com/a/AAcHTte0xsUJxj_JhXUliZNJfZelrf1SOzo-_1i2kV1159yYT1M=s96-c"
const img2 = "https://xx.bstatic.com/xdata/images/xphoto/square64/144163612.jpg?k=ee685426fc3bb20ae8778766d9423e5669d889da14dba2a97ec023e79e8b9997&o="
const img3 = "https://cf.bstatic.com/static/img/review/avatars/ava-e/8d80ab6bf73fa873e990c76bfc96a1bf23708307.png"
const img4 = "https://cf.bstatic.com/static/img/review/avatars/ava-k/c84a361d670170a23bc2e937798fc23520f61c43.png"
const img5 = "https://graph.facebook.com/v2.9/10210798348807690/picture?type=square&height=64&width=64"
const img6 = "https://lh5.googleusercontent.com/-Gs9K0kPSwDo/AAAAAAAAAAI/AAAAAAAACzw/EeE3Cq_qev4/photo.jpg"
const img7 = "https://lh3.googleusercontent.com/a-/ALV-UjUfzqg5KnWjcoexudBqZu_TD_ng0jmDNzRDgBNg_5XaqzM=s40-c-rp-mo-br100"
const img8 = "https://lh3.googleusercontent.com/a/ACg8ocKmMvNX1ASJSPCive_j7mZYTU5Gd7hZFS9NMhcGEc8K=s40-c-rp-mo-ba3-br100"
const img9 = "https://lh3.googleusercontent.com/a-/ALV-UjW3Br2a38g0Z0tVxT4JpfPymV0RxHIOy57NIlyCsBO0LM90=s40-c-rp-mo-ba3-br100"

import flag_argentina from "../../../../assets/images/flags/argentina.png"
import flag_colombia from "../../../../assets/images/flags/colombia.png"
import flag_espana from "../../../../assets/images/flags/espana.png"
import flag_peru from "../../../../assets/images/flags/peru.png"
import flag_uk from "../../../../assets/images/flags/uk.png"
import flag_brasil from "../../../../assets/images/flags/brasil.png"

const testimonials = [
  {
    id: 9,
    image: img9,
    name: "Geraldine Matheus Silva",
    nationality: "Brasil",
    website: "Google",
    description: `EXCELENTE EJEMPLO DE BUEN SERVICIO...
    El personal que atiende este hostel en todos sus departamentos sabe con precision la manera de atender bien a un huesped. Siempre estan dispuestos a ayudar y a brindarle confort y comodidad al huesped. Su actitud de servir es su mejor aliada.
    Felicitaciones!
    De otra parte la ubicacion del Hostel y su limpieza son dos factores positivos adicionales que inclinan la preferencia por este lugar.
    Con gusto regresare a este Hostel y lo recomiendo en alto grado.🙌✨`,
    flag: flag_brasil
  },
  {
    id: 8,
    image: img8,
    name: "Romina Alfaro",
    nationality: "Argentina",
    website: "Google",
    description: `Hostel realmente hermoso, tiene una estructura muy atractiva, en el interior desde el centro del establecimiento, mirando hacia arriba, se pueden ver las escaleras, que se podría decir a mí imaginación, me recordó a las escaleras de Escher, atractivo de ver, las habitaciones son muy cómodas, hay literas o camas dos plazas, baños compartidos pero divididos para los géneros, cuenta con una cocina comedor común para quien quiera, muy amplio, terraza con hermosa vista iluminada, especial para compartir unas cervezas, charlas o lo que apetezca, cómo no puede faltar, tambien cuentan con una parrilla.
    La atención es Increíble, muy serviciales y atentos en todo momento, uno se siente en casa.
    Costos accesibles.`,
    flag: flag_argentina
  },
  {
    id: 7,
    image: img7,
    name: "Julio Videla",
    nationality: "Argentina",
    website: "Google",
    description: `Exelente hostel, habitaciones muy buenas sobretodo super limpias y muy buen servicio ,desde ya su atención Alejandro,Erica y julio muy amables,detalle que los baños cuentan con abundante agua caliente y fría siempre limpios en todo momento.
    La cocina cuenta con todo lo esencial.
    Cerca de bares, Subte, mercados, punto ideal para extranjeros que viene a disfrutar y el precio de BILL & BILL ideal`,
    flag: flag_argentina
  },
  {
    id: 1,
    image: img1,
    name: "Jorge",
    nationality: "Colombia",
    website: "Booking",
    description: "Ubicación muy buena, áreas comunes súper cómodas y completas, su terraza en súper.",
    flag: flag_colombia

  },
  {
    id: 2,
    image: img2,
    name: "Ijann",
    nationality: "Peru",
    website: "Booking.com",
    description: "La cama es comoda, su cortina que ayuda a tener privacidad, su cajon para poner cosas de valor y la luz en cada cama, las 2 puertas hacia el balcón ayudo la ventilación, aparte de una silla para descansar mirando la callé estuvo bien. La buena onda en recepción es genial.",
    flag: flag_peru
  },
  {
    id: 3,
    image: img3,
    name: "Elvire",
    nationality: "Reino Unido",
    website: "Booking",
    description: " Buena onda! El personal es amable y servicial. Genial para trabajar. Muchas actividades gratuitas posibles",
    flag: flag_uk
  },
  {
    id: 4,
    image: img4,
    name: "Katherine",
    nationality: "Peru",
    website: "Booking",
    description: "El staff siempre fue muy buena onda y servicial, me gustó la vista desde mi cuarto. Excelente ubicación del hostel.",
    flag: flag_peru
  },
  {
    id: 5,
    image: img5,
    name: "Miguel",
    nationality: "España",
    website: "Booking",
    description: "El recepciónista fue de mucha ayuda con todo. la posibilidad de trabajar desde allí aunque no lo usará",
    flag: flag_espana
  },
  {
    id: 6,
    image: img6,
    name: "Ezequiel",
    nationality: "Argentina",
    website: "Booking",
    description: "Los lugares de uso común son muy buenos. Tiene amplia cocina, varias heladeras y un comedor amplio, bien iluminado, excelente para compartir con otros huéspedes y hacer amistades. Las personas del hostel son muy amigables.",
    flag: flag_argentina
  }
];

export default testimonials;
