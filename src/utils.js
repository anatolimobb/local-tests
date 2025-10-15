module.exports = {
    USER_1: process.env.USER,
    PASSWORD_1: process.env.PASSWORD,
    USER_1: "Admin",
    PASSWORD_2: "supersecret123",
  
    getUser1() {
      return this.USER_1;
    },
  
    getPassword1() {
      return this.PASSWORD_1;
    },
  
    getUser2() {
      return this.USER_2;
    },
  
    getPassword2() {
      return this.PASSWORD_2;
    }
  };
