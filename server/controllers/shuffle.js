import {gallery} from './../data'

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
export default function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

/*
export default function shuffle() {
    let shuffledGallery = [];
    while (gallery.images.length) {
        let random_index = Math.floor(Math.random() * gallery.images.length);
        shuffledGallery.push(gallery.images.splice(random_index, 1)[0]);
    }
    gallery.images = shuffledGallery;
}*/
