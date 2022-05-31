import { Historical } from "../Database/Historical";
import React from "react";

export default function HistoricalOrder() {
  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h5 className="text-center p-3 ">Historical Order </h5>
      <div className=" border w-50 m-auto ">
        <h5>Filter</h5>
        <input
          onChange={handleSearch}
          type={"text"}
          placeholder="search by name, status, price and date"
          className="form-control"
        />
      </div>
      <div className="w-50 m-auto">
        <table className="table table-borderless table-striped ">
          <thead>
            <tr className="border-top">
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Historical.map((value, index) => {
              if (
                value.name.startsWith(search) ||
                value.date.startsWith(search) ||
                value.status.startsWith(search) ||
                value.price == search
              )
                return (
                  <List
                    key={index}
                    id={value.id}
                    no={index}
                    name={value.name}
                    quantityAvailable={value.quantity}
                    price={value.price}
                    date={value.date}
                    status={value.status}
                  />
                );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
function List({ name, no, quantityAvailable, price, id, date, status }) {
  return (
    <>
      <tr>
        <td>{no + 1}</td>
        <td>{name}</td>
        <td>{quantityAvailable}</td>
        <td>{price}</td>
        <td>{date}</td>
        <td>{status}</td>
      </tr>
    </>
  );
}
