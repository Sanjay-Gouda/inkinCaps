import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OfferContextWrapper from "./context/offerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OfferContextWrapper>
      <App />
    </OfferContextWrapper>
  </React.StrictMode>
);
