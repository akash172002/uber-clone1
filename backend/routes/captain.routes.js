const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name should be minimum 3 character long"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("Password must be at least 3 character long"),

    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be 3 character long"),

    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 character long"),

    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Inavlid type"),

    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Inavlid type"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("{Password must contain 6 character long"),
  ],
  captainController.loginCaptain
);

router.get("/profile", authCaptain, captainController.getCaptainProfile);

router.get("/logout", authCaptain, captainController.logoutCaptain);

module.exports = router;
