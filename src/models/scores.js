const fs = require("fs");
var userFun = require("../models/users");
let firstCall = true;
const fileName = "./scores.json";

var scores = [
  {
    rank: 1,
    name: "Blue Fish",
    score: 8000,
  },
  {
    rank: 2,
    name: "Mier",
    score: 7000,
  },
  {
    rank: 3,
    name: "Little Bee",
    score: 6000,
  },
];

const readFile = () => {
  try {
    console.log("in score readfile");
    var rawdata = fs.readFileSync(fileName);
  } catch (err) {
    console.log("read file error is: ", err);
    saveFile();
  }
  scores = JSON.parse(rawdata);

  console.log(scores);
};

const saveFile = () => {
  fs.writeFile(fileName, JSON.stringify(scores), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

var setScore = (id, score) => {
  const name = userFun.getUser(id)[0].name;

  const rank = scores.filter((sc) => sc.score > score).length + 1;
  if (rank > 10) return 0; // not in top 10
  scores = scores.map((sc) =>
    sc.rank < rank ? sc : { ...sc, rank: sc.rank + 1 }
  );
  scores.push({ rank: rank, name: name, score: score });
  scores.sort((s1, s2) => s1.rank - s2.rank);
  if (scores.length > 10) scores.pop(); // remove the last one.
  saveFile();
  return rank;
};
var getScores = () => {
  if (firstCall) {
    firstCall = false;
    readFile();
  }
  return scores;
};
readFile(); // need to read file when it is started.
module.exports = { getScores, setScore };
