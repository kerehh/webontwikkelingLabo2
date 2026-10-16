import express from "express";

const thisisme = {
  name: "kerem",
  age: 20,
  profilepic: "/ik.jpg",
};

const app = express();
app.set("port", 3000);

app.get("/", (req, res) => {
  res.send(`<head>Escape From Tarkov</head>
        <body>shitty ass game</body>`);
});

app.get("/whoami", (req, res) => {
  res.send(`my name is ${thisisme.name} an i am ${thisisme.age}`);
});
app.listen(app.get("port"), () => {
  console.log("your server is listening on port 3000");
});
