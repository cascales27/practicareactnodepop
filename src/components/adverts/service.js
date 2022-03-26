import client from "../../api/client";

const advertsBaseUrl = '/api/v1/adverts';

export const getLatestAdverts = (name, price, tags, sale)=> {
    let filters = "";
    if (name) {
        filters += `name=${name}`;
    }
    const url = `${advertsBaseUrl}?${filters}`;
    return client.get(url);
};

export const createAdvert = async (advert) => {
    const newAdvert = new FormData();
    newAdvert.append("name", advert.name);
    newAdvert.append("sale", advert.sale);
    newAdvert.append("price", advert.price);
    newAdvert.append("tags", [advert.tags]);
    newAdvert.append("photo", advert.photo);

    const url = `${advertsBaseUrl}`;
    try {
        await client.post(url, newAdvert);
    } catch (error) {
        console.log(error);
    }
};

export const getAdvert = (advertId) => {
    const url = `${advertsBaseUrl}/${advertId}`;
    return client.get(url);
};

export const deleteAdvert = (advertId) => {
    const url = `${advertsBaseUrl}/${advertId}`;
    return client.delete(url, advertId);
};