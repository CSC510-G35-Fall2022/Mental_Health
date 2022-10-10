/**
  Licensed to the Apache Software Foundation (ASF) under one
  or more contributor license agreements.  See the NOTICE file
  distributed with this work for additional information
  regarding copyright ownership.  The ASF licenses this file
  to you under the Apache License, Version 2.0 (the
  "License"); you may not use this file except in compliance
  with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, either express or implied.  See the License for the
  specific language governing permissions and limitations
  under the License.
  
  Apache Mehe
  Copyright 2022 The Apache Software Foundation

  This product includes software developed at
  The Apache Software Foundation (http://www.apache.org/).
*/
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

/**
 * Slash command for diet recommendations
 *
 * @exports diet_recommendation
 */
module.exports = {
  /**
   * Slash command for diet recommendations
   *
   * @type {object}
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("diet_recommendation")
    .setDescription("Gives a diet tip"),

  /**
   * Executes the diet slash command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of diet recommendation tips
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);
    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {color} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {string} embed.description - Description of the embed
     */
    const embed = new EmbedBuilder()
      .setColor(0x2596be)
      .setTitle(options[num][0])
      .setDescription(options[num][1] + "\nRead more at: " + options[num][2]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
