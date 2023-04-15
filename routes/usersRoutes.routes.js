const express = require('express');

const userController = require('../controllers/users.controller');
const validExistUser = require('../middlewares/user.middleware');
const validFieldUser = require('../middlewares/validationUser.middleware');

const routerUser = express.Router();

routerUser
  .route('/')
  .get(userController.findAll)
  .post(
    validFieldUser.createUserValidation,
    userController.createUser
  );

routerUser
  .route('/:id')
  .get(
    validExistUser.validExistUser,
    userController.userById
  )
  .patch(
    validExistUser.validExistUser,
    validFieldUser.updateUser,
    userController.upDateUser
  )
  .delete(
    validExistUser.validExistUser,
    userController.deleteUser
  );

  routerUser
  .post("/login", validExistUser.validExistUser)

module.exports = routerUser;
