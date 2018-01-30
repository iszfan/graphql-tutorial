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
     #TODO Step 2: define the schema
  }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});
export {schema};
