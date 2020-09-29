const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const cors = require("cors");
const mongojs = require("mongojs");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/backlogdb",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//API routes here
app.get("/api", cors(), (req, res) => {
  db.Media.find({})
    .then(dbMedia => {
      res.json(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/submit/:id/:status", cors(), (req, res) => {
  db.Media.update({
    _id: mongojs.ObjectId(req.params.id)
  }, {
    $set: {
      status: req.params.status,
    }
  }).then(dbMedia => {
    res.send(dbMedia);
  })
  .catch(err => {
    res.json(err);
  });
});

app.put("/api/comment/:id/:comment", cors(), (req, res) => {
  console.log("req.params: " + JSON.stringify(req.params));
  db.Media.update({
    _id: mongojs.ObjectId(req.params.id)
  }, {
    $set: {
      comment: req.params.comment 
    }
  }).then(dbMedia => {
    res.send(dbMedia);
  })
  .catch(err => {
    res.json(err);
  });
});

app.post("/api/submit", cors(), (req, res) => {
  db.Media.create({
    title: req.body.params.title,
    status: req.body.params.status,
    type: req.body.params.type,
    date: req.body.params.date
  })
    .then(dbMedia => {
      res.send(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

app.delete("/api/submit/:id", cors(), (req, res) => {
  console.log(req.params.id);
  db.Media.remove({
     _id: mongojs.ObjectId(req.params.id)
   })
    .then(dbMedia => {
      res.send(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs

//Temporarily commented out pending a proper build!
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/

//Test page for API debugging
app.get("/apitest", (req, res) => {
  res.sendFile(path.join(__dirname, "./testing/testapi.html"));
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


