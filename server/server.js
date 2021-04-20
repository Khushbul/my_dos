const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("list of all task");
});

app.post("/addTask", (req, res) => {
  const add_Query =
    "INSERT INTO `todo_list`.`tasks` (`task`) VALUES ('${req.body.task}');";
  connection.query(add_Query, (err) => {
    if (err) console.log(err);
    else res.send("task has been added");
  });
  console.log(req.body);
  res.send("you can add task");
});

app.get("/deleteTask", (req, res) => {
  res.send("you can delete task");
});

app.get("/updateTask", (req, res) => {
  res.send("you can update task");
});

app.listen(4000, () => {
  console.log("running on port 4000");
});
