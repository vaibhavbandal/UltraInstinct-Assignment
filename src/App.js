import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CurrentOrder from "./Pages/CurrentOrder";
import HistoricalOrder from "./Pages/HistoricalOrder";
import Orderpage from "./Pages/Orderpage";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center p-3 bg-dark text-white">
          UltraInstinct Assignment
        </h3>
    </div>
    <div className="container">
        <nav className="bg-dark d-flex text-white justify-content-center  ">
          <li className="list-unstyled p-2 ">  <Link className="text-white text-decoration-none " to={'/'} >Orderpage</Link> </li>
          <li className="list-unstyled p-2 ">  <Link className="text-white text-decoration-none " to={'/current-order'} >CurrentOrder</Link> </li>
          <li className="list-unstyled p-2 ">  <Link className="text-white text-decoration-none " to={'/historical-order'} >HistoricalOrder</Link> </li>
        </nav>

        <Routes>
          <Route path="/" element={<Orderpage />}></Route>
          <Route path="/current-order" element={<CurrentOrder />}></Route>
          <Route path="/historical-order" element={<HistoricalOrder />}></Route>
        </Routes>
      </div>
    </>
  );
}
