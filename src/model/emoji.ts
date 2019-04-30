import * as data from './emoji_list.json';

interface RootObject {
  [category: string]: Emoji[];
}

interface Emoji {
  name: string;
  hexcode: string;
  category: string;
  keywords: string[];
  emoji: string;
  skins: Skin[];
}

interface Skin {
  hexcode: string;
  emoji: string;
}

export function load(): Emoji[] {
  let all: Emoji[] = [];

  const root = data as RootObject;
  for (const category in root) {
    if (root.hasOwnProperty(category)) {
      const emojis: Emoji[] = root[category];
      all = all.concat(emojis);
    }
  }
  return all;
}
