import client from "../../api/client";

const advertsBaseUrl = '/api/v1/adverts';

export const getAdverts = ()=> {
    const url = `${advertsBaseUrl}`;
    return client.get(url);
};

export const createAdvert =  (advert) => {
    const url = advertsBaseUrl;
    return client.post(url, advert)
};

export const getAdvert = (advertId) => {
    const url = `${advertsBaseUrl}/${advertId}`;
    return client.get(url);
};

export const deleteAdvert = (advertId) => {
    const url = `${advertsBaseUrl}/${advertId}`;
    return client.delete(url, advertId);
};