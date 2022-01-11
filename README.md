# Pterodactyl-status-to-discord
Posts The server status from Pterodactyl panel to discord webhook

# Requirements
* Node.js
* npm
* A Code Editor
* Git

### Installation
Clone the repository `git clone https://github.com/BeeXD/pterodactyl-status-to-discord`
`cd pterodactyl-status-to-discord`

Then write `npm install`


Now The node package manager should install dependencies.

### Getting a Api Key
* Go to your Pterodactyl panel.
* Move to your Account settings.
![Here](https://i.imgur.com/7qnHmbw.png)
* Write a description then allow your ip or you can leave it blank for global access.
* Now an Api Key should generate. Keep it private and secure.
* Go to `.env` and replace the text PANEL_TOKEN with the api key.
* Now it should look like this. 
```js
PANEL_TOKEN=aetkAaETukhaEG135136aey
```

### Getting server id 
* Go to your console of Pterodactyl panel.
* The Link should be like this `https://yourWebsite.com/server/031afba1` replace yourWebsite.com with your domain.
* The `031afba1` is your server id.
* Go to your `.env` File.
* On Line 3, Replace `SERVER_ID=` to `SERVER_ID=SERVERID`.
* *ps Replace SERVERID with your server id.

### Setting up a Discord Webhook
* Make a webhook in a channel and copy the link
* Replace `WEBHOOK_URL=` to `WEBHOOK_URL=YOUR-URL`

### Running the File
* `node index.js` , Now using the cron module the file will send the stats every 1 minute.

### Screenshots
![ss](https://cdn.discordapp.com/attachments/855048155023671326/930360375302557786/pjs8j11e8xtf7ng780rang.png)

### Support
* Free free to contribute and develop the small project
* Any errors please make a issue. 


Thank You! <3

## Contributors

Thanks To contributors

<a href="https://github.com/BeeXD/Pterodactyl-status-to-discord/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=BeeXD/Pterodactyl-status-to-discord" />
</a>
