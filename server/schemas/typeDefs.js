// import the gql tagged template function
const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  type Thought {
    _id: ID
    thoughtText: String
    createAt: String
    username: String
    reactionCount: Int
  }

  type Query {
    thoughts(username: String): [Thought]
  }
`;

module.exports = typeDefs;