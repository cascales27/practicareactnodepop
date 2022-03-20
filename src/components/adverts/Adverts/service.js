import client from "../../../api/client";

const advertsBaseUrl = '/api/v1/adverts';

export const getLatestAdverts = ()=> {
    const url = `${advertsBaseUrl}`;
    return client.get(url)
}