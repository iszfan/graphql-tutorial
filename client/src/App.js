import React, {Component} from 'react';

//Apollo imports
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

import './App.css';
import {CatListWithData} from "./CatListWithData";

const client = new ApolloClient({
    link: new HttpLink({uri: 'http://localhost:4000/graphql' }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <img src={"https://vignette.wikia.nocookie.net/animaljam/images/d/d5/Nyan-cat_zps4adb5b0e.png/revision/latest?cb=20140627073036"} className="cat-logo" alt="logo" />
              <h1 className="App-title">My Virtual Cat Inventory</h1>
            </header>
            <CatListWithData />
          </div>
      </ApolloProvider>
    );
  }
}


export default App;
