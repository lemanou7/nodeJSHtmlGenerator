const Employee = require("../lib/Employee");

test("We must be able to instantiate the Employee class", () => {
  let emp = new Employee("Drissa", 5824, "lemanou7@yahoo.fr");
  expect(typeof (emp)).toBe("object");
});


test("must be able get instance variables ", () => {
  let emp = new Employee("Drissa", 5824, "lemanou7@yahoo.fr");
  expect(emp.name).toBe("Drissa");
  expect(emp.id).toBe(5824);
  expect(emp.email).toBe("lemanou7@yahoo.fr");
  expect(emp.title).toBe("Employee");
});

test("getName() must return name", () => {
  let emp = new Employee("Drissa",5824,"lemanou7@yahoo.fr") ;
expect(emp.getName()).toBe("Drissa");
});

test("getId() must return Id", () => {
  let emp = new Employee("Drissa",5824,"lemanou7@yahoo.fr") ;
expect(emp.getId()).toBe(5824);
});

test("getEmail() must return Email", () => {
  let emp = new Employee("Drissa",5824,"lemanou7@yahoo.fr") ;
expect(emp.getEmail()).toBe("lemanou7@yahoo.fr");
});

test("getRole() must return employee role", () => {
  let emp = new Employee("Drissa",5824,"lemanou7@yahoo.fr") ;
expect(emp.getRole()).toBe(emp.title);
});





