import React from "react";
import Photo from "../../common/Photo";

const Advert = ({  name, sale, price, tags, id, photo }) => {
    return (
        <article>
           
            <div>{name}</div>
            <div>{sale? (<div>En venta</div>)
            : (<div>Se busca</div>)}
            </div>
            <div>{price}</div>
            <div>{tags}</div>
            <div>{id}</div>
            <div>{photo? ( <Photo src={photo}></Photo>)
            : (<Photo></Photo>)}
            </div>
        </article>
    );
};



export default Advert;