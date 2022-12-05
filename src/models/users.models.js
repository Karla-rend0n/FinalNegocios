const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../', 'data', 'users.json');

class User {
  id;
  user;
  password;
  name;
  lastName;

  constructor(user, password, name, lastName) {
    this.id = uuidv4();
    this.user = user;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
  }

  static loginUser(user, pass) {
    try {
      const usersTxt = fs.readFileSync(dataPath);
      const users = JSON.parse(usersTxt);

      const userDB = users.find(u => u.user == user && u.password == pass);
      if(!userDB) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  addUser() {
    if(!fs.existsSync(dataPath)) {
      const data = [];
      data.push(this);
      fs.writeFileSync(dataPath, JSON.stringify(data));
      return
    }
    const usersTxt = fs.readFileSync(dataPath);
    const users = JSON.parse(usersTxt);
    users.push(this);
    fs.writeFileSync(dataPath, JSON.stringify(users));
  }
}

module.exports = User;