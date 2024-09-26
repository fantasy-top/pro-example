import { CardWithNumber } from "@fantasy-top/sdk-pro";
import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

interface GalleryProps {
    cards: CardWithNumber[];
}

const Gallery: React.FC<GalleryProps> = ({ cards }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {cards.map((card) => (
        <div key={card.id} className={styles.card}>
            <Image
                src={`${card.picture}_${card.heroes.stars}.png` || "/default-card-image.png"}
                alt={card.heroes.name || "Card"}
                width={150}
                height={200}
            />
            <div className={styles.cardInfo}>
                <h3>{card.heroes.name}</h3>
                <p>Rarity: {card.rarity}</p>
                <p>Score: {Number(card.heroes.current?.fantasy_score.toString())}</p>
            </div>
        </div>
        ))}
      </div>
    );
  };
  
  export default Gallery;