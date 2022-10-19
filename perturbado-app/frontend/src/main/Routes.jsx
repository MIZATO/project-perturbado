import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import ProductCrud from "../components/product/ProductCrud";
import BoxClosingCrud from "../components/boxClosing/BoxClosingCrud";

export default props => 
     <Routes>
        <Route exact path="/inicio" element={<Home />} />
        <Route path="/products" element={<ProductCrud />} />
        <Route path="/fechamento" element={<BoxClosingCrud />} />
        <Route path="*" element={<Home />} />
     </Routes>