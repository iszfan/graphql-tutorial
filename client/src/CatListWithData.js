import React from 'react';

//Apollo imports
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import AddCat from './AddCat';
import "./CatListWithData.css";

const CatList = ({data: {loading, error, cats}}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }
   return <ol className="Item-list">
     {cats.map(cat => <li key={cat.id}>
        <div className="catName">{cat.name}</div>
        <img className="catPicture" src={cat.pictureSrc} alt={""}/>
        <div className="cuteness">Cuteness: {cat.cuteness || "to be petted"}</div>
      </li>)}
      <li>
        <AddCat />
      </li>
   </ol>;
};

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
