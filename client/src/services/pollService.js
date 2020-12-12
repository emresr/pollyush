import firebase from "../firebase";

const db = firebase.ref("/polls");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};


export default {
  getAll,
  create,
  update,

};
