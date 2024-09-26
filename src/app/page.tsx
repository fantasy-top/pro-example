"use client";

import { useState } from "react";
import CardGallery from "./components/CardGallery";
import styles from "./page.module.css";
import { CardWithNumber } from "@fantasy-top/sdk-pro";

export default function Home() {
  const [playerAddress, setPlayerAddress] = useState("");
  const [cards, setCards] = useState<CardWithNumber[]>([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/getCards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerId: playerAddress }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }

      const result = await response.json();
      setCards(result);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Player Card Gallery</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={playerAddress}
            onChange={(e) => setPlayerAddress(e.target.value)}
            placeholder="Enter player address"
            required
          />
          <button type="submit">Fetch Cards</button>
        </form>

       <CardGallery cards={cards} />
      </main>
    </div>
  );
}
