import React, { useState } from "react";
import Responsive from "react-responsive";
import AppDesktop from "./desktop";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export const GlobalStore = React.createContext();

export default function Main() {
  // global state declarations
  // hanya guna ini jika rasanya state tersebut perlu dikongsi ke tempat lain
  const [appTitle, setAppTitle] = useState("Sample App");
  const [appAuthor, setAppAuthor] = useState("mansarip");

  // untuk jadikan state dari Main ini global
  // kita perlu pass ke context provider, tapi kita letak dalam satu object
  const store = {
    appTitle,
    appAuthor,
    setAppTitle,
    setAppAuthor
  };

  return (
    <GlobalStore.Provider value={store}>
      <Desktop>
        <AppDesktop />
      </Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
    </GlobalStore.Provider>
  );
}
