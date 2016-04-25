
var express = require("express");
var tokenRouter = express.Router();

module.exports = function(app){

  console.log("yipicayea!");

  app.post("/token", function(req, res){

    if(req.body.grant_type == "password"){

      if(req.body.username == "pablo@pernias.com" && req.body.password == "password"){
        res.status(200).json({"access_token": "123abc789xyz"});
      }
      else{
        res.status(400).json({"error": "invalid_credentials"});
      }

    }
    else{
      res.status(400).json({"error": "unsupported_grant_type"});
    }

  })

}
