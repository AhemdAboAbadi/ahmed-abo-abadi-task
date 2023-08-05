import React from "react";
import { ConfigProvider } from "antd";
import { CalculationProvider } from "./context/Calculation";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalculationProvider>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        {children}
      </ConfigProvider>
    </CalculationProvider>
  );
};
