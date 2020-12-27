import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const Input = () => {
  const history = useHistory();

  const pollsItem = {
    title: "",
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
    updatedOptions[e.target.dataset.idx][e.target.name] = e.target.value;
    setOptionState(updatedOptions);
  };

  const handleRemove = (id) => {
    const beforeRemove = [...optionState];
    beforeRemove.splice(id, 1);

    setOptionState(beforeRemove);
  };

  // push new one
  const [len] = useListVals(pollService.getAll());

  len.reverse();
  const save = () => {
    const addID = [...optionState];
    for (var i = 0; i < addID.length; i++) {
      addID[i]["option_id"] = i;
      setOptionState(addID);
    }

    var data = {
      id: len.length + 1,
      title: polls.title,
      options: optionState,
    };
    pollService.create(data);

     var key = pollService.create(data).toString();
   history.push('/poll/'+ key.substring(69, 100));
  
   }; 

  return (
    <div class="col-sm input">
     <h1 className="form-title">Create new poll</h1>
      <form className="form-input">
        <fieldset>

          <div class="form-group">
            <label for="title" className="col-lg-2">
              Title
            </label>
            <div class="col-lg-10">
              <input
                className="form-control"
                size="50"
                type="text"
                value={polls.title}
                name="title"
                onChange={handleInput}
                placeholder=""
                required
              />
            </div>
          </div>

          {optionState.map((val, idx) => {
            const optionId = `option_title-${idx}`;
            return (
              <div className="form-group">
                <div key={`option-${idx}`}>
                  <label
                    class="col-lg-3"
                    htmlFor={optionId}
                    for={optionId}
                  >{`Option #${idx + 1}`}</label>
                                      <input
                      className="btn-danger"
                      type="button"
                      value="Remove"
                      onClick={handleRemove}
                    />
                  <div class="col-lg-10 ">
                    <input
                      type="text"
                      name="option_title"
                      data-idx={idx}
                      id={optionId}
                      className="form-control"
                      value={optionState[idx].option_title}
                      onChange={handleOptionChange}
                    />
                    


                  </div>
                </div>
              </div>
            );
          })}

          <input
            onClick={save}
            type="button"
            className="btn-success"
            value="Create!"
          />
          <input
            type="button"
            className="btn-primary"
            value="Add Option"
            onClick={addOption}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Input;
