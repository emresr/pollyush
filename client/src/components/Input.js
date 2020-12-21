import React, { useState } from "react";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const Input = () => {
  const pollsItem = {
    title: "",
    options: "",
  };
  //input statics
  const [polls, setPolls] = useState(pollsItem);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPolls({ ...polls, [name]: value });
  };

  //options dynamic
  const blankOption = { option_id: "", option_title: "", option_score: 0 };
  const [optionState, setOptionState] = useState([{ ...blankOption }]);

  const addOption = () => {
    setOptionState([...optionState, { ...blankOption }]);
  };

  const handleOptionChange = (e) => {
    const updatedOptions = [...optionState];
    updatedOptions[e.target.dataset.idx][e.target.className] = e.target.value;
    setOptionState(updatedOptions);
    console.log(updatedOptions);
  };

  const pushConsole = () => {
    console.log(optionState);
  };

  const handleRemove = (id) => {
    const beforeRemove = [...optionState];
    beforeRemove.splice(id, 1);
    console.log(beforeRemove);

    setOptionState(beforeRemove);
  };

  const addid = () => {
    const addID = [...optionState];
    console.log(addID);
    for (var i = 0; i < addID.length; i++) {
      addID[i]["option_id"] = i;
      console.log(addID[i]);
    }
  };

  // push new one
  const [len] = useListVals(pollService.getAll());

  const save = () => {
    const addID = [...optionState];
    console.log(addID);
    for (var i = 0; i < addID.length; i++) {
      addID[i]["option_id"] = i;
      setOptionState(addID);
    }

    var data = {
      id: len.length + 1,
      title: polls.title,
      option: "polls.option",
      options: optionState,
    };
    pollService.create(data);
    //  history.push('/thank-you')  https://gist.github.com/elitan/5e4cab413dc201e0598ee05287ee4338
  };

  return (
    <div class="col-sm input">
      <form className="poll-form ">
        <input
          className="form-control"
          size="50"
          type="text"
          value={polls.title}
          name="title"
          onChange={handleInput}
          placeholder="Title"
        />
        <input
          className="form-control"
          type="text"
          value={polls.option}
          name="option"
          onChange={handleInput}
          placeholder="Option"
        />

        <input type="button" value="Add New Option" onClick={addOption} />
        {optionState.map((val, idx) => {
          const optionId = `option_title-${idx}`;
          return (
            <div key={`option-${idx}`}>
              <label htmlFor={optionId}>{`Option #${idx + 1}`}</label>
              <input
                type="text"
                name={optionId}
                data-idx={idx}
                id={optionId}
                className="option_title"
                value={optionState[idx].option_title}
                onChange={handleOptionChange}
              />
              <input
                className="btn-danger"
                type="button"
                value="Remove"
                onClick={handleRemove}
              />
            </div>
          );
        })}

        <input type="button" value="Submit" onClick={pushConsole} />
        <input type="button" value="ID" onClick={addid} />

        <input
          onClick={save}
          type="button"
          className="btn-success"
          value="Push"
        />
      </form>
    </div>
  );
};

export default Input;
