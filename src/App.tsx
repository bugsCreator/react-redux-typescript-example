import { FormEvent, useEffect } from "react";
import { RootState } from "./store";

import { fetchDataFromApi } from "./store/actions/apiActions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

export default function App() {
  const { loading, data, error } = useAppSelector(
    (state: RootState) => state.api
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDataFromApi("nature"));
  }, []);
  useEffect(() => {
    console.log(data?.photos);
  }, [data]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    let query = (e.target as any).query.value;
    dispatch(fetchDataFromApi(query));
  }
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input name="query" id="query" className="query" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      {error ? (
        <>Oh no, there was an error</>
      ) : loading ? (
        <>Loading...</>
      ) : data && data.photos ? (
        <>
          {data.photos.map((ele: any) => {
            return (
              <>
                <h3>{ele.alt}</h3>
                <img src={ele.src.landscape} alt={ele.alt} />
              </>
            );
          })}
        </>
      ) : null}
    </div>
  );
}
