var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

// find all restaurants if user types 'all'
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });

// find specific restaurant a user types
// mongo.connect(url, function(err, db){
// 	var collection = db.collection('restaurants');
// 	var oneChoice = prompt("Type a restaurant name to view info about it");
// 	collection.find().toArray(function(err, doc){
// 		for(i=0; i<doc.length; i++){
// 			if (doc[i].name == oneChoice){
// 				console.log(doc[i]);
// 		} 
// 	}
// 	});
// });

// user creates restaurant
mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var name = prompt("Type the name of the restaurant, fool");
	var address = prompt("Type the address too");
	var yelp = prompt("Get the yelp url and paste it");
	collection.insert({"name":name,"address":address,"yelp":yelp});
	collection.find().toArray(function(err, doc){
		console.log(doc);
	});
});
