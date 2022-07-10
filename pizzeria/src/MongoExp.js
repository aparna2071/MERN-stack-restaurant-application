const express = require("express");

const app = express();



// var express = require("express");

var server = express();

const bodyParser = require("body-parser");

server.use(bodyParser.json());

var mongodb = require("mongodb");

var mongoclient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/";

var cors = require("cors");

server.use(cors);

server.use(express.urlencoded({ extended: false }));



//fetch all data



server.get("/getOrder", (req, res) => {

    console.log(req.method);



    mongoclient.connect(url, (error, response) => {

        if (error) {

            console.log("Error while Connecting");

        } else {

            console.log("Connected to Mongo Server");

            var database = response.db("training");

            database

                .collection("Pizza")

                .find({})

                .toArray((err, data) => {

                    if (err) {

                        console.log("Error in fetching the Data");

                    } else {

                        console.log(data);

                        res.send(data);

                    }

                });

        }

    });

});

server.listen(7000, () => {

    console.log("SERVER STARTED");

});