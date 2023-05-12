import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

app.use(
  cors()
);

app.options("/", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});

app.get('/', async (req, res) => {
  // if (req.get('feeling')) {
  //   req._custom = req.get('feeling')
  // }
  // const response = fetch("https://dummyjson.com/products/1");
  // console.log(response)
  // res.json(await response.json())
  console.log('hi')
  const response = await fetch("https://dummyjson.com/products/1");
  const body = await response.text();
  res.json(body);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});

// Export the Express API
module.exports = app;
