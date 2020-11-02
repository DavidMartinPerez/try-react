import { getUrlSearchGif } from "./contructorUrlGiphy";

export const getFechGifs = async ( category ) => {
    const resp = await fetch(getUrlSearchGif(category));
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
        return { id, title, url: images.downsized_medium.url };
    })

    return gifs;
}