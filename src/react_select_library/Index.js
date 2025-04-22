import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const customStyle = {
  control: (provided) => ({
    ...provided,
    width: "400px",
    borderRadius: "8px",
    boxShadow: "none",
    textAlign: "left",
  }),
};

function Index() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // API call
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const formatted = response.data.map((item) => ({
          id: item.id,
          label: item.name,
          // label: item.username,
          // label: item.email,
        }));
        setOptions(formatted);
      })
      .catch((error) => console.log("Error fetching options:", error));
  }, []);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    console.log("Selected:", selected);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>React-Select</h1>
        <Select
          styles={customStyle}
          onChange={handleChange}
          options={options}
          value={selectedOption}
          placeholder="select"
        />
        {JSON.stringify(options)}
      </div>
    </>
  );
}

export default Index;
