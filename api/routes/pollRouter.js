const express = require("express")
const router = express.Router()
const pool = require(".././dbconn")

router.get("/polls", async (req, res) => {
  try {
    const allPolls = await pool.query("SELECT * FROM polls")
    res.json(allPolls.rows)
  } catch (err) {
    console.error(err.message)
  }
})

router.get("/polls/:id", async (req, res) => {
  try {
    const { id } = req.params
    const Poll = await pool.query("SELECT * FROM polls WHERE poll_id = $1", [
      id,
    ])
    res.json(Poll.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

router.delete("/polls/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deletePoll = await pool.query(
      "DELETE FROM polls WHERE poll_id = $1",
      [id]
    )
    res.json("Poll deleted!")
  } catch (err) {
    console.error(err.message)
  }
})

router.post("/polls", async (req, res) => {
  try {
    const { title, option } = req.body
    const newPoll = await pool.query(
      "INSERT INTO polls (title,option) VALUES ( $1,$2) RETURNING *",
      [title, option]
    )

    res.json(newPoll.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

module.exports = router
=======
const express = require('express');
const router = express.Router();
const pool = require(".././dbconn")

router.get("/polls", async (req,res) => {
  try {
    const allPolls = await pool.query("SELECT * FROM polls");
    res.json(allPolls.rows)
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/polls/:id", async (req,res) => {
  try {
    const { id } =req.params;
    const Poll = await  pool.query("SELECT * FROM polls WHERE poll_id = $1", [id]);
    res.json(Poll.rows[0]); 
  } catch (err) {
    console.error(err.message);
  }
})

router.delete("/polls/:id",async (req,res) => {
  try {
    const {id} = req.params;
   const deletePoll = await  pool.query("DELETE FROM polls WHERE poll_id = $1",[id])
   res.json("Poll deleted!");
   
  } catch (err) {
    console.error(err.message);
  }
})

router.post("/polls", async (req,res) =>{
  try {
    const { title , option } = req.body;
    const newPoll = await pool.query(
      "INSERT INTO polls (title,option) VALUES ( $1,$2) RETURNING *", [ title, option] );

     res.json(newPoll.rows[0]);

  } catch (err) {
      console.error(err.message);
  }
});

module.exports = router;

