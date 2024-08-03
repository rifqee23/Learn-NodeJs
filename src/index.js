const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ini rute utama atau root");
});

app.get("/halaman-website", function (req, res) {
  res.send("Ini halaman website dengan http methode " + req.method);
});

app.post("/halaman-website", function (req, res) {
  res.send("Ini halaman website dengan http methode " + req.method);
});

app.put("/halaman-website", function (req, res) {
  res.send("Ini halaman website dengan http methode " + req.method);
});

app.patch("/halaman-website", function (req, res) {
  res.send("Ini halaman website dengan http methode " + req.method);
});

app.delete("/halaman-website", function (req, res) {
  res.send("Ini halaman website dengan http methode " + req.method);
});

app.listen(5000, function () {
  console.log(`Server running on http://localhost:${5000}/`);
});

module.exports = app;
