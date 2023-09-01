import searchOptions from "../../data/searchOptions.json";

const SearchInput = ({ handleOnChangeInput, searchData }) => {
  return (
    <div className="search-box-container">
      <div className="input-group search-input m-2 p-2">
        <input
          type="text"
          className="form-control"
          placeholder="Escribe lo que deseas buscar"
          name="value"
          value={searchData?.value}
          onChange={handleOnChangeInput}
        />
        <button className="btn btn-danger search-button" type="button">
          <i className="fa-solid fa-close" style={{ color: "#fafafa" }}></i>
        </button>
        <select
          className="form-select"
          name="type"
          value={searchData?.type}
          onChange={handleOnChangeInput}
        >
          {searchOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="btn btn-success search-button" type="button">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#fafafa" }}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
