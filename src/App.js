import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ReactTable from "./component/ReactTable";
// import AutoComplete from "./component/AutoComplete";
// import GridSystem from "./component/GridSystem";
// import ImagesSelecter from "./components/ImagesSelecter";
// import ImageSelect from "./components/ImageSelect";
// import Login from "./Login";
// import UseReducer from "./ImportantReactHooks/UseReducer";
// import ColorPicker from "./ImportantReactHooks/ColorPicker";
// import AlertBtnWebPage from "./alertBtnOnLocalHost/AlertBtnWebPage";
// import UseRef from "./ImportantReactHooks/UseRef";

import Home from "./RstourantWebsite/pages/Home"
import About from "./RstourantWebsite/pages/About"
import Contact from "./RstourantWebsite/pages/Contact"
import Menu from "./RstourantWebsite/pages/Menu"
import Pagenotfound from "./RstourantWebsite/pages/Pagenotfound"

function App() {
  return (
    <>
      <div className="container">
        {/* <Login /> */}
        {/* <AlertBtnWebPage/> */}
        {/* <UseRef/> */}
        {/* <UseReducer/> */}
        {/* <ColorPicker/> */}
        {/* <ImageSelect/> */}
        {/* <ImagesSelecter/> */}
        {/* <GridSystem/> */}
        {/* <AutoComplete/> */}
        {/* <ReactTable/> */}
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
