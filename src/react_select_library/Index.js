import React from "react";
import Select from "react-select";

function Index() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>React-Select</h1>
        <Select options={options} />
      </div>
    </>
  );
}

export default Index;
