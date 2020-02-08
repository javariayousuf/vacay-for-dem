import React from "react";
import { Footer, Header } from "./";

export default ({ children }) => (
  <div className="narrowPanel">
    <Header />
    {children}
    <Footer />
  </div>
);

// <div
// className="col-2 mx-auto mt-5"
// style={{ borderTop: "2px solid black" }}
// />
