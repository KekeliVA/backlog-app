const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/backlogdb", { useNewUrlParser: true, useUnifiedTopology: true } 
);

/* DEFAULT/VARIETY dataset - contains at least two of each possible combination of type and status.
This is intended to be a large dataset, useful for testing both load and basic style and site 
functions. Consider it a representative default dataset. */

const mediaSeed = [
  {
    title: "Moby Dick",
    type: "book",
    status: "Not Started",
    date: new Date(Date.now())
  }, 
  {
    title: "Adventures of Huckleberry Finn",
    type: "book",
    status: "In Progress",
    date: new Date(Date.now())
  }, 
  {
    title: "Catcher in the Rye",
    type: "book",
    status: "Finished",
    date: new Date(Date.now())
  }, 
  {
    title: "Eloquent Javascript",
    type: "book",
    status: "Unowned",
    date: new Date(Date.now())
  }, 
  {
    title: "Team of Rivals",
    type: "book",
    status: "Not Started",
    date: new Date(Date.now())
  }, 
  {
    title: "The Great Deluge",
    type: "book",
    status: "In Progress",
    date: new Date(Date.now())
  }, 
  {
    title: "Parasyte",
    type: "book",
    status: "Finished",
    date: new Date(Date.now())
  }, 
  {
    title: "Jane Slayre",
    type: "book",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "No Drum and Bass in the Jazz Room - Clever Girl",
    type: "album",
    status: "Not Started",
    date: new Date(Date.now())
  }, 
  {
    title: "Hill Climber - Vulfpeck",
    type: "album",
    status: "Not Started",
    date: new Date(Date.now())
  }, 
  {
    title: "Bon Iver - Bon Iver",
    type: "album",
    status: "In Progress",
    date: new Date(Date.now())
  }, 
  {
    title: "Room on Fire - The Strokes",
    type: "album",
    status: "In Progress",
    date: new Date(Date.now())
  }, 
  {
    title: "Evil Empire - Rage Against the Machine",
    type: "album",
    status: "Finished",
    date: new Date(Date.now())
  }, 
  {
    title: "In the Court of the Crimson King - King Crimson",
    type: "album",
    status: "Finished",
    date: new Date(Date.now())
  }, 
  {
    title: "Mezmerize - System of a Down",
    type: "album",
    status: "Unowned",
    date: new Date(Date.now())
  }, 
  {
    title: "Sheer Heart Attack - Queen",
    type: "album",
    status: "Unowned",
    date: new Date(Date.now())
  }, 
  {
    title: "Parasite",
    type: "movie",
    status: "Unowned",
    date: new Date(Date.now())
  }, 
  {
    title: "The Avengers",
    type: "movie",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "Jojo Rabbit",
    type: "movie",
    status: "Not Started",
    date: new Date(Date.now())
  },
  {
    title: "What We Do in the Shadows",
    type: "movie",
    status: "Not Started",
    date: new Date(Date.now())
  },
  {
    title: "Ford v Ferrari",
    type: "movie",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "The Irishman",
    type: "movie",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "Little Women",
    type: "movie",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "The Shape of Water",
    type: "movie",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "What We Do in the Shadows",
    type: "show",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "The Boys",
    type: "show",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "The Good Place",
    type: "show",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "Scrubs",
    type: "show",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "Cobra Kai",
    type: "show",
    status: "Not Started",
    date: new Date(Date.now())
  },
  {
    title: "Avatar: The Last Airbender",
    type: "show",
    status: "Not Started",
    date: new Date(Date.now())
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    type: "show",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "JoJo's Bizarre Adventure",
    type: "show",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "Metal Gear Solid 4: Guns of the Patriots",
    type: "game",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "Tales of Berseria",
    type: "game",
    status: "Unowned",
    date: new Date(Date.now())
  },
  {
    title: "Persona 5",
    type: "game",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "Resident Evil 4",
    type: "game",
    status: "Finished",
    date: new Date(Date.now())
  },
  {
    title: "Horizon: Zero Dawn",
    type: "game",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    type: "game",
    status: "In Progress",
    date: new Date(Date.now())
  },
  {
    title: "Dragon Quest XI",
    type: "game",
    status: "Not Started",
    date: new Date(Date.now())
  },
  {
    title: "Castlevania: Symphony of the Night",
    type: "game",
    status: "Not Started",
    date: new Date(Date.now())
  }
]

db.Media
  .remove({})
  .then(() => db.Media.collection.insertMany(mediaSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
