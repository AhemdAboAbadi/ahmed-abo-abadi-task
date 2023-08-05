import { createContext, useState } from "react";

export interface IResults {
  result: number;
  selectedOption: {
    label: string;
    value: string;
    __isNew__: boolean;
  }[];
}

type CalculationContextType = {
  results: IResults[];
  setResults: (result: any) => void;
};

interface Props {
  children: React.ReactNode;
}

export const CalculationContext = createContext<CalculationContextType>({
  results: [],
  setResults: () => {},
});

export const CalculationProvider: React.FC<Props> = ({ children }) => {
  const [results, setResults] = useState<IResults[]>([]);

  const value: CalculationContextType = {
    results,
    setResults,
  };

  return (
    <CalculationContext.Provider value={value}>
      {children}
    </CalculationContext.Provider>
  );
};
