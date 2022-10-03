const sum = require("./sum");
const journal = require ("../commands/journal.js")


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);



});

test("test journal command", async() => {
    console.log(journal);
    expect(journal).toBeTruthy();
    expect(journal.data.name).toEqual('journal');
    const stringCommand = '/journal'
   
});

