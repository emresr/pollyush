import firebase from "../firebase";

const db = firebase.ref("/polls");
const path = '/polls'+1

const getAll = () => {
  return db;
};

const getOne = (index) => {
    const path = '/polls'+ index

  return firebase.ref(path);
};

const create = (index,data) => {
  const path = '/polls/'+ index

  return firebase.ref(path).push(data);
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
