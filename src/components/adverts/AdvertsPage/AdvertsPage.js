
import { useState, useEffect} from 'react';
import { getLatestAdverts } from '../service';
import Button from '../../common/Button';

import './AdvertPage.css';
import Layout from '../../layout/Layout';

const AdvertsPage = ( { isLogged, onLogout }) => {
    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
        getLatestAdverts().then(adverts => setAdverts(adverts));
    }, []);

   
    return (
        <Layout title="Mira todos los anuncios" isLogged={isLogged} onLogout={onLogout}>
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