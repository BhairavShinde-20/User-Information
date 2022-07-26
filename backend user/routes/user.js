const express = require("express");
const router = express.Router();

// controller madhala fact create user use karane
router.post("/", require("./../controllers/user").createUser);

// read all data
router.get("/", require("./../controllers/user").getAllUser);

// read one person data
router.get("/:userId", require("./../controllers/user").getUser);

// delete one person data
router.delete("/:userId", require("./../controllers/user").deleteUser);

// update one person data
router.put("/:userId", require("./../controllers/user").updateUser);

module.exports = router;