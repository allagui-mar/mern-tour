import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 10,
    desc: "Explorez un endroit empreint de la vie des rois, des reines, des hommes d'état et des soldats, des poètes, des prêtres, des héros et des méchants depuis 960 après JC. L'Abbaye de Westminster est l'église des couronnements depuis 1066 et la dernière demeure de plus de 3 000 Britanniques.",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "L’essentiel sur la destination Indonésie/Bali pour préparer votre voyage : climat et prévisions météo, formalités, santé, monnaie, pourboire, décalage horaire, sécurité, fêtes, adresses utiles, sites internet à visiter...",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.8,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Les Snowy Mountains sont les montagnes les plus élevées, ses collines sont couvertes de forêts. Aujourd'hui, elles sont divisées en plusieurs parcs nationaux et réserves forestières. Son point culminant, le mont Kosciuszko, est à 2 173 mètres d'altitude, des stations de ski sont d'ailleurs aménagées.",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "As the sun rises over the region, swathes of clouds gather in the lush green valleys below, rugged hills and tall trees peek out above the mist, and beautiful morning colors bathe everything in a soft glow. Spend the night so that you can wake up to magical sunrise scenes as you enjoy breakfast at one of the cute viewpoint cafes.",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "Si vous visitez l'île de Bali, sachez qu'il existe une île voisine idéale à visiter si vous souhaitez éviter les foules bruyantes. Réservez via Klook et partez pour un merveilleux voyage dans la partie ouest de l'île de Nusa Penida et savourez les joies de son atmosphère tranquille et de son paysage pittoresque.Visitez de magnifiques arrêts photo qui valent la peine d'être publiés sur votre Instagram, tels que Angela Billabong, Broken Beach, Klingking Beach et Crystal Bay. Vous aurez l occasion de nager dans les eaux cristallines de la région.",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "One of the earliest harbingers of spring is the cherry blossom tree, which bursts into pink and white clouds of blooms in March and April. They're celebrated at cherry blossom festivals around the world when people flock to the grasses beneath their branches to marvel at the frothing blooms",
    reviews: [
      {
        name: "allagui marwen",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "For the ultimate escape, head to Norway’s Holmen Lofoten, where you can stay in a fisherman’s hut, hone your culinary skills and feed your soul. Welcome to paradise at the edge of the world.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    adress: "somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "The canyon is surrounded by white peaks which give the impression of snow-covered mountains. The coloration is actually the result of small particles of sandstone collecting together to form large rock structure that were then eroded by rain, leaving them with distinctive cracks and markings.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
