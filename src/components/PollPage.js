import React, { useState, useEffects } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";
import Header from "./Header";
import useClipboard from "react-use-clipboard";

const Pollpage = () => {
  const url = useParams();
  const history = useHistory();

  const [options, loading] = useListVals(pollService.getPollOptions(url.id));
  // console.log(options);
  const [isCopied, setCopied] = useClipboard(
    "http://popells.herokuapp.com/poll/" + url.id
  );
  const [title] = useListVals(pollService.getPollTitle(url.id));

  const [voted, setVoted] = useState("");

  const votePush = () => {
    console.log(voted.option_id);

    pollService.vote(url.id, voted.option_id, voted.option_score + 1);

    history.push("/result/" + url.id);
  };

  const pollpage = (
    <div>
      <Header />
      <div className="container">
        <div className="row">
        
          {loading && <div class="spinner-border text-danger" />}
          <div className="col-sm-6 mx-auto pollpage-item">
          <h1 className="resultlist-title"> {title[2]} </h1>


            <div className="pollpage-title">
              <form>
                <h2>{}</h2>

                {!loading &&
                  options &&
                  options.map((option, index) => (
                    <div key={option.option_id}>
                      <input
                        className=""
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                        id={option.option_id}
                        onChange={() => setVoted(option)}
                      />


                      <label for={option.option_id} className="title-label">
                        {option.option_title}
                      </label>
                    </div>
                  ))}
              </form>

             </div>
            <div className="col-sm-6">
              <button onClick={votePush} className="btn btn-primary"> Vote </button>
              
              <button onClick={setCopied} className="btn btn-warning">
                {isCopied ? "Copied!" : "Copy Poll Link"}
              </button>


              </div> 
            
          </div>
        </div>
      </div>
    </div>
  );

  return <>{pollpage}</>;
};
export default Pollpage;