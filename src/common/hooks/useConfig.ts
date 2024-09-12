import { useState } from "react";
import configJson from "@config/config.json";

interface Config {
  layout: {
    sidebar: {
      width: number | string;
    };
    mainContent: {
      padding: number | string;
    };
  };
  navbar: { name: string; href: string }[];
  sidebar: {
    title: string;
  };
}

const template: Config = {
  ...configJson,
};

const useConfig = (
  defaultConfig?: Config
): [Config, React.Dispatch<React.SetStateAction<Config>>] => {
  const [config, setConfig] = useState<Config>(
    defaultConfig ? defaultConfig : template
  );

  // const update = (newConfig: Config) => {
  //   setConfig((prevConfig) =>
  //     prevConfig ? { ...prevConfig, ...newConfig } : (newConfig as Config)
  //   );
  // };

  return [
    {
      layout: config.layout,
      navbar: config.navbar,
      sidebar: config.sidebar,
    } as Config,
    setConfig,
  ];
};

export default useConfig;
