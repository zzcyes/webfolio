import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import configJson from "@config/config.json";
import { normalizeCssSize } from "@/common/utils";

interface Layout {
  sidebar: {
    width: number | string;
  };
  mainContent: {
    padding: number | string;
  };
  contentSection: {
    padding: number | string;
  };
  navbar: {
    height: number | string;
    padding: number | string;
  };
}

interface Config {
  mediaQuery: {
    mobile: number;
    web: number;
  };
  layout?: Layout;
  "layout.web": Layout;
  "layout.mobile": Layout;
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
): [
  Required<Pick<Config, "layout">> & Config,
  React.Dispatch<React.SetStateAction<Config>>
] => {
  const [config, setConfig] = useState<Config>(
    defaultConfig ? defaultConfig : template
  );

  const isMobile = useMediaQuery({
    query: `(max-width: ${normalizeCssSize(config.mediaQuery.mobile)})`,
  });

  const returnLayout = isMobile
    ? config["layout.mobile"]
    : config["layout.web"];

  return [
    {
      mediaQuery: config.mediaQuery,
      layout: returnLayout,
      navbar: config.navbar,
      sidebar: config.sidebar,
    } as Required<Pick<Config, "layout">> & Config,
    setConfig,
  ];
};

export default useConfig;
