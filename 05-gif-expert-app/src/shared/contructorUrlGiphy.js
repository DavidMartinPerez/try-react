import { Const } from "./const";

const getCompleteUrlGiphy = (url, params = '') =>  `${url}?${params}&api_key=${Const.apiKeyGiphy}`;

export const getUrlSearchGif = ( category ) => getCompleteUrlGiphy( Const.urlSearchGiphy, `q=${ encodeURI(category) }&limit=5` );