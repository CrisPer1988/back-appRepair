const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');

exports.findAll = catchAsync(async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });

  res.status(200).json({
    message: 'The query has been done successs',
    results: users.length,
    users,
  });
});

exports.userById = catchAsync(
  async (req, res) => {
    const { user } = req;

    res.status(200).json({
      status: 'success',
      message: 'The query has been done success',
      user,
    });
  }
);

exports.createUser = catchAsync(
  async (req, res) => {
    const { name, email, password, role } =
      req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({
      status: 'succes',
      message: 'The user has been created!',
      user,
    });
  }
);

exports.upDateUser = catchAsync(
  async (req, res) => {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({
      name,
      email,
    });

    res.status(200).json({
      status: 'success',
      message: 'The user update',
    });
  }
);

exports.deleteUser = catchAsync(
  async (req, res) => {
    const { user } = req;

    await user.update({
      status: 'disabled',
    });

    res.status(200).json({
      message: 'The user has been deleted',
    });
  }
);
