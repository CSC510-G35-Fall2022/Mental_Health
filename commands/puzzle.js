const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder  } = require('discord.js');

  /**
   * Slash command for puzzle game
   *
   * @exports puzzle_game
   */

let arr = [];

let dict = {0: '🔴', 1: '🟢'}

let embed = new EmbedBuilder()
.setColor(0x0099FF)
.setTitle('Lights Out Puzzle')
.setDescription('Guide: In order to solve the puzzle, you must turn all of the colors green. \
The catch is that any light you press will turn any adjacent tiles into the opposite color. Good luck!');

module.exports = {
    data: new SlashCommandBuilder()
      .setName("puzzle")
      .setDescription("Play a 3x3 Lights out game"),
    async execute(interaction) {
      var win = 1;
      while(win == 1){
        arr = [];
        var rows = [];
        for(let i = 0; i < 3; i++){
          var row = [];
          for(let j = 0; j < 3; j++){
            var testWin = Math.round(Math.random())
            if(testWin == 0)
              win = 0;
            row.push(testWin);
          }
          //console.log(row);
          arr.push(row);
          const actionRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                  .setCustomId(i + ',' + 0)
                  .setEmoji(dict[row[0]])
                  .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                  .setCustomId(i + ',' + 1)
                  .setEmoji(dict[row[1]])
                  .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                  .setCustomId(i + ',' + 2)
                  .setEmoji(dict[row[2]])
                  .setStyle(ButtonStyle.Primary),
            );
          rows.push(actionRow);
        }
      }

      interaction.reply({ embeds: [embed], components: rows });
    },

    async updateBoard(interaction){
      //console.log(interaction.customId);
      var split = interaction.customId.split(',');
      var idX = parseInt(split[0]);
      var idY = parseInt(split[1]);
      arr[idX][idY] = arr[idX][idY] ^ 1;
      //console.log(idX + ", " + idY);
      if (idX - 1 >= 0)
        arr[idX - 1][idY] = arr[idX - 1][idY] ^ 1;
      var temp = idX + 1;
      //console.log(temp + ", " + idY);
      if (idX + 1 < 3)
        arr[idX + 1][idY] = arr[idX + 1][idY] ^ 1;
      if (idY - 1 >= 0)
        arr[idX][idY - 1] = arr[idX][idY - 1] ^ 1;
      if (idY + 1 < 3)
        arr[idX][idY + 1] = arr[idX][idY + 1] ^ 1;
      let rows = [];
      for(let i = 0; i < 3; i++){
        //console.log(arr[i]);
        const actionRow = new ActionRowBuilder()
          .addComponents(
              new ButtonBuilder()
                .setCustomId(i + ',' + 0)
                .setEmoji(dict[arr[i][0]])
                .setStyle(ButtonStyle.Primary),
              new ButtonBuilder()
                .setCustomId(i + ',' + 1)
                .setEmoji(dict[arr[i][1]])
                .setStyle(ButtonStyle.Primary),
              new ButtonBuilder()
                .setCustomId(i + ',' + 2)
                .setEmoji(dict[arr[i][2]])
                .setStyle(ButtonStyle.Primary),
          );
        rows.push(actionRow);
      }

      var win = 1;
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
          if(arr[i][j] == 0)
            win = 0;
        }
      }
      if(win == 1){
        let rows = [];
        for(let i = 0; i < 3; i++){
          //console.log(arr[i]);
          const actionRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                  .setCustomId(i + ',' + 0)
                  .setEmoji(dict[arr[i][0]])
                  .setStyle(ButtonStyle.Primary)
                  .setDisabled(true),
                new ButtonBuilder()
                  .setCustomId(i + ',' + 1)
                  .setEmoji(dict[arr[i][1]])
                  .setStyle(ButtonStyle.Primary)
                  .setDisabled(true),
                new ButtonBuilder()
                  .setCustomId(i + ',' + 2)
                  .setEmoji(dict[arr[i][2]])
                  .setStyle(ButtonStyle.Primary)
                  .setDisabled(true),
            );
          rows.push(actionRow);
        }
        let embedWin = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Lights Out Puzzle')
          .setDescription('Congrats on solving the puzzle!');
        interaction.update({ embeds: [embedWin], components: rows })
      }
      else
        interaction.update({components: rows })
    },
  };