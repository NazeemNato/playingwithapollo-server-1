const { gql } = require('apollo-server');

const typeDefs = gql`
type Users {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
}
  type Query {
      getUsers: [Users]!
  }

  type Mutation {
    register(first_name: String!, last_name: String!,email: String!, password: String!):Users!
  }
`;

module.exports = typeDefs