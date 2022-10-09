## 1. Create a Discord bot in the developer portal

You must first create a discord bot account in the [discord developer portal](https://discord.com/developers/applications).

1.  log in to the portal using your discord account
2.  click on new application
3.  give the bot a name, you can name it anything you want, does not have to be passel
4.  optional: under settings > general information, add a profile photo for the bot
5.  optional: under settings > general information, add a description for the bot
6.  under settings > bot, click on add bot, click on "yes, do it!"
7.  click on reset token, **when you see the token copy it and store in a safe place.** DO NOT EVER post this token anywhere. If you do go back to the portal and reset the token and update it the main.py file in the section below. The token should look something like this `MTAwMTg3MDk1OTUzNzU2NTc1Ng.GZ6ikH.C_NRQfjO2oB1otGsRJZz5cpTRhKrIZ6twRnI4M`, a random generation of characters.
8.  uncheck PUBLIC BOT and REQUIRES OAUTH2 CODE GRANT
9.  under Privileged Gateway Intents, check PRESENCE INTENT, SERVER MEMBERS INTENT, and MESSAGE CONTENT INTENT
10. save your changes
11. under BOT PERMISSIONS, check Administrator, the first one.

The page should look like this:
![enter image description here](https://github.com/stoir/passel_public/blob/main/Images/intents.png)
![enter image description here](https://github.com/stoir/passel_public/blob/main/Images/bot_perms.png)

### Add the created bot to your server

You are complete with creating the bot, now you need to add it to your server.

1. click on the OAuth2 arrow in the side bar, then click on URL generator
2. under scopes select bot
3. you should see a new menu, under bot permissions, select Administrator
4. then copy paste the invite link into a browser and invite the bot

### Turn on Developer mode in Discord

1. Go into Discord -> settings -> App Settings -> Advanced and turn on Developer Portal

## 2. Setup repository

1. Download repository
2. Go back to the Discord channel you want to use the bot in and the bot should show up on the right side. Right-click on the bot and click copy ID. Paste this in as CLIENT_ID in the next step.
3. In the main directory of your project, create a file named '.env'
   copy the token from the developer portal and create the following lines in the file
   \*Note: the Token is from the developer portal website that you saved earlier.

```
TOKEN='<insert token here>'
CLIENT_ID='<paste the Bot's ID here>'
```

## Install Instructions in project location

1. Install Discord.js

```
npm install discord.js
```

2. Instal Dotenv locally

```
npm install dotenv --save
```

3. Copy the GuildId for the server by right clicking on the discord server, then Copy ID. Add this ID in line 19 of the `main.js` file.

4. Run the `main`.js file
   `node main.js`

### Run Style Check

1. For Style Checker (in local directory):

```
npm install standard --save-dev
```

2. Run
   `npx standard`

### Testing the commands:

1. Install jest:

```
npm install --save-dev jest
```

2. Run

```
npm run test_commands
```

### Running Syntax Checker

1. Install syntax checker

```
npm install syntax-checker -g
npm install uglifyjs -g
sudo npm install -g uglify-js
```

2. Run:

```
npm run syntax
```

### Running code formatter

1. Install prettier

```
npm install --save-dev --save-exact prettier
```

2.

```
npm run prettier
```

### Other automated tools: audit

1. Run:

```
npm run audit
```
