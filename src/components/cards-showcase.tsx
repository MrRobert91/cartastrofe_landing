"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CardExample = {
  image: string;
  alt: string;
};

type CardsShowcaseProps = {
  cards: CardExample[];
};

export function CardsShowcase({ cards }: CardsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextCard = () => {
    if (cards.length < 2) return;
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  useEffect(() => {
    if (cards.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [cards.length]);

  if (!cards.length) {
    return null;
  }

  const activeCard = cards[activeIndex];

  return (
    <div className="mx-auto w-full max-w-[315px] space-y-4">
      <button
        type="button"
        onClick={showNextCard}
        className="relative block aspect-[3/4] w-full overflow-hidden rounded-2xl border bg-background shadow-sm"
        aria-label="Pasar a la siguiente carta"
      >
        <Image src={activeCard.image} alt={activeCard.alt} fill className="object-cover" sizes="(max-width: 768px) min(100vw, 315px), 315px" />
      </button>

      <div className="flex flex-wrap gap-2">
        {cards.map((card, index) => (
          <button
            key={card.image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-muted hover:bg-muted-foreground/40"
            }`}
            aria-label={`Ver carta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
