const Intern = require("../lib/intern");

test("must be able get instance variables ", () => {
    let intern = new Intern("Drissa", 5824, "lemanou7@yahoo.fr","ccd");
    expect(intern.name).toBe("Drissa");
    expect(intern.id).toBe(5824);
    expect(intern.email).toBe("lemanou7@yahoo.fr");
    expect(intern.title).toBe("Intern");
    expect(intern.school).toBe("ccd");
    
  });
  
  test("getSchool() must return Intern's name", () => {
    let intern = new Intern("Drissa", 5824, "lemanou7@yahoo.fr","ccd");
  expect(intern.getSchool()).toBe("ccd");
  });

test("getRole() must return Intern's role", () => {
    let intern = new Intern("Drissa", 5824, "lemanou7@yahoo.fr","ccd");
    expect(intern.getRole()).toBe("Intern");
});
