import React from "react";
import  imagenpordefecto  from "../../assets/imagenpordefecto.jpeg";

const Photo = ({ photo}) => {
    return photo === null ? (
      <img src={imagenpordefecto} alt="imagen" height="75" width="75"></img>
    ) : (
      <div>
      <img
      src={process.env.REACT_APP_API_BASE_URL + photo}
      alt="imagen"
      height="75"
      width="75" />
      </div>
    );
  };

  export default Photo;