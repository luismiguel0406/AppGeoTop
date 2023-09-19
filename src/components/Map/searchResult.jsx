const SearchResult = ({ listResults = {}, handleDataToShow }) => {
  const { features } = listResults;
  return (
    <div className="list-result-container">
      {!features  ? (
        <div className="d-flex align-items-center justify-content-center w-100 h-100">
          <span className="display-6">Sin contenido para mostrar!</span>
        </div>
      ) : (
        <ul className="list-group list-group-flush">
          {features?.map(({ properties }, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => handleDataToShow(properties?.id)}
            >
              <p className="list-item-result">
                <strong>{properties?.codigo}</strong>
              </p>
              <p className="list-item-result">{properties.direccion}</p>
              <small className="list-item-result">
                {properties?.nombre} {properties?.apellidos}
              </small>
            </li>
          ))}
          {features?.length > 5 ? (
            <li className="list-group-item load-more">
              <a>
                <strong>Cargar mas...</strong>
              </a>
            </li>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
