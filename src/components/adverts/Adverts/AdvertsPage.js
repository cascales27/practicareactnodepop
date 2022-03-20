
import { useState, useEffect} from 'react';
import { getLatestAdverts } from './service';


import './AdvertPage.css';
import Layout from '../../layout/Layout';

const AdvertsPage = () => {
    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
        getLatestAdverts().then(adverts => setAdverts(adverts));
    }, []);

   
    return (
        <Layout title="Mira todos los anuncios">
    <div className="advertsPage">
        <ul>
            {adverts.map(advert => (
                <li key={advert.id}>{advert.content}</li>
            ))}
        </ul>
    </div>
    </Layout>
    );
};
export default AdvertsPage;