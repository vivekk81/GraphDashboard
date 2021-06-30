const dotenv = require("dotenv");
const fetch = require('node-fetch');

const connectDatabase = require("../config/database");

const chart = require("../models/chart");

// setting dotenv file
dotenv.config({path: "backend/config/config.env"});

connectDatabase();

const feedToDB = async (data) => {
  try {
    await chart.deleteMany();
    console.log("All charts are deleted");

    await chart.insertMany(data);
    console.log("All charts insrted.");

    process.exit();

  } catch(error){
    console.log(error.message);
    process.exit();
  }
}

const seedcharts = () => {
  const settings = { method: "Get" };
  const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json";
  fetch(url, settings)
    .then(res => res.json())
    .then(json => {
      feedToDB(json);
    })
}

seedcharts();