import React, { Component } from 'react';
import './App.css';
import AddChannel from './AddChannel';

//Apollo imports
import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, graphql} from 'react-apollo';

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const ChannelsList = ({ data: {loading, error, channels }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ul>
     { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
   </ul>;
};

export const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;
export const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <img src={"http://cache.lovethispic.com/uploaded_images/thumbs/210306-Cute-Cat.png"} className="cat-logo" alt="logo" />
              <h1 className="App-title">Cat Adorableness Trainer</h1>
            </header>
              <ChannelsListWithData />
              <AddChannel />
          </div>
      </ApolloProvider>
    );
  }
}


export default App;
