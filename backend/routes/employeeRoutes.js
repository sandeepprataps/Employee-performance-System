const express = require("express");

const Employee =
  require("../models/Employee");

const auth =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {

  try {

    const employee =
      new Employee(req.body);

    await employee.save();

    res.json(employee);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/", auth, async (req, res) => {

  try {

    const employees =
      await Employee.find();

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

router.get("/search", auth, async (req, res) => {

  try {

    const department =
      req.query.department;

    const employees =
      await Employee.find({
        department
      });

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;