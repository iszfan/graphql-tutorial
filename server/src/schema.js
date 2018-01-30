// src/schema.js
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  type Cat {
     id: ID!                # "!" denotes a required field
     name: String
     pictureSrc: String
  }
  # This type specifies the entry points into our API. In this case
  # there is only one - "cats" - which returns a list of cats.
  type Query {
     cats: [Cat]    # "[]" means this is a list of cats
     Cat(id: ID!): Cat
  }
  # The mutation root type, used to define all mutations.
  type Mutation {
    # A mutation to add a new cat to the list of cats
    addCat(name: String!): Cat
    deleteCat(name: String!): [Cat]
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
export {schema};
