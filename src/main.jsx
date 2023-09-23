import React from "react";
import * as ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "@fontsource/poppins";
import "@fontsource-variable/unbounded";

const firebaseConfig = {
  apiKey: "AIzaSyBUpTkKjkE5zJNO7WoBlb8oHX1LpmtBTeQ",
  authDomain: "coderhouse-ae08b.firebaseapp.com",
  projectId: "coderhouse-ae08b",
  storageBucket: "coderhouse-ae08b.appspot.com",
  messagingSenderId: "851143189702",
  appId: "1:851143189702:web:b05459819b6175d6e523c7",
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
