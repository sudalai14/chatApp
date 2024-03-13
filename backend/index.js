const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r= await axios.put(
        'https://api.chatengine.io/users/',
        {username: username , secret: username, first_name:username},
        {headers: {"private-key":"c40dd8b6-323c-4286-9674-02d5946e528d"}}
    )
    return res.status(r.status).json(r.data)
  }
  catch (e){
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);