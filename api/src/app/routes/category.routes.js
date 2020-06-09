const categories = require("../controllers/category.controller.js");

module.exports = (app) => {

  var router = require("express").Router();

  router.post("/", categories.create);

  router.get("/", categories.findAll);

  router.get("/active", categories.findAllActives);

  router.get("/:id", categories.findOne);

  router.put("/:id", categories.update);

  router.delete("/:id", categories.delete);

  router.delete("/", categories.deleteAll);

  app.use('/api/categories', router);
};
