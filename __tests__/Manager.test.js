const Manager = require("../lib/manager");


test("must be able get instance variables ", () => {
    let manager = new Manager("Drissa", 5824, "lemanou7@yahoo.fr", 331);
    expect(manager.name).toBe("Drissa");
    expect(manager.id).toBe(5824);
    expect(manager.email).toBe("lemanou7@yahoo.fr");
    expect(manager.title).toBe("Manager");
    expect(manager.officeNumber).toBe(331);
    
  });
  
  test("getOfficeNumber() must return the Manager's office number", () => {
    let manager = new Manager("Drissa", 5824, "lemanou7@yahoo.fr", 331);
  expect(manager.getOfficeNumber()).toBe(331);
  });

test("getRole() must return Manager's role", () => {
    let manager = new Manager("Drissa", 5824, "lemanou7@yahoo.fr", 331);
    expect(manager.getRole()).toBe("Manager");
});
