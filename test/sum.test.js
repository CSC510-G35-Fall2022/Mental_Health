const journal = require("../commands/journal.js");
const Interaction = require("discord.js")

// getParsedCommand implementation

export const optionType = {
  // 0: null,
  // 1: subCommand,
  // 2: subCommandGroup,
  3: String,
  4: Number,
  5: Boolean,
  // 6: user,
  // 7: channel,
  // 8: role,
  // 9: mentionable,
  10: Number,
};

function getNestedOptions(options) {
  return options.reduce((allOptions, option) => {
    if (!option.options) return [...allOptions, option];
    const nestedOptions = getNestedOptions(option.options);
    return [option, ...allOptions, ...nestedOptions];
  }, []);
}

function castToType(value, typeId) {
  const typeCaster = optionType[typeId];
  return typeCaster ? typeCaster(value) : value;
}

export function getParsedCommand(stringCommand, commandData) {
  const options = getNestedOptions(commandData.options);
  const optionsIndentifiers = options.map((option) => `${option.name}:`);
  const requestedOptions = options.reduce((requestedOptions, option) => {
    const identifier = `${option.name}:`;
    if (!stringCommand.includes(identifier)) return requestedOptions;
    const remainder = stringCommand.split(identifier)[1];

    const nextOptionIdentifier = remainder
      .split(" ")
      .find((word) => optionsIndentifiers.includes(word));
    if (nextOptionIdentifier) {
      const value = remainder.split(nextOptionIdentifier)[0].trim();
      return [
        ...requestedOptions,
        {
          name: option.name,
          value: castToType(value, option.type),
          type: option.type,
        },
      ];
    }

    return [
      ...requestedOptions,
      {
        name: option.name,
        value: castToType(remainder.trim(), option.type),
        type: option.type,
      },
    ];
  }, []);
  const optionNames = options.map((option) => option.name);
  const splittedCommand = stringCommand.split(" ");
  const name = splittedCommand[0].replace("/", "");
  const subcommand = splittedCommand.find((word) => optionNames.includes(word));
  return {
    id: name,
    name,
    type: 1,
    options: subcommand
      ? [
          {
            name: subcommand,
            type: 1,
            options: requestedOptions,
          },
        ]
      : requestedOptions,
  };
}

it("test journal command", async () => {
  console.log(journal);
  console.log(journal.execute(Interaction, ["1", "2", "3"]));
  expect(journal).toBeTruthy();
  expect(journal.data.name).toEqual("journal");
  expect(journal.data.description).toEqual("Replies with a journal prompt");
  const stringCommand = "/journal";
});

// it("returns the matching sublimation when using query without accents", async () => {
//   const stringCommand = "/subli by-name name: influencia lang: pt";
//   const command = getParsedCommand(stringCommand, commandData);
//   const spy = await executeCommandAndSpyReply(SubliCommand, command);
//   expect(spy).toHaveBeenCalledWith(
//     embedContaining({
//       title: ":scroll: Influência I",
//     })
//   );
// });
