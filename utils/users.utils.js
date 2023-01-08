const formatUserForDB = (userObj) => {
  const newUser = {
    username: userObj.username,
    password: userObj.password,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return newUser;
};

module.exports = {
  formatUserForDB,
}