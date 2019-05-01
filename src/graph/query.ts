import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { load } from '../model/emoji';
import emojiType from './type';

const emojis = load();

export const emojiQuery = {
  type: emojiType,
  args: {
    value: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root: any, args: any) {
    const value = args.value;
    const emoji = emojis.filter((e) => {
      return e.emoji === value;
    });
    return emoji[0];
  },
};

export const emojisQuery = {
  type: new GraphQLList(emojiType),
  resolve() {
    return emojis;
  }
};
