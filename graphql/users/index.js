const UserModel = require('./user.model');
const typeDef = require('./user.typedef');
const resolver = require('./user.resolvers');

module.exports = {
  UserModel,
  typeDef,
  resolver,
};
