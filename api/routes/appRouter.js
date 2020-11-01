const express = require('express');
const router = express.Router();
const pool = require(".././dbconn")

router.get("/todos", async (req,res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/todos/:id", async (req,res) => {
  try {
    const { id } =req.params;
    const todo = await  pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]); 
  } catch (err) {
    console.error(err.message);
  }
})

router.delete("/todos/:id",async (req,res) => {
  try {
    const {id} = req.params;
   const deleteTodo = await  pool.query("DELETE FROM todos WHERE todo_id = $1",[id])
   res.json("Todo deleted!");
   
  } catch (err) {
    console.error(err.message);
  }
})

router.post("/todos", async (req,res) =>{
  try {
    const { title , tag , priority , date } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos ( title , tag , priority , date ) VALUES ( $1, $2, $3, $4) RETURNING *", [ title , tag , priority , date  ] );

     res.json(newTodo.rows[0]);

  } catch (err) {
      console.error(err.message);
  }
});


router.put("/todos/:id", async (req,res)=> {
  try {
    const {id} = req.params;
    const { title , tag , priority , date , done} = req.body;    
    const updateTodo = await pool.query("UPDATE todos SET title = $1,tag= $2,priority= $3,date= $4,done=$5 WHERE todo_id = $6",[ title , tag , priority , date ,done,id ]);
   
    res.json("Todo updated!");

  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;