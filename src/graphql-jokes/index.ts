const { gql } = require('apollo-server');

/**
 * Resolvers define the technique for fetching the types defined in the
 * schema. This resolver retrieves jokes from https://api.chucknorris.io.
 **/
export const resolvers = {
    Query: {
        categories: async (_source, {}, { dataSources }) => {
            return dataSources.jokes.getCategories();
        },
        joke: async (_source, { category }, { dataSources }) => {
            return dataSources.jokes.getJoke(category);
        }
    }
};

/**
 * The schema below is defined to be an exact representation of data
 * from the Chuck Norris API
 */
export const typeDefs = gql`
  type Joke {
    icon_url: String
    value: String,
    categories: [String]
  }

  type Query {
    categories: [String]
    joke(category: String): Joke
  }
`;
