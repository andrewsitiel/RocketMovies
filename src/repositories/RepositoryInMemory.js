class RepositoryInMemory {
  users= [];

  insert({name, email, password}) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      email,
      password
    }

    this.users.push(user);
    return user
  }

  utils = {
    users: this.users,
    findEmail(email) {
      const emailExists = this.users.find(user => user.email == email);
      return emailExists
    },
    findPassword(id) {
      // const user = this.users.find(user => user.id == id);
      return { password: "$2b$08$qiOH1MC9J824D3BhMF8o6.ohzJY9V5TEckoRF0iSXBZAZ9bevLV2O"}
    }
  }

}

module.exports = RepositoryInMemory;