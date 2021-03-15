const Employee = require("../lib/Employee");


class Engineer extends Employee {
    constructor(name, id, email, username){
        super(name, id, email);
        this.github = username;
        this.title = "Engineer";
    }
    
    getGithub(){
        return `https://github.com/${this.github}`
    }

    getRole(){
        return this.title;
    }
}

module.exports = Engineer;