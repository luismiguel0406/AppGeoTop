import {  useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from "reactstrap";

const InfoAccordion = ({dataToShow}) => {
 const {lands , builts={}  } = dataToShow;

  const {
    sur,
    agua,
    base,
    este,
    tipo,
    fondo,
    norte,
    oeste,
    valor,
    barrio,
    codigo,
    frente,
    nombre,
    predio,
    energia,
    manzano,
    suptest,
    internet,
    material,
    telefono,
    apellidos,
    direccion,
    documento,
    subpredio,
    superficie,
    transporte,
    adquisicion,
    codigoforma,
    valortipovia,
    alcantarillado,
  } = lands;

  const {
    aire,
    anyo,
    tanque,
    plantas,
    escalera,
    servicio,
    ascensores,
    lavanderia,
    sanitarios,
    calefaccion,
    dormitorios,
    Conservacion,
    revestimiento,
    estadoConservacion
  }= builts;
  
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <Accordion open={open} toggle={toggle}>
    <AccordionItem>
      <AccordionHeader targetId="1">Ubicación</AccordionHeader>
      <AccordionBody accordionId="1">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Propietario:{nombre} {apellidos}</li>
          <li className="list-group-item">Adquisición: {adquisicion}</li>
          <li className="list-group-item">Agua: {agua}</li>
          <li className="list-group-item">Alcantarillado: {alcantarillado}</li>
          <li className="list-group-item">Barrio: {barrio}</li>
          <li className="list-group-item">Base: {base}</li>
          <li className="list-group-item">Codigo: {codigo}</li>
          <li className="list-group-item">Codigo Forma: {codigoforma}</li>
          <li className="list-group-item">Dirección: {direccion}</li>
          <li className="list-group-item">Documento: {documento}</li>
          <li className="list-group-item">Energia: {energia}</li>
          <li className="list-group-item">Este: {este}</li>
          <li className="list-group-item">Fondo: {fondo}</li>
          <li className="list-group-item">Frente: {frente}</li>
          <li className="list-group-item">Internet: {internet}</li>
          <li className="list-group-item">Material: {material}</li>
          <li className="list-group-item">Norte: {norte} </li>
          <li className="list-group-item">Oeste: {oeste}</li>
          <li className="list-group-item">Predio: {predio}</li>
          <li className="list-group-item">Manzano: {manzano}</li>
          <li className="list-group-item">SupTest: {suptest}</li>
          <li className="list-group-item">Sub-Predio: {subpredio}</li>
          <li className="list-group-item">Superficie: {superficie}</li>
          <li className="list-group-item">Sur: {sur}</li>
          <li className="list-group-item">Telefono: {telefono}</li>
          <li className="list-group-item">Tipo: {tipo}</li>
          <li className="list-group-item">Tipo de vía: {valortipovia}</li>
          <li className="list-group-item">Transporte: {transporte}</li>
          <li className="list-group-item">Valor: {valor}</li>
        </ul>
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">Información</AccordionHeader>
      <AccordionBody accordionId="2">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Aire Acondicionado: {aire}</li>
          <li className="list-group-item">Año: {anyo}</li>
          <li className="list-group-item">Ascensores: {ascensores}</li>
          <li className="list-group-item">Calefacción: {calefaccion}</li>
          <li className="list-group-item">Conservacion: {Conservacion}</li>
          <li className="list-group-item">Estado de conservacion: {estadoConservacion}</li>
          <li className="list-group-item">Dormitorios: {dormitorios}</li>
          <li className="list-group-item">Escalera: {escalera}</li>
          <li className="list-group-item">Lavanderia: {lavanderia}</li>
          <li className="list-group-item">Plantas: {plantas}</li>
          <li className="list-group-item">Revestimiento: {revestimiento}</li>
          <li className="list-group-item">Sanitarios: {sanitarios}</li>
          <li className="list-group-item">Servicio: {servicio}</li>
          <li className="list-group-item">Tanque:     {tanque}</li>
        </ul>
      </AccordionBody>
    </AccordionItem>
  </Accordion>
  )
}

export default InfoAccordion;