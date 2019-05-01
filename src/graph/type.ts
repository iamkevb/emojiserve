import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

const skinType = new GraphQLObjectType({
  name: "skin",
  fields() {
    return {
      hexcode: {
        type: GraphQLString,
        resolve(skin) {
          return skin.hexcode;
        }
      },
      emoji: {
        type: GraphQLString,
        resolve(skin) {
          return skin.emoji;
        }
      }
    };
  }
});

const emojiType = new GraphQLObjectType({
  name: "emoji",
  fields() {
    return {
      name: {
        type: GraphQLString,
        resolve(emoji) {
          return emoji.name;
        }
      },
      hexcode: {
        type: GraphQLString,
        resolve(emoji) {
          return emoji.hexcode;
        }
      },
      description: {
        type: GraphQLString,
        resolve(emoji) {
          return emoji.description;
        }
      },
      category: {
        type: GraphQLString,
        resolve(emoji) {
          return emoji.category;
        }
      },
      keywords: {
        type: new GraphQLList(GraphQLString),
        resolve(emoji) {
          return emoji.keywords;
        }
      },
      emoji: {
        type: GraphQLString,
        resolve(emoji) {
          return emoji.emoji;
        }
      },
      skins: {
        type: new GraphQLList(skinType),
        resolve(emoji) {
          return emoji.skins;
        }
      }
    };
  }
});

export default emojiType;
