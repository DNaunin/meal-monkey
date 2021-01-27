import "./card.css";
import cardItalian from "./card-italian.html";
import cardOffers from "./card-offers.html";
import cardSrilankan from "./card-srilankan.html";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const italianCard = () => cardItalian;
export const offersCard = () => cardOffers;
export const srilankanCard = () => cardSrilankan;
