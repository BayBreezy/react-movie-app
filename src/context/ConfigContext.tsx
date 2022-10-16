import { createContext, useContext, useEffect, useState } from "react";
import { getConfiguration } from "../api/movies";
import { IPosterBackdrop } from "../types";

const ConfigContext = createContext<IPosterBackdrop | undefined>({} as IPosterBackdrop);

export const ConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState<IPosterBackdrop>();
  useEffect(() => {
    getConfiguration().then((c) => setConfig(c));
  }, []);

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export default ConfigContext;

export const useConfigContext = () => useContext(ConfigContext);
