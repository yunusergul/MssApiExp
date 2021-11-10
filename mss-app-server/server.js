const express = require("express");
const NodeCache = require("node-cache");
const axios = require("axios");
const url='https://www.omdbapi.com/?';
const api_key='*****';
const app = express();

const cache = new NodeCache({ stdTTL: 30 });

const verifyCache = (req, res, next) => {
  try {
    const { id } = req.params;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
    return next();
  } catch (err) {
    throw new Error(err);
  }
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to mss api" });
});

app.get("/api/clear", (req, res) => {
    try{
        console.log(cache.del(cache.keys()));
        res.json({ message: "Clear all cache" });
        res.end();
    }catch ({ response }) {
        return res.sendStatus(response.status);
      }
  });

app.get("/api/search", verifyCache, async (req, res) => {
  try {    
    const searcIn=req.query.keyword;
    var combinedData;
    var combinedData2;
    axios.all([
      axios.get(`${url}apikey=${api_key}&s=${searcIn}&page=1`),
      axios.get(`${url}apikey=${api_key}&s=${searcIn}&page=2`),
    ]).then(axios.spread((response1, response2) => {
        if (response1.data.Response ==="True"){
            combinedData= response1.data.Search.concat(response2.data.Search);
            combinedData2=('"Search":',combinedData);
            //console.log(combinedData);
            cache.set(searcIn, combinedData);
            res.status(200).json(combinedData)
        }else{
            return res.json({ message: "No movies" });
        }
        
    })).catch(error => {
        console.log(error);
    });
    
    
   // return res.status(200).json(combinedData);
    
  } catch ({ response }) {
    return res.sendStatus(response.status);
  }
});

const start = (port) => {
  try {
    app.listen(port);
    console.log('Server started at https://localhost:' + port);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
start(80);
