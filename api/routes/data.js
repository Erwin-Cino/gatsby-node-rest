const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("res");
  res.status(200).json({
    demo: [
      {
        title: "A simple graph",
        "x-axis": "Time",
        "series-1": "Alpha",
        "series-2": "Beta",
        data: {
          "1": ["100", "210"],
          "2": ["80", "220"],
          "3": ["70", "230"],
          "4": ["50", "240"],
          "5": ["55", ""],
          "6": ["85", "250"],
          "7": ["100", "260"],
          "8": ["130", "270"],
          "9": ["190", "285"],
          "10": ["260", "290"]
        }
      }
    ]
  });
});

module.exports = router;
