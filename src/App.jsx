import React, { Suspense, lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const FormComponent = lazy(() => import("./components/FormComponent"));
const Numbers = lazy(() => import("./components/Numbers"));

function App() {
  return (
    <div>
      <nav className="flex gap-5 mx-auto justify-center ">
        <NavLink className="hover:bg-gray-300 rounded-md p-2" to="/">
          Home
        </NavLink>
        <NavLink className="hover:bg-gray-300 rounded-md p-2" to="/about">
          About
        </NavLink>
        <NavLink className="hover:bg-gray-300 rounded-md p-2" to="/contact">
          Contact
        </NavLink>
        <NavLink className="hover:bg-gray-300 rounded-md p-2" to="/numbers">
          Evene Numbers
        </NavLink>
      </nav>
      <Suspense fallback={<FadeLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<FormComponent />} />
          <Route path="/even-numbers" element={<Numbers />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
