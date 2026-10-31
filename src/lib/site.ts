export const PHONE_TEL = "+917503600586";
export const PHONE_DISPLAY = "+91 75036 00586";
export const INSTAGRAM = "https://www.instagram.com/b.ksportsfitness/";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Laxmi%20Narayan%20Mandir%20Jwalaheri%20Paschim%20Vihar%20Delhi";
export const MAP_EMBED =
  "https://maps.google.com/maps?q=Laxmi%20Narayan%20Mandir%20Jwalaheri%20Paschim%20Vihar%20Delhi&z=16&output=embed";

export function waLink(text: string) {
  return `https://wa.me/917503600586?text=${encodeURIComponent(text)}`;
}

export const WA_GENERAL = waLink(
  "Hi BK Sports & Fitness, I want to ask about gear and delivery.",
);

export type Sport = "cricket" | "football" | "badminton" | "gym" | "other";
export type Filter = "all" | Sport;

export const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cricket", label: "Cricket" },
  { id: "football", label: "Football" },
  { id: "badminton", label: "Badminton" },
  { id: "gym", label: "Gym" },
  { id: "other", label: "Other" },
];

export const filterNotes: Record<Filter, string> = {
  all: "Six pieces players ask for by name. The rack behind them is deeper — sizes and today’s price on WhatsApp.",
  cricket:
    "Bats and keeping gloves. Knocking and oiling happen in the shop before a new bat goes out.",
  football:
    "Footballs, boots, and training kit are on the floor. The kit bag is a start — message for the size you need.",
  badminton:
    "Rackets, court shoes, and kit bags. Restringing and repair are done at the same desk.",
  gym: "Home-gym pieces you can pick up or have shipped. Ask for the weights in stock today.",
  other:
    "Basketball and the wider rack. Ask, and the desk will pull what the floor is holding.",
};

export const categories: {
  id: Sport;
  index: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  area: string;
}[] = [
  {
    id: "cricket",
    index: "01",
    title: "Cricket",
    text: "Bats, gloves, balls, and a knocking desk that has been oiling willow on this lane for years.",
    image: "/images/cat-cricket.jpg",
    alt: "Cricket bat, red ball and batting gloves on a dark bench",
    area: "area-cricket",
  },
  {
    id: "football",
    index: "02",
    title: "Football",
    text: "Match balls, boots, and kit for school sides and Sunday games.",
    image: "/images/cat-football.jpg",
    alt: "Black and white football on dark turf at night",
    area: "area-football",
  },
  {
    id: "badminton",
    index: "03",
    title: "Badminton",
    text: "Rackets, shoes, and bags from Li-Ning, Yonex, and others — plus repair on the same desk.",
    image: "/images/cat-badminton.jpg",
    alt: "Badminton racket and shuttlecock on a dark surface",
    area: "area-badminton",
  },
  {
    id: "gym",
    index: "04",
    title: "Gym & Fitness",
    text: "Dumbbells and home-gym equipment, chosen in person and shipped if you cannot carry it.",
    image: "/images/cat-gym.jpg",
    alt: "Hex dumbbells and a jump rope under green rim light",
    area: "area-gym",
  },
  {
    id: "other",
    index: "05",
    title: "Other Sports",
    text: "Basketball and the rest of the wall. If you play it, ask. If it is not on the floor, we will source it.",
    image: "/images/cat-basketball.jpg",
    alt: "Basketball on a dark court with a hoop in the distance",
    area: "area-other",
  },
];

export const products: {
  name: string;
  copy: string;
  tag: string;
  image: string;
  alt: string;
  cats: Sport[];
  ask: string;
}[] = [
  {
    name: "Cricket Bat",
    copy: "Match and practice bats. New willow can be knocked and oiled before it leaves the shop.",
    tag: "Cricket",
    image: "/images/prod-bat.jpg",
    alt: "English willow cricket bat standing on a dark plinth",
    cats: ["cricket"],
    ask: "Hi BK Sports & Fitness, I want to ask about a cricket bat.",
  },
  {
    name: "Wicketkeeping Gloves",
    copy: "Keeping gloves from practice pairs to match gear. Tell us your size and the level you keep.",
    tag: "Cricket",
    image: "/images/prod-gloves.jpg",
    alt: "White and black wicketkeeping gloves on a dark surface",
    cats: ["cricket"],
    ask: "Hi BK Sports & Fitness, I want to ask about wicketkeeping gloves.",
  },
  {
    name: "Badminton Racket",
    copy: "Rackets for club nights and tournament days. Stringing and regrips are done in the shop.",
    tag: "Badminton",
    image: "/images/prod-racket.jpg",
    alt: "Badminton racket head with a shuttlecock beside it",
    cats: ["badminton"],
    ask: "Hi BK Sports & Fitness, I want to ask about a badminton racket.",
  },
  {
    name: "Li-Ning Shoes",
    copy: "Court and training shoes from Li-Ning, Yonex, and others. Ask for the pairs in your size today.",
    tag: "Shoes",
    image: "/images/prod-shoes.jpg",
    alt: "Black court shoes with lime-green soles on a dark plinth",
    cats: ["badminton"],
    ask: "Hi BK Sports & Fitness, I want to ask about Li-Ning and Yonex shoes.",
  },
  {
    name: "Gym Dumbbells",
    copy: "Hex dumbbells and home-gym pieces. Message the weight you want and whether you need delivery.",
    tag: "Gym",
    image: "/images/prod-dumbbells.jpg",
    alt: "Two black hexagonal dumbbells with green edge light",
    cats: ["gym"],
    ask: "Hi BK Sports & Fitness, I want to ask about gym dumbbells.",
  },
  {
    name: "Kit Bag",
    copy: "Kit bags for badminton, cricket, and the rest of the week. Shoe compartments and larger tour bags are in the range.",
    tag: "Bags",
    image: "/images/prod-bag.jpg",
    alt: "Black sports kit bag with lime zipper pulls",
    cats: ["cricket", "football", "badminton", "gym", "other"],
    ask: "Hi BK Sports & Fitness, I want to ask about a kit bag.",
  },
];

export const services = [
  {
    no: "01",
    title: "Bat Knocking & Oiling",
    text: "New bats pressed, knocked, and oiled so the willow is ready for the season instead of the first net session.",
  },
  {
    no: "02",
    title: "Badminton Racket Repair",
    text: "Restringing, regrips, and a straight answer on whether the frame is still worth another season.",
  },
  {
    no: "03",
    title: "Expert Advice",
    text: "Tell the desk how you play. Weight, balance, shoe size, and budget get matched to the kit that fits that game.",
  },
  {
    no: "04",
    title: "Pan-India & Worldwide Delivery",
    text: "Cannot reach Paschim Vihar? Order on a call or WhatsApp. The shop ships across India and overseas. Video call if you want to see the piece first.",
  },
];

export const navLinks = [
  { href: "#categories", label: "Categories" },
  { href: "#gear", label: "Gear" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit" },
];
