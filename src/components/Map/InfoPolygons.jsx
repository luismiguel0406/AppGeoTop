import { useEffect, useState } from "react";
import SearchResult from "./searchResult";
import InfoAccordion from "./infoAccordion";

const initialDataToShow = {
  lands: {
    sur: "",
    agua: "",
    base: "",
    este: "",
    tipo: "",
    fondo: "",
    norte: "",
    oeste: "",
    valor: "",
    barrio: "",
    codigo: "",
    frente: "",
    nombre: "",
    predio: "",
    energia: "",
    manzano: "",
    suptest: "",
    internet: "",
    material: "",
    telefono: "",
    apellidos: "",
    direccion: "",
    documento: "",
    subpredio: "",
    superficie: "",
    transporte: "",
    adquisicion: "",
    codigoforma: "",
    valortipovia: "",
    alcantarillado: "",
  },
  builts: {
    aire: "No",
    anyo: "n/a",
    tanque: "",
    plantas: "",
    escalera: "No",
    servicio: "",
    ascensores: "No",
    lavanderia: "",
    sanitarios: "",
    calefaccion: "No",
    dormitorios: "No",
    Conservacion: "",
    revestimiento: "",
    estadoConservacion: "",
  },
};
const InfoPolygons = ({ polygons = {} }) => {
  const [dataToShow, setDataToShow] = useState(initialDataToShow);
  const [isSearching, setIsSearching] = useState(false);

  const { lands, builts } = polygons;

  const handleDataToShow = (id) => {
    //recibir id de la construccion tambien o luego buscarlo teniendo ya el terreno
    let landsFiltered = lands?.features.filter(
      ({properties}) => properties.id === id
    );
    let builtsFiltered = builts?.features.filter(
      ({properties}) => properties.id === id
    );
    //Temporal Solution
    setDataToShow({ lands: landsFiltered[0]?.properties, builts: builtsFiltered[0]?.properties });
  };
 
  useEffect(()=>{
    setIsSearching(false);
  },[dataToShow])

  useEffect(() => {
    if (lands?.features.length === 0) return;
    setIsSearching(true);
  }, [lands, builts]);

  if (Object.entries(polygons).length === 0) return null;

  return (
    <div className="result-card m-2 p-2 animate__animated animate__slideInDown">
      {isSearching ? (
        <SearchResult listResults={lands} handleDataToShow={handleDataToShow} />
      ) : (
        <InfoAccordion dataToShow={dataToShow} />
      )}
    </div>
  );
};
export default InfoPolygons;
