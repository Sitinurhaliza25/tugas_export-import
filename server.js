import express from "express";
const app = express();

const users = [
  {
    id: 1,
    username: "Sitinurhaliza",
  },
  {
    id: 2,
    username: "Sitinurhaliza2505",
  },
];

// route semua user
app.get("/user", (req, res) => {
  res.send(users);
});

// route user by id
app.get("/user/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server dimulai di port 3000");
});