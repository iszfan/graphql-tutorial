# A GraphQL demo: my virtual :smiley_cat: Inventory
### created for GraphQL workshop at Northeastern University
Modified based on https://github.com/apollographql/graphql-tutorial

# How to create the addCat mutation

1. Define the schema:
```
# A mutation to add a new cat to the list of cats
addCat(name: String!): Cat
```

2. Implement the mutation:

```
type Mutation {
  addCat: (root, args) => {
    const newCat = {id: nextId++, name: args.name, pictureSrc: getRandomCatPic()};
    cats.push(newCat);
    return newCat;
  }
}
```
Then you can test it out in Graphiql.

3. Connect the mutation with front-end client.

```
const addCatMutation = gql`
  mutation addCat($name: String!) {
    addCat(name: $name) {
      id
      name
    }
  }
`;

const AddCatWithMutation = graphql(addCatMutation)(AddCat);
export default AddCatWithMutation;
```
