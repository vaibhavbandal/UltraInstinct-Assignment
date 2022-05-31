import { useEffect, useState } from "react";
import { CurrentOrderCollection } from "../Database/CurrentOrderCollection";
import { Historical } from "../Database/Historical";
import { Items } from "../Database/Items";

export default function Orderpage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = Items;
    setItems(data);
  }, []);
  return (
    <>
      <h5 className="text-center display-4">List of All Items</h5>

      <div className="w-50 m-auto">
        <table className="table table-borderless table-striped ">
          <thead>
            <tr className="border-top">
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>price</th>
              <th>Place Order</th>
            </tr>
          </thead>
          <tbody>
            {items.map((value, index) => {
              return (
                <List
                  key={index}
                  id={value.id}
                  no={index}
                  name={value.name}
                  quantityAvailable={value.quantity.available}
                  price={value.price}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function List({ name, no, quantityAvailable, price }) {
  const [orderData, setOrderData] = useState({ name, price });
  useEffect(() => {
    setOrderData({
      name,
      price,
      quantity: 1,
      date: new Date().toLocaleDateString(),
      status: "pending",
    });
  }, []);

  const handleChange = (e) => {
    setOrderData({
      name,
      price: price * [e.target.value],
      quantity: e.target.value,
      date: new Date().toLocaleDateString(),
      status: "pending",
    });
  };

  const placeOrder = () => {
    if (CurrentOrderCollection.length === 0) {
      CurrentOrderCollection.push({ ...orderData });
      Historical.push({ ...orderData });
      alert("Order Placed Successfully.");
    } else {
      alert("Order Already Placed!");
    }
  };

  return (
    <>
      <tr>
        <td>{no + 1}</td>
        <td>{name}</td>
        <td>{quantityAvailable}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={() => {
              if (CurrentOrderCollection.length !== 0)
                alert("Already Ordered!");
            }}
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${no}`}
          >
            Place Order
          </button>
        </td>
      </tr>
      <PlaceOrder name={name} price={price} no={no} />
      {/* <div
        class="modal fade"
        id={`exampleModal${no}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <p>Name:{orderData.name}</p>
                <p>Price:{orderData.price}</p>
                <p>Date:{orderData.date}</p>
                <p>
                  select quantity:
                  <select onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>{" "}
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={placeOrder}
                class="btn btn-primary"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

function PlaceOrder({ name, price, no }) {
  const [orderData, setOrderData] = useState({ name, price });

  useEffect(() => {
    setOrderData({
      name,
      price,
      quantity: 1,
      date: new Date().toLocaleDateString(),
      status: "pending",
    });
  }, []);

  const handleChange = (e) => {
    setOrderData({
      name,
      price: price * [e.target.value],
      quantity: e.target.value,
      date: new Date().toLocaleDateString(),
      status: "pending",
    });
  };

  const placeOrder = () => {
    if (CurrentOrderCollection.length === 0) {
      CurrentOrderCollection.push({ ...orderData });
      Historical.push({ ...orderData });
      alert("Order Placed Successfully.");
    } else {
      alert("Order Already Placed!");
    }
  };

  if (CurrentOrderCollection.length !== 0) {
    return;
  }

  return (
    <>
      <div
        class="modal fade"
        id={`exampleModal${no}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <p>Name:{orderData.name}</p>
                <p>Price:{orderData.price}</p>
                <p>Date:{orderData.date}</p>
                <p>
                  select quantity:
                  <select onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>{" "}
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={placeOrder}
                class="btn btn-primary"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
