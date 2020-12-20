import firebase from "../firebase";

const db = firebase.ref("/polls/");

const getAll = () => {
  return db;
};

const getKey = () => {
  return firebase.ref("/");
}; // ?

//list
const getWinnerOption = (key) => {
  return db.child(key).child("options");
};

////optionları tek satırda scoreları tek satırda tut?

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
const voteg = (key, voteid, newScore) => {
  //db.child(key).child("options").child("option1").child("option_score")

  return db
    .child(key)
    .child("options")
    .child("option" + voteid)
    .update({ option_score: newScore });
};

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
  voteg,
  getlastScore,
};
