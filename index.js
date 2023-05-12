import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  // if (req.get('feeling')) {
  //   req._custom = req.get('feeling')
  // }
  // const response = fetch("https://dummyjson.com/products/1");
  // console.log(response)
  // res.json(await response.json())
  const response = await fetch("https://dummyjson.com/products/1");
  const body = await response.text();
  res.json(body);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});

// Export the Express API
export default app
