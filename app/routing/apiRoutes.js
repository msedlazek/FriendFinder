var friendsData = require("../data/friends.js");

module.exports = function(app){

	// Routing to api/friends???
  app.get("/api/friends", function(req, res){
    res.json(friendData);
  });

  app.post("/api/friends", function(req,res){
    friendData.push(req.body);
    res.json(friendData);
  });
}