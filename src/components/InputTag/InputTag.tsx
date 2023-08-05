import { useState } from "react";
import { ActionMeta } from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import * as math from "mathjs";
import "./style.css";
import { CalculationContext, IResults } from "../../context/Calculation";
import { useContext } from "react";

const options: any = [
  { value: "chocolate", label: "USD" },
  { value: "strawberry", label: "shake" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();

export const InputTag = () => {
  const { setResults, results } = useContext(CalculationContext);
  const [selectedOption, setSelectedOption] = useState<
    IResults["selectedOption"]
  >([]);

  const handleChange = (selectedOption: any, actionMeta: ActionMeta<any>) => {
    setSelectedOption(selectedOption);
  };

  const handleCalculateClick = () => {
    if (selectedOption) {
      const expression = selectedOption.map((option) => option.label).join(" ");
      try {
        const result = math.evaluate(expression);
        setResults([...results, { result, selectedOption }]);
        setSelectedOption([]);
      } catch (e) {
        console.log("Invalid expression: ", expression);
      }
    }
  };

  return (
    <div className="container_select">
      <CreatableSelect
        className="select_tag"
        closeMenuOnSelect={false}
        components={{ ...animatedComponents }}
        isMulti
        options={options}
        onChange={handleChange}
      />
      <button className="calc_btn" onClick={handleCalculateClick}>
        Calculate
      </button>
    </div>
  );
};
