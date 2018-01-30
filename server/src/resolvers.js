//in this file we’ll define how the schema should handle a channels query.
import {cats} from "./cats";

let nextId = cats.length + 1;

/** This returns a random cat pic url. */
const getRandomCatPic = () => {
    const catPicLibrary = [
       "http://cache.lovethispic.com/uploaded_images/thumbs/210306-Cute-Cat.png",
       "http://www.supercutegrooming.com/images/stories/g2.png",
       "http://www.stickpng.com/assets/images/5845e10e7733c3558233c0ea.png",
       "https://i.imgur.com/YSLSWGc.png",
       "http://www.edrants.com/wp-content/uploads/2016/06/cat.png",
       "https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb1IMzaskiswmEa2CPlYZ0cs8kIXHdhhSY0JG6vDMyPQNJ4vu",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb1IMzaskiswmEa2CPlYZ0cs8kIXHdhhSY0JG6vDMyPQNJ4vu",
       "http://www.edrants.com/wp-content/uploads/2016/06/cat.png",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmtzHf-Z4S3FabBAx5P42fcrjhd7XbvR88-89sMdI0Yx0pw43AA",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMWsGyjWHGYGuxZW7UEU7BH-3gvei11YOD8M5Jt-pWWiujuh1Pw",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT7h86SosmrEFrYhz1U6HT1wMrDXCCFDTqQEtUWxh3cZkosoqi",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFUAjbDhaP0-tZCEafOwkRO2K27SaYX-GrnEm6UI_DYNyNXPD",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz7N3eehb_ITCDlouOL9luzwXJ5DROUYOt5lnGjRWA9l9WsCVqw",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrf_RYVae6SqQXkI0lmMpL0wKBJ5Bgn17YX9YvFicSyHeTp0sM",
       "http://www.pngmart.com/files/1/Cat-PNG-File.png"
    ];
    return catPicLibrary[Math.floor(Math.random()*catPicLibrary.length)];
}

/**
 * The "meat" of queries and mutations!
 * Here, you can customize what each query and mutation will return.
 */
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
      const newCat = {id: nextId++, name: args.name, pictureSrc: getRandomCatPic()};
      cats.push(newCat);
      return newCat;
    },
    deleteCat: (root, args) => {
      return cats.filter((cat) => cat.name !== args.name);
    }
  },
};
