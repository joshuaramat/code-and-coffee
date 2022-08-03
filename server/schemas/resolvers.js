const { User, Thought } = require('../models');

const resolvers = {
  Query: {
    thoughts: async () => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    
  }
};

module.exports = resolvers;