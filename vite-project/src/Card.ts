import shuffle from "lodash.shuffle";

enum CardSuit {
  club = "♣",
  diamond = "♦",
  heart = "♥",
  spade = "♠",
}

export const Jack = 11;
export const Queen = 12;
export const King = 13;
export const LittleJoker = 14;
export const BigJoker = 15;

/**
 * 1-10
 * 11: Jack
 * 12: Queen
 * 13: King
 * 14: Little Joker
 * 15: Big Joker
 */
interface Card {
  rank: number;
  suit?: CardSuit;
}

interface Deck {
  cards: Card[];
}

export class MyDeck implements Deck {
  cards: Card[];
  constructor(cards: Card[]) {
    this.cards = cards;
  }
  shuffle() {
    this.cards = shuffle(this.cards);
    return this.cards;
  }
}

export const createDeck = (): Deck => {
  const deck: Deck = { cards: [] };
  for (const suit of [
    CardSuit.club,
    CardSuit.diamond,
    CardSuit.heart,
    CardSuit.spade,
  ]) {
    for (let rank = 0; rank < 14; rank++) {
      deck.cards.push({ suit, rank });
    }
  }
  deck.cards.push({ rank: LittleJoker });
  deck.cards.push({ rank: BigJoker });
  return deck;
};
