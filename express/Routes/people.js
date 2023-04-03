const express = require("express");
const router = express.Router();
const { people } = require("../node-express-course/02-express-tutorial/data");

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(404).json({ success: false, msg: "Please enter a name" });
  } else {
    res.status(201).json({ success: true, people: name });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const newPeoples = [...people];
  single = newPeoples.find((people) => people.id === Number(id));
  if (single) {
    return res.status(200).json({ success: true, data: single });
  } else {
    res.status(404).json({ status: false, msg: "Not Found" });
  }
});

router.put("/:id", (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const findPeoples = people.find((person) => person.id == Number(id));
  if (!findPeoples) {
    return res.status(404).json({ status: false, msg: "Not Found" });
  }
  const newPeoples = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeoples });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const findPeoples = people.find((person) => person.id == Number(id));
  if (!findPeoples) {
    return res.status(404).json({ status: false, msg: "Not Found" });
  }
  const newPeoples = people.filter((people) => people.id != Number(id));
  res.status(200).json({ success: true, data: newPeoples });
});

module.exports = router;
