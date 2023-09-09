import React from 'react'

const Taxes = () => {
  return (
    <>
          <section className="container taxes-container mt-3" id="section">
              <div className="row text-center ">
                  <div className="col col-3 grey">
                      <p><strong>HON.ALCALDÍA MUNICIPAL</strong></p>
                  </div>
                  <div className="col col-6 grey">
                      <p><strong>IMPUESTO A LA PROPIEDAD DE BIENES INMUEBLES</strong></p>
                  </div>
                  <div className="col col-3 grey">
                      <p><strong>AZURDUY</strong></p>
                  </div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-2 grey"><p>N° Orden</p></div>
                  <div className="col col-2 grey"><p>Gestión</p></div>
                  <div className="col col-2 grey"><p>Alcaldía</p></div>
                  <div className="col col-2 grey"><p>Código Catastral</p></div>
                  <div className="col col-2 grey"><p>CI/NIT</p></div>
                  <div className="col col-2 grey"><p>Tipo</p></div>
              </div>
              <div className="row text-center">
                  <div className="col col-2 white" id="norden"></div>
                  <div className="col col-2 white" id="gestion"></div>
                  <div className="col col-2 white" id="alcaldia"></div>
                  <div className="col col-2 white" id="catastral"></div>
                  <div className="col col-2 white" id="ci"></div>
                  <div className="col col-2 white" id="tipo"></div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-4 grey"><p>Propietario</p></div>
                  <div className="col col-2 grey"><p>Dto.</p></div>
                  <div className="col col-3 grey"><p>Localidad</p></div>
                  <div className="col col-3 grey"><p>Domicilio</p></div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-4 white" id="prop"></div>
                  <div className="col col-2 white" id="dto"></div>
                  <div className="col col-3 white" id="loc"></div>
                  <div className="col col-3 white" id="dom"></div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-5 grey"><p>UBICACIÓN DEL INMUEBLE</p></div>
                  <div className="col col-7 ">
                      <div className="row">
                          <div className="col col-2 grey"><p>Zona</p></div>
                          <div className="col col-2 grey"><p>Distrito</p></div>
                          <div className="col col-2 grey"><p>Manzano</p></div>
                          <div className="col col-2 grey"><p>Lote</p></div>
                          <div className="col col-2 grey"><p>Bloque</p></div>
                          <div className="col col-2 grey"><p>Apartamento</p></div>
                      </div>
                  </div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-5 white" id="ubic"></div>
                  <div className="col col-7 ">
                      <div className="row">
                          <div className="col col-2 white" id="zon"></div>
                          <div className="col col-2 white" id="dist"></div>
                          <div className="col col-2 white" id="manz"></div>
                          <div className="col col-2 white" id="lote"></div>
                          <div className="col col-2 white" id="bloq"></div>
                          <div className="col col-2 white" id="apar"></div>
                      </div>
                  </div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-9">
                      <div className="row">
                          <div className="col col-12 grey"><p>TIPIFICACIÓN Y EVALUACIÓN DEL TERRENO</p></div>
                          <div className="col col-1 grey"><p>Z.H</p></div>
                          <div className="col col-1 grey"><p>Vía</p></div>
                          <div className="col col-1 grey"><p>Val(m2)</p></div>
                          <div className="col col-1 grey"><p>Sup</p></div>
                          <div className="col col-1 grey"><p>Agua</p></div>
                          <div className="col col-1 grey"><p>Luz</p></div>
                          <div className="col col-1 grey"><p>Telef.</p></div>
                          <div className="col col-1 grey"><p>Alcan</p></div>
                          <div className="col col-1 grey"><p>Min.</p></div>
                          <div className="col col-1 grey"><p>Incl.</p></div>
                          <div className="col col-2 grey"><p>Avalúo Terreno</p></div>
                      </div>
                  </div>
                  <div className="col col-3">
                      <div className="row">
                          <div className="col col-12 grey"><p>VAL EMPRESAS</p></div>
                          <div className="col col-6 grey"><p>Valor Libros al</p></div>
                          <div className="col col-6 grey"><p>Base Imponible</p></div>
                      </div>
                  </div>
              </div>
              <div className="row text-center align-items-center">
                  <div className="col col-9">
                      <div className="row">
                          <div className="col col-1 white" id="zh"></div>
                          <div className="col col-1 white" id="via"></div>
                          <div className="col col-1 white" id="val"></div>
                          <div className="col col-1 white" id="sup"></div>
                          <div className="col col-1 white" id="agua"></div>
                          <div className="col col-1 white" id="luz"></div>
                          <div className="col col-1 white" id="telef"></div>
                          <div className="col col-1 white" id="alcan"></div>
                          <div className="col col-1 white" id="min"></div>
                          <div className="col col-1 white" id="incl"></div>
                          <div className="col col-2 white" id="avaluo"></div>
                      </div>
                  </div>
                  <div className="col col-3">
                      <div className="row">
                          <div className="col col-6 white" id="libro"></div>
                          <div className="col col-6 white" id="base"></div>
                      </div>
                  </div>
              </div>

              <div className="row text-center align-items-center">
                  <div className="col col-6">
                      <div className="row">
                          <div className="col col-12 grey"><p>TIPIFICACIÓN Y EVALUACIÓN DE LA CONSTRUCCIÓN</p></div>
                          <div className="col col-3 grey"><p>Tipo Vivienda</p></div>
                          <div className="col col-2 grey"><p>Val(m2)</p></div>
                          <div className="col col-2 grey"><p>Superficie</p></div>
                          <div className="col col-2 grey"><p>Antigüedad</p></div>
                          <div className="col col-3 grey"><p>Avalúo</p></div>
                      </div>
                  </div>
                  <div className="col col-6">
                      <div className="row">
                          <div className="col col-12 grey"><p>AVALÚO TOTAL</p></div>
                          <div className="col col-3 grey"><p>Avalúo Inmueble</p></div>
                          <div className="col col-3 grey"><p>Tipo Ex.</p></div>
                          <div className="col col-3 grey"><p>Monto Exento</p></div>
                          <div className="col col-3 grey"><p>Base Imponible</p></div>
                      </div>
                  </div>
              </div>

              <div className="row text-center align-items-center">
                  <div className="col col-6">
                      <div className="row" id="rowcons">
                          {/* <div className="col col-3 white" id="tipcons"><p></p></div>
    <div className="col col-2 white" id="valm2"><p></p></div>
    <div className="col col-2 white" id="valm2"><p></p></div>
    <div className="col col-2 white" id="valm2"><p></p></div>
    <div className="col col-3 white" id="valm2"><p></p></div>  */}
                      </div>
                  </div>
                  <div className="col col-6">
                      <div className="row" id="rowcons2">
                          {/* <div className="col col-3 white"><p></p></div>
    <div className="col col-3 white"><p></p></div>
    <div className="col col-3 white"><p></p></div>
    <div className="col col-3 white"><p></p></div>  */}
                      </div>
                  </div>
              </div>

              <div className="row text-center">
                  <div className="col col-2 grey"><p>Monto Determinado</p></div>
                  <div className="col col-2 ">
                      <div className="row">
                          <div className="col col-12 grey"><p>Saldo Anterior a Favor</p></div>
                          <div className="col col-6 grey"><p>Valor</p></div>
                          <div className="col col-6 grey"><p>T.C</p></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-12 grey"><p>Accesorios</p></div>
                          <div className="col col-9 grey"><p>Mant. Valor</p></div>
                          <div className="col col-3 grey"><p>Inter</p></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-12 grey"><p>Multas</p></div>
                          <div className="col col-4 grey"><p>Mora</p></div>
                          <div className="col col-4 grey"><p>Incump.</p></div>
                          <div className="col col-4 grey"><p>Adm.</p></div>
                      </div>
                  </div>
                  <div className="col col-2 grey">
                      <p>Descuento Pago en Término</p>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-6 grey"><p>T.C Act</p></div>
                          <div className="col col-6 grey"><p>Sal Gest</p></div>
                          <div className="col col-6 white" id="tcact"></div>
                          <div className="col col-6 white" id="salgest"></div>
                      </div>
                  </div>
              </div>

              <div className="row text-center">
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-12 white" id="montodeter"></div>
                          <div className="col col-12 grey"><p>Pago Anterior</p></div>
                          <div className="col col-12 white" id="pagant"></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-6 white" id="valordd"></div>
                          <div className="col col-6 white" id="tc"></div>
                          <div className="col col-12 grey"><p>Nro. Form</p></div>
                          <div className="col col-12 white" id="numform"></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-9 white" id="mantvalor"></div>
                          <div className="col col-3 white" id="inter"></div>
                          <div className="col col-12 grey"><p>Forma Pago</p></div>
                          <div className="col col-12 white" id="formpago"></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-4 white" id="mora"></div>
                          <div className="col col-4 white" id="incumpl"></div>
                          <div className="col col-4 white" id="adm"></div>
                          <div className="col col-6 grey"><p>Liquiación</p></div>
                          <div className="col col-6 grey"><p>Fech Em.</p></div>
                          <div className="col col-6 white" id="liq"></div>
                          <div className="col col-6 white" id="fechem"></div>
                      </div>
                  </div>
                  <div className="col col-2">
                      <div className="row">
                          <div className="col col-12 white" id="descuento"></div>
                          <div className="col col-12 grey"><p>Fecha Vencimiento</p></div>
                          <div className="col col-12 white" id="vencimiento"></div>
                      </div>
                  </div>
              </div>

              <div className="row text-center">
                  <div className="col col-9 grey"><p>TOTAL A PAGAR</p></div>
                  <div className="col col-3 white" id="total"></div>
              </div>
          </section>


          <section className="container mt-4">
              <div className="row">
                  <div className="col col-12 text-center">
                      <button type="button" className="btn btn-primary" id="boton">Imprimir</button>
                  </div>
              </div>
          </section>
      <footer></footer>
      </>
  )
}

export default Taxes;