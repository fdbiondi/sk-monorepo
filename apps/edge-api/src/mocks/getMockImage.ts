import { Image } from '../typings';

import { getRandomId } from './getRandomId';

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getMockImage(): Image {
  const width = 160;
  const height = 90;
  const seed = getRandomId(randomInt(5, 10));

  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
