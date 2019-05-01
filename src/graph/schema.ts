import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { categoriesQuery, emojiQuery, emojisQuery } from "./query";

const queries = {
  emoji: emojiQuery,
  emojis: emojisQuery,
  categories: categoriesQuery
};

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: queries
  })
});

export default schema;
