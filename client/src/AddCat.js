//External library
import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

import {catListQuery} from './CatListWithData.js';

const AddCat = ({mutate}) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      //Send the value to mutation
      mutate({
        variables: {
          name: evt.target.value
        },
        refetchQueries: [{
          query: catListQuery
        }],
      })
      .then(res => {
        evt.target.value = "";
      });
    }
  };
  return (
      <input
        type="text"
        placeholder="Add New Cat"
        onKeyUp={handleKeyUp}
      />
  );
};

//TODO Step 3: connect mutation with front-end client
