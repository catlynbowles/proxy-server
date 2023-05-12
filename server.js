import express from "express";
import fetch from "node-fetch";
// import axios from "axios";
import cors from "cors";
const app = express();

app.use(cors({ origin: "*" }));

// app.get(":endpoint([\\/\\w\\.-]*)", function (req, res) {
//   let endpoint =
//     "http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence&limit=50" +
//     req.params.endpoint;
//   fetch(endpoint).then(response => {
//     console.log(response)
//     res.json(response.data)
//   }).catch(error => {
//     res.json(error)
//   })
// });

app.get("/", async (req, res) => {
  // if (req.get('feeling')) {
  //   req._custom = req.get('feeling')
  // }
  // const response = fetch("https://dummyjson.com/products/1");
  // console.log(response)
  // res.json(await response.json())
  // `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${res.params.feeling}&limit=50`
  const response = await fetch(
    "http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=sad&limit=50"
  );
  const body = await response.text();
  res.json(body);
});

app.listen(3001, () => {
  console.log("Listening on port 3001!");
});

// Export the Express API
export default app;
