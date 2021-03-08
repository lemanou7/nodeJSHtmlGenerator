const Employee = require("./lib/Employee");

    test("We must be able to instantiate the Employee class", () => {
        let emp = new Employee("Drissa",5824,"lemanou7@yahoo.fr") ;
      expect(typeof(emp)).toBe("object");
    });
  

  