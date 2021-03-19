import firebase from "../firebase";

const db = firebase.ref("/polls/");

const getAll = () => {
  return db;
};

const getLatest = () => {
  return db.orderByChild("key").limitToLast(7);
};

//list
const getWinnerOption = (key) => {
  return db.child(key).child("options").orderByChild("option_score").limitToLast(1);
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
  return db.child(key);
};

const getPollOptions = (key) => {
  return db.child(key).child("options");
};


//Pollpage voting
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
  vote,
  getWinnerOption,
  getPollResult,
  getLatest,
};
