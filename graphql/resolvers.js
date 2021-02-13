const userData = require('../data/MOCK_DATA.json');

const resolvers = {
    Query: {
          getUsers: () => {
            return userData;
    },
  },
  Mutation: {
    register: async (parent, args) => {
      try {
        const { first_name, last_name, email, password } = args
        const id = userData.length + 1
        userData.push({
          id,
          first_name,
          last_name,
          email,
          password
        })
        return {id, first_name, last_name, email, password }
      } catch (e) {
        console.log(e);
      }
    }
  }
};

module.exports = resolvers