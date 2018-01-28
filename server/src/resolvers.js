//in this file we’ll define how the schema should handle a channels query.
import {cats} from "./cats";

let nextId = cats.length+1;

const getRandomCatPic = () => {
    const catPicLibrary = [
       "http://cache.lovethispic.com/uploaded_images/thumbs/210306-Cute-Cat.png",
       "http://www.supercutegrooming.com/images/stories/g2.png",
       "http://www.stickpng.com/assets/images/5845e10e7733c3558233c0ea.png",
       "https://i.imgur.com/YSLSWGc.png"
    ];
    return catPicLibrary[Math.floor(Math.random()*catPicLibrary.length)];
}

export const resolvers = {
  Query: {
    cats: () => {
      return cats;
    },
    Cat: (obj, args) => {
      return cats.filter((cat) => cat.id === args.id)[0];
    }
  },
  Mutation: {
    addCat: (root, args) => {
      const newCat = { id: nextId++, name: args.name, pictureSrc: getRandomCatPic()};
      cats.push(newCat);
      return newCat;
    },
  },
};
