const express = require("express");
const router = express.Router();
const logincontroller = require("../controller/loginController")

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/login",logincontroller.login)


module.exports = router;