# A GraphQL demo: my virtual :smiley_cat: Inventory
### created for GraphQL workshop at Northeastern University
Modified based on https://github.com/apollographql/graphql-tutorial

# How to add Queries

1. Add the data

2. Define the schema:
```
cats: [Cat]    # "[]" means this is a list of cats
Cat(id: ID!): Cat
```

3. Implement the queries:

```
cats: () => {
  return cats;
},
Cat: (obj, args) => {
  return cats.filter((cat) => cat.id === args.id)[0];
}
```
Then you can test it out in Graphiql.

4. Connect the query with front-end client.

```
export const catListQuery = gql`
  query CatListQuery {
    cats {
      id
      name
      pictureSrc
      cuteness
    }
  }
`;
export const CatListWithData = graphql(catListQuery)(CatList);

```
