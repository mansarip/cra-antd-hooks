import React, { useContext } from "react";
import { GlobalStore } from "../Main";

export default function AppDesktop() {
  const g = useContext(GlobalStore);

  return (
    <>
      <input type="text" value={g.appTitle} onChange={e => g.setAppTitle(e.target.value)} />
    </>
  );
}
