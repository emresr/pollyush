import firebase from "../firebase";

const db = firebase.ref("/polls/");

const getAll = () => {
  return db;
};

const getLatest = () => {
  return db.orderByChild("key").limitToLast(5);
};


//list
const getWinnerOption = (key) => {
  return db.child(key).child("options").orderByChild("option_score").limitToFirst(1);
};

// Input

const create = (data) => {
  return db.push(data);
};

const createOptions = (key, dataOption) => {
  return db.child(key).child("options").push(dataOption);
};

//Pollpage
const getPollTitle = (key) => {
  return db.child(key).child("title");
};

const getPollOptions = (key) => {
  return db.child(key).child("options");
};

const getPollScores = (key) => {
  return db.child(key).child("scores");
};

//Pollpage voting
const getlastScore = (key) => {
  return db.child(key).child("options").child("option1").child("option_score");
};

const vote = (key, voteid, newScore) => {
  return db
    .child(key)
    .child("options")
    .child(voteid)
    .update({ option_score: newScore });
};

//Result

const getPollResult = (key) => {
  return db.child(key).child("options").orderByChild("option_score");
};

////
const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

const removeAll = () => {
  return db.remove();
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getPollOptions,
  getPollTitle,
  getPollScores,
  vote,
  getlastScore,
  getWinnerOption,
  getPollResult,
  getLatest
};
