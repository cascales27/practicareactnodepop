import { useState, useCallback, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Page from '../../layout/Page';
import Button from '../../common/Button';
import { createAdvert } from '../service';
import FormField from '../../common/FormField';

const NewAdvertPage = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState({
        name: "",
        price: "",
        sale: "",
        tags: "",
        photo: ""
    });

    const { name, sale, tags, price, photo } = content;

    const handleChange = useCallback((event) => {
        setContent((content) => ({
            ...content,
            [event.target.name]: event.target.value,
        }));
       
    }, []);

    const [error, setError] = useState(null);

    const[createAdvert, setCreateAdvert] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formElement = document.querySelector("form");
        const formData = new FormData(formElement);
        try {
            const advert = await createAdvert(formData);
            setCreateAdvert(advert);
            navigate(`/adverts/${createAdvert.id}`);
        } catch (error) {
            setError(error);
        }
    };

    const buttonDisabled = useMemo(() => {
        return !name || !sale || !tags || !price;
    }, [name,sale, tags, price]);

    if (createAdvert) {
        return <Navigate to={`/adverts/${createAdvert.id}`} />;
    }
    if(error?.status === 401) {
        return <Navigate to='/login' />;
    };

    return (
        <Page title="Nuevo anuncio">
            <div >
                <form onSubmit={handleSubmit}>
                    <FormField
                        label="name"
                        name="name"
                        required
                        placeholder="Nombre"
                        type="text"
                        value={name}
                        onChange={handleChange}>
                    </FormField>

                    <div>
                        <input
                        type="radio"
                        id="true"
                        name="sale"
                        value={true}
                        onChange={handleChange}>

                        </input>
                        <label htmlFor='true'>En venta</label>
                        <input
                        type="radio"
                        id="false"
                        name="sale"
                        value={false}
                        onChange={handleChange}
                        ></input>
                        <label htmlFor='false'>Buscar</label>
                    </div>


                    <FormField
                        name="price"
                        placeholder='Ponle precio'
                        required
                        type="number"
                        value={price}
                        onChange={handleChange}
                    ></FormField>

                    <div>
                        <label htmlFor='tags'>Elige etiquetas para tu producto</label>
                        <select
                            name="tags"
                            id="tags"
                            size="4"
                            value={[tags]}
                            onChange={handleChange}
                            required
                            multiple={true}
                        >
                            <option name="lifestyle" value="lifestyle">
                                Lifestyle
                            </option>
                            <option name="mobile" value="mobile">
                                Mobile
                            </option>
                            <option name="motor" value="motor">
                                Motor
                            </option>
                            <option name="work" value="work">
                                Work
                            </option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='photo'>
                            Agrega una imagen para tu producto
                        </label>
                        <input
                            name="photo"
                            type="file"
                            onChange={handleChange}
                            value={photo}></input>
                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        disabled={buttonDisabled}
                    > Crea un nuevo anuncio
                    </Button>
                </form>
            </div>
        </Page>
    );



}



export default NewAdvertPage;