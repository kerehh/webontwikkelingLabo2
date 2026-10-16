import express from "express";

const movies = [
  { id: 1, title: "titanic" },
  { id: 2, title: "tarkov" },
  { id: 3, title: "mechanic" },
];

const app = express();

app.get("/home", (req, res) => {
  console.log("/home has been visited");
  res.send("het werkt");
});

app.get("/movies", (req, res) => {
  console.log("/movies has been visited");
  res.send("het werkt");
});

app.get("/hallo", (req, res) => {
  // console.log(req.query);
  res.send(
    `<h1>hallo ${req.query.naam}</h1>
    <h2>leeftijd: ${req.query.leeftijd}</h2>`,
  );
});

app.get("/naam/:naam", (req, res) => {
  res.send(req.params);
});

app.listen(1234, () => {
  console.log("your server is listening on http://localhost:1234");
});

export {};
