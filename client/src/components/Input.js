import React, { useState } from "react";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const Input = () => {
  const pollsItem = {
    title: "",
    option: [],
  };

  const [polls, setPolls] = useState(pollsItem);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPolls({ ...polls, [name]: value });
  };

  const [len] = useListVals(pollService.getAll());

  const save = () => {
    var data = {
      id: len.length + 1,
      title: polls.title,
      option: polls.option,
    };
    pollService.create(data);

    var dataOption = {
      option: polls.option,
    };
    const key = "-MOffQFTdecvdlzCctQt";
    pollService.createOptions(key, dataOption);

    console.log(pollService.create(data).toString());
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

        <button onClick={save}>Mf</button>
      </form>
    </div>
  );
};

export default Input;
