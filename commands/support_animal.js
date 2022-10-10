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
 * Slash command for support animal pictures
 *
 * @exports support_animal
 */
module.exports = {
  /**
   * Slash command for support animal command
   *
   * @property {object} data - A slash command object
   * @property {string} data.name - Name of the slash command
   * @property {string} data.description - Description of the slash command
   */
  data: new SlashCommandBuilder()
    .setName("support_animal")
    .setDescription("See an image of an adorable support animal"),
  /**
   * Executes the support_animal command
   *
   * @async
   * @function execute
   * @param {object} interaction - Current discord interaction
   * @param {Array<string>} options - List of animal picture links
   */
  async execute(interaction, options) {
    num = Math.floor(Math.random() * options.length);

    /**
     * Embedded object
     *
     * @member {object} embed
     * @property {object} embed - Embed object
     * @property {object} embed.color - Color of the embed
     * @property {string} embed.title - Title of the embed
     * @property {color} embed.image - Image to display in the embed
     */
    const embed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle("You got this!")
      .setImage(options[num][0]);
    const messageId = interaction.reply({ embeds: [embed] });
  },
};
