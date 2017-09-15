import {gallery} from './../data'

function shuffle() {
    let shuffleGallery = [];
    while (gallery.images.length) {
        let random_index = Math.floor(Math.random() * gallery.images.length);
        shuffleGallery.push(gallery.images.splice(random_index, 1)[0]);
    }
    console.log('shuffle!');
    console.log('shuffleGallery', shuffleGallery);
    return shuffleGallery;
}

export let shuffleGallery = shuffle();