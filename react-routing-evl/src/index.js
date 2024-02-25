import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";


root.render(
  <StrictMode>
  <BrowserRouter>
 <AuthContextProvider>
 <App/>
 </AuthContextProvider>
   

  </BrowserRouter>

</StrictMode>
);
