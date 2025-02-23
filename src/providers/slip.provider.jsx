import { createContext, useContext, useState } from "react";

const slipDetailsContext = createContext({});

export function SlipProvider({ children }) {
  const [slipDetails, setSlipDetails] = useState(null);
  return (
    <slipDetailsContext.Provider value={{ slipDetails, setSlipDetails }}>
      {children}
    </slipDetailsContext.Provider>
  );
}

export function useSlipDetailsContext() {
     return useContext(slipDetailsContext);
}