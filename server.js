import express from 'express'
import fetch from "node-fetch";
import cors from 'cors'
const app = express();

app.use(cors())

app.get('/', async (req, res) => {
  if (req.get('feeling')) {
    req._custom = req.get('feeling')
  }
  const response = await fetch(
    `http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=${req._custom}&limit=500&extraimages=8`
  );
  const body = await response.text();
  res.json(body)
})

app.listen(3001, () => {
  console.log('Listening on port 3001!')
})