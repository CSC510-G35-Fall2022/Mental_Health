
const journal = require ("../commands/journal.js")



test("test journal command", async() => {
    console.log(journal);
    expect(journal).toBeTruthy();
    expect(journal.data.name).toEqual('journal');
    const stringCommand = '/journal'
   
});

