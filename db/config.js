const env = require("../config");

module.exports = {
  mongodb: {
    connectTo: (database) => `mongodb+srv://FG-Projects:${env.DB_PASSWORD}@fg-cluster.byfsgny.mongodb.net/${database}?retryWrites=true&w=majority`,
  }
  // Change here for your mongo atlas account's URI
}