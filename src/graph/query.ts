import { GraphQLNonNull, GraphQLString } from 'graphql';
import { load } from '../model/emoji';
import emojiType from './type';

const emojis = load();

const emojiQuery = {
  type: emojiType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root: any, args: any) {
    const name = args.name;
    console.log("emoji name: ", name);
    const emoji = emojis.filter((e) => {
      console.log(e.name, ":::", name);
      return e.name === name;
    });
    return emoji[0];
  },
};

export default emojiQuery;
