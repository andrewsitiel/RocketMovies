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

  findEmail(email) {
    const emailExists = this.users.find(user => user.email == email);
    return emailExists
  }

}

module.exports = RepositoryInMemory;