const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/backlogdb"
);

/* DEFAULT/VARIETY dataset - contains at least two of each possible combination of type and status.
This is intended to be a large dataset, useful for testing both load and basic style and site 
functions. Consider it a representative default dataset. */

const mediaSeed = [
  {
    title: "Moby Dick",
    type: "book",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Adventures of Huckleberry Finn",
    type: "book",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Catcher in the Rye",
    type: "book",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Eloquent Javascript",
    type: "book",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Team of Rivals",
    type: "book",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "The Great Deluge",
    type: "book",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Parasyte",
    type: "book",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Jane Slayre",
    type: "book",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "No Drum and Bass in the Jazz Room - Clever Girl",
    type: "album",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Hill Climber - Vulfpeck",
    type: "album",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Bon Iver - Bon Iver",
    type: "album",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Room on Fire - The Strokes",
    type: "album",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Evil Empire - Rage Against the Machine",
    type: "album",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "In the Court of the Crimson King - King Crimson",
    type: "album",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Mezmerize - System of a Down",
    type: "album",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Sheer Heart Attack - Queen",
    type: "album",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "Parasite",
    type: "movie",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  }, 
  {
    title: "The Avengers",
    type: "movie",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Jojo Rabbit",
    type: "movie",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "What We Do in the Shadows",
    type: "movie",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Ford v Ferrari",
    type: "movie",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "The Irishman",
    type: "movie",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Little Women",
    type: "movie",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "The Shape of Water",
    type: "movie",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "What We Do in the Shadows",
    type: "show",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "The Boys",
    type: "show",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "The Good Place",
    type: "show",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Scrubs",
    type: "show",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Cobra Kai",
    type: "show",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Avatar: The Last Airbender",
    type: "show",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    type: "show",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "JoJo's Bizarre Adventure",
    type: "show",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Metal Gear Solid 4: Guns of the Patriots",
    type: "game",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Tales of Berseria",
    type: "game",
    status: "Unowned",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Persona 5",
    type: "game",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Resident Evil 4",
    type: "game",
    status: "Finished",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Horizon: Zero Dawn",
    type: "game",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    type: "game",
    status: "In Progress",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Dragon Quest XI",
    type: "game",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
  },
  {
    title: "Castlevania: Symphony of the Night",
    type: "game",
    status: "Not Started",
    date: new Date(Date.now()),
    comment: "Comment about your progress here"
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
