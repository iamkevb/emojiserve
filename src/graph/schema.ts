import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import emojiQuery from './query';

const queries = {
  emoji: emojiQuery,
};

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  })
});

export default schema;
