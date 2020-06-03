const db = require("../models");
const Categoria = db.categoria;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });

    return;
  }

  const categoria = {
    title: req.body.title,
    description: req.body.description,
    status: req.body.status ? req.body.status : false
  };

  Categoria.create(categoria)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categoria."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Categoria.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categorias."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Categoria.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categoria with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Categoria.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Categoria was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Categoria with id=${id}. Maybe Categoria was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Categoria with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Categoria.destroy({
    where: { id: id }
  })
    .then(result => {
      if (result == 1) {
        res.send({
          message: "Categoria was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Categoria with id=${id}. Maybe Categoria was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Categoria with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Categoria.destroy({
    where: {},
    truncate: false
  })
    .then(result => {
      res.send({ message: `${result} Categorias were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Categorias."
      });
    });
};

exports.findAllActives = (req, res) => {
  Categoria.findAll({ where: { status: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categorias."
      });
    });
};
