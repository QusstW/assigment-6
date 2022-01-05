import React from "react";
import s from "./styles.module.css";
import useApp from "../../../hooks/useApp"


const Table = () => {

  const selectValue = [5, 8, 10, 13];

  const [page, setPage] = React.useState(1)
  const [currentElementsOnPage, setCurrentElementsOnPage] = React.useState(5)
  const { data, getTableData } = useApp();


  const handleChangeOption = (value) => {
    setCurrentElementsOnPage(value)
    getTableData(value, page)
  }


  const getNextPart = () => {
    setPage((value) => value + 1)
    getTableData(currentElementsOnPage, page + 1)
  }

  const getBeforePart = () => {
    if ( page > 1) {
      setPage((value) => value - 1)
      getTableData(currentElementsOnPage, page - 1)
    }
  }

  React.useEffect(() => {
    getTableData(currentElementsOnPage, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <table
        cellSpacing="0"
        className={s.table}
        style={{ borderCollapse: "collapse" }}
      >
        <col span="3" style={{ border: "1px solid #2F80ED" }} />
        <thead className={s.head_table}>
          <tr>
            <th style={{ height: "50px" }}>Position</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr key={e.name + index}>
              <th>{e.name}</th>
              <th>{e.url}</th>
              <th>{e.name}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={s.pagination}>
        <button className={s.pagination_arrow} onClick={getBeforePart}>{"<"}</button>
        <button className={s.pagination_arrow} onClick={getNextPart}>{">"}</button>
      </div>
      <select onChange={(e) => handleChangeOption(e.target.value)}>
        {selectValue.map((e, index) => <option key={index + e}>{e}</option>)}
      </select>
    </div>
  );
};

export default Table;
