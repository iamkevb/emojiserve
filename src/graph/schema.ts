import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { emojiQuery, emojisQuery } from './query';

const queries = {
  emoji: emojiQuery,
  emojis: emojisQuery
};

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  })
});

export default schema;
