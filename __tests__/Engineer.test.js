const Engineer = require("../lib/engineer");


test("must be able get instance variables ", () => {
    let eng = new Engineer("Drissa", 5824, "lemanou7@yahoo.fr","lemanou7");
    expect(eng.name).toBe("Drissa");
    expect(eng.id).toBe(5824);
    expect(eng.email).toBe("lemanou7@yahoo.fr");
    expect(eng.title).toBe("Engineer");
    expect(eng.github).toBe("lemanou7");
    
  });
  
  test("getGithub() must return github url", () => {
    let eng = new Engineer("Drissa", 5824, "lemanou7@yahoo.fr","lemanou7");
  expect(eng.getGithub()).toBe("https://github.com/lemanou7");
  });

test("getRole() must return employee role", () => {
    let eng = new Engineer("Drissa", 5824, "lemanou7@yahoo.fr","lemanou7");
    expect(eng.getRole()).toBe("Engineer");
});
