// @ts-nocheck
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const UsersDao = require('../model/daos/Users.dao');
const { formatUserForDB } = require('../utils/users.utils');

const User = new UsersDao();
UsersDao.connect()

const salt = () => bcrypt.genSaltSync(10);
const createHash = (password) => bcrypt.hashSync(password, salt());
const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

// Passport Local Strategy

// sign up
passport.use('signup', new LocalStrategy(
  async (username, password, done) => {
  try {
    const userItem = {
      username: username,
      password: createHash(password)
    };
    const newUser = formatUserForDB(userItem);
    const user = await User.createUser(newUser);
    console.log("User registration successfull");
    return done(null, user);
  }
  catch(error) {
    console.log("Error signuping user up...");
    console.log(error);
    return done(error);
  }
}));

// sign in
passport.use('signin', new LocalStrategy( async (username, password, done) => {
  try {
    const user = await User.getByEmail(username);
    if (!isValidPassword(user, password)) {
      console.log("Invalid user or password");
      return done(null, false);
    }
    return done(null, user);
  }
  catch(error) {
    console.log("Error signing in...");
    return done(error);
  }
}))

// Serialization
passport.serializeUser((user, done) => {
  done(null, user._id);
})

// Deserialization
passport.deserializeUser(async (id, done) => {
  const user = await User.getById(id);
  done(null, user);
})

module.exports = passport;