import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InfoCard = () => {
  const [showLogin, setShowLogin] = useState(false);
   let navigate =  useNavigate();
  return (
    <div className="second-container text-center">
      <h1 className="pt-2 pb-2 display-6">
        Geodesia, Topografía y Sistemas de Información Geográfica
      </h1>
      <h4 className="pb-2">GEOTOPGIS</h4>
      {
       showLogin ?    
       <div className="login  animate__animated animate__fadeIn">
          <div className="mb-3">
            <label htmlFor="user" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              className="form-control"
              placeholder="Usuario"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="text"
              id="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
       <button
         className="my-2 mx-2 p-3 btn btn-success"
         onClick={() => navigate("map", { replace: true })}
       >
         Iniciar sesion
       </button>
       <button
         className="my-2 mx-2 p-3 btn btn-light"
         onClick={() => {
           setShowLogin(false);
         }}
       >
         Cancelar
       </button>
     </div>
       :
        <>
          <p className="px-5 pb-2 animate__animated animate__fadeIn">
            Bienvenido al visor técnico del Colegio de Topógrafos de Riberalta,
            Haz click abajo para acceder a la información catastral de los
            terrenos de tu Municipio.
          </p>
          <button
            className="my-2 mx-2 p-3 btn btn-light animate__animated animate__fadeIn"
            onClick={() => {
              setShowLogin(true);
            }}
            >
            Ir al mapa
          </button>
        </>      
      }    
    </div>
  );
};
