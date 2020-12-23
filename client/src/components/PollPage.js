import React, { useState, useEffects } from "react";

import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams , useHistory  } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";
import Header from "./Header";
import useClipboard from "react-use-clipboard";



const Pollpage = () => {
  const url = useParams();
  const history = useHistory();


  const [options, loading] = useListVals(pollService.getPollOptions(url.id));
  // console.log(options);
  const [isCopied, setCopied] = useClipboard('http://localhost:3000/poll/'+url.id);

  const [voted, setVoted] = useState("");

  const votePush = () => {
    console.log(voted.option_id);

    pollService.vote(url.id, voted.option_id, voted.option_score + 1);
    
    history.push('/result/'+ url.id)
  };

  const pollpage = (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="ol-sm-6 mx-auto pollpage-item">
            <div className="pollpage-title">
              <h2>{}</h2>
              
                  {loading && <div class="spinner-border text-danger"/>}
      {!loading &&
              options &&
                options.map((option, index) => (
                  <div key={option.option_id}>
                    <input
                      className=""
                      type="checkbox"
                      id={option.option_id}
                      onChange={() => setVoted(option)}
                    />
                    <label for={option.option_id} class="">{option.option_title}</label>
                  </div>


                ))}

                  <div className="boxes">
  <input type="checkbox" id="box-1"/>
  <label for="box-1">option</label>
                 </div>

              <button onClick={votePush}> Vote </button>

              <Link className="btn result-button" to={`/result/${url.id}`}>
                Result
              </Link>
<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Answer my pollooo" data-url="http://localhost:3000/poll/-MP5TVNcnDQ5HmRDQreN" data-lang="en" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>                  <button onClick={setCopied}>
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
