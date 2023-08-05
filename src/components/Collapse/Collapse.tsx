import { InfoCircleOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse as AntdCollapse } from "antd";
import "./style.css";
import { CalculationContext } from "../../context/Calculation";
import { useContext, useMemo, useState } from "react";

export const Collapse = () => {
  const { results } = useContext(CalculationContext);
  const [activeKey, setActiveKey] = useState<string | string[]>("");
  const onChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  const genExtra = () => {
    const onClickInfo = () => {};
    return (
      <div className="left-menu-container">
        <InfoCircleOutlined onClick={onClickInfo} />
        <p className="three-dots">...</p>
      </div>
    );
  };

  const items: CollapseProps["items"] = useMemo(() => {
    return results.map((result, index) => {
      const expression = result.selectedOption
        .map((option: any) => option.label)
        .join(" ");
      return {
        key: index.toString(),
        label: expression,
        children: <div>${result.result}</div>,
        extra: genExtra(),
      };
    });
  }, [results]);

  return (
    <AntdCollapse // Use the AntdCollapse component instead of the custom one
      defaultActiveKey={["1"]}
      onChange={onChange}
      items={items}
      className="antd-collapse"
      activeKey={activeKey}
    />
  );
};
