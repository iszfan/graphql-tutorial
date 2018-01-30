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
     cuteness: Int
  }
  # This type specifies the entry points into our API. In this case
  # there is only one - "cats" - which returns a list of cats.
  type Query {
     cats: [Cat]    # "[]" means this is a list of cats
     Cat(id: ID!): Cat
  }
  # The mutation root type, used to define all mutations.
  type Mutation {
    //TODO Step 1: define schema.
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
export {schema};
