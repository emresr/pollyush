import firebase from "../firebase";

const db = firebase.ref("/polls/");

const getAll = () => {
  return db;
};

const getOne = () => {
  const key = "-MOmLgm9Ceky4DqUl2bj"
  return db.child(key);
};

const create = (data) => {
  return db.push(data);
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
  getOne,
  create,
  update,
  remove,
  removeAll,
};
