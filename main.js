const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.get("/*", (req, res) => {
  var ip =
    (typeof req.headers["x-forwarded-for"] === "string" &&
      req.headers["x-forwarded-for"].split(",").shift()) ||
    req.socket.remoteAddress;

    console.log(`Request received from IP: ${ip}`);
  res.set("Content-Type", "text/plain");
  res.send(`${ip}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});