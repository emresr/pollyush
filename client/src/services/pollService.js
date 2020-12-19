import firebase from "../firebase";

const db = firebase.ref("/polls/");

const getAll = () => {
  return db;
};

const getKey = () => {
  return firebase.ref("/");
};

const key = "-MOffQFTdecvdlzCctQt";

//Pollpage
const getPollTitle = (key) => {
  return db.child(key).child("title");
};

const getPollOptions = (key) => {
  return db.child(key).child("options");
};

const create = (data) => {
  return db.push(data);
};

const createOptions = (key, dataOption) => {
  return db.child(key).child("options").push(dataOption);
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
};
