const express = require("express");
const { Router } = express;

//model
const Model = require("../models/modelList");
const modelListRouter = Router();

//Request to the central  database
modelListRouter
  .route("/")
  .get((req, res, next) => {
    Model.find({}, (err, items) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(items);
      }
    });
  })
  .post((req, res, next) => {
    const newModel = new Model(req.body);
    newModel.save((err, savedModel) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(201).send(savedModel);
      }
    });
  });
modelListRouter
  .route("/:id")
  .get((req, res) => {
    Model.findById(req.params.id, (err, foundItem) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(foundItem);
      }
    });
  })
  .delete((req, res) => {
    Model.findByIdAndDelete(req.params.id, (err, deletedItem) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(204).send();
      }
    });
  })
  .put((req, res) => {
    Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedItem) => {
        if (err) {
          res.status(400);
          next(err);
        } else {
          res.status(200).send(updatedItem);
        }
      }
    );
  });

modelListRouter.
    route("/:name")
    .get((req, res, next) => {
      Model.findOne({name: req.params.name}, (err, name) => {
        if (err) {
          res.status(400);
          next(err);
        } else {
          res.status(200).send(name);
        }
      });
    })


module.exports = modelListRouter;
