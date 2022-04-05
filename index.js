const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("WOW! I am excited Hello from my second node server");
});

const users = [
  { id: 0, name: "shabana", email: "shabana@gmail.com", phone: "01788888888" },
  { id: 1, name: "shabana", email: "shabana@gmail.com", phone: "01788888888" },
  { id: 2, name: "shabnur", email: "shabnur@gmail.com", phone: "01788888888" },
  {
    id: 3,
    name: "srabonti",
    email: "srabonti@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "sucohrita",
    email: "sucohrita@gmail.com",
    phone: "01788888888",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["Mango", "Oranges", "banana", "jackfruit"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy Tok marka fazli");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
