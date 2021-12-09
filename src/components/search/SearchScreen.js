import React, { useMemo }from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import getHeroesByName from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { query = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;
  
  const heroesFiltered = useMemo( () => getHeroesByName(query), [ query ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText}`);
  };

  return (
    <div>
      <h1>Busquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

           {
            (query === '')
                ? <div className="alert alert-info"> Buscar heroe </div>
                : (heroesFiltered.length === 0) 
                    && <div className="alert alert-danger"> No hay resultados de: { query }</div>
            }

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchScreen;
