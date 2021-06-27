const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  console.log(req.body.cal);

  switch (req.body.cal) {
    case "sum":
      var result = num1 + num2;
      res.send("The result is " + result);
      break;
    case "sub":
      var result = num1 - num2;
      res.send("The result is " + result);
      break;
    case "div":
      var result = num1 / num2;
      res.send("The result is " + result);
      break;
    case "mul":
      var result = num1 * num2;
      res.send("The result is " + result);
      break;

    default:
      res.send("default");
  }
});
app.listen(3000, function () {
  console.log("Port 3000 started");
});
