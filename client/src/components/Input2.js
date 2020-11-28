import React, { useState } from "react";

function Input2() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="firstName"
              value={x.firstName}
            />
            
            <div className="btn-box">
              {inputList.length !== 1 && <button className="mr10">Remove</button>}
              {inputList.length - 1 === i && <button>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

export default Input2;