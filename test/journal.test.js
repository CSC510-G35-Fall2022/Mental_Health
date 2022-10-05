
const journal = require ("../commands/journal.js")
const {Discord, ChatInputCommandInteraction, Interaction} = require ("discord.js")

it("test journal command", async() => {
    console.log(journal);
    expect(journal).toBeTruthy();
    expect(journal.data.name).toEqual('journal');
    // expect(journal.execute()).toHaveBeenCalledTimes(0); 
    const stringCommand = '/journal'
    // const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    await journal.execute(Interaction, ["list"]);
});

