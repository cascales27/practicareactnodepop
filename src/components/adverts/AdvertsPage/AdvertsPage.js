import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getAdverts } from '../service';
import Page from '../../layout/Page';
import Advert from './Advert.js';
import Button from '../../common/Button';

const EmptyList = () => (
    <div>
        <p>Publica tu primer anuncio</p>
        <Button as={Link} to='/adverts/new' variant='primary'>Nuevo anuncio</Button>
    </div>
);

const useAdverts = () => {
    const [adverts, setAdverts] = useState([]);
    useEffect(() => {
        const execute = async () => {
            const adverts = await getAdverts();
            setAdverts(adverts);
        };
        execute();
        return () => {};
    }, []);
    return adverts;
};

const AdvertsPage = () => {
    const adverts = useAdverts();
    return (

        <Page title='Cascalespop'>
          {adverts.length ? (
            <div >
              {/*<Filters/>*/}
              
              <h2>Advert list:</h2>
              <div>
              {adverts.map((advert) => (
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                    <Advert {...advert} />
                  </Link>
                </li>
              ))}
              </div>
            </div>
          ) : (
            <EmptyList />
          )}
        </Page>
    );
  };

export default AdvertsPage;