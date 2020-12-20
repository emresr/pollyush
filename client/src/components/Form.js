import React, { useState } from "react";
const Form = () => {
  const [ownerState, setOwnerState] = useState({
    owner: "",
    description: "",
  });
  const handleOwnerChange = (e) =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value],
    });

  const blankCat = { name: "", age: "" };
  const [catState, setCatState] = useState([{ ...blankCat }]);

  const addCat = () => {
    setCatState([...catState, { ...blankCat }]);
  };

  const handleCatChange = (e) => {
    const updatedCats = [...catState];
    updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
    setCatState(updatedCats);
  };

  const pushConsole = () => {
    console.log(ownerState);
  };

  return (
    <form>
      <label htmlFor="owner">Owner</label>
      <input
        type="text"
        name="owner"
        id="owner"
        value={ownerState.owner}
        onChange={handleOwnerChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={ownerState.owner}
        onChange={handleOwnerChange}
      />

      <input type="button" value="Add New Cat" onClick={addCat} />
      {catState.map((val, idx) => {
        const catId = `name-${idx}`;
        const ageId = `age-${idx}`;
        return (
          <div key={`cat-${idx}`}>
            <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
            <input
              type="text"
              name={catId}
              data-idx={idx}
              id={catId}
              className="name"
              value={catState[idx].name}
              onChange={handleCatChange}
            />
            <label htmlFor={ageId}>Age</label>
            <input
              type="text"
              name={ageId}
              data-idx={idx}
              id={ageId}
              className="age"
              value={catState[idx].age}
              onChange={handleCatChange}
            />
          </div>
        );
      })}
      <input type="submit" value="Submit" onClick={pushConsole} />
    </form>
  );
};
export default Form;
