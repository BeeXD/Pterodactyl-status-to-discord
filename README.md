# Pterodactyl-status-to-discord
Posts The server status from pterocyadl panel to discord webhook

# Requirements
* Node.js
* npm
* A Code Editor
* Git

### Installation
Clone the repository `git clone https://github.com/BeeXD/petrocyadl-status-to-discord`
`cd petrocyadl-status-to-discord`

Then write `npm install`


Now The node package manager should install dependencies.

### Getting a Api Key
* Go to your pterocyadl panel.
* Move to your Account settings
![Here](https://i.imgur.com/7qnHmbw.png)
* Write description , Allow your ip or you can leave it blank for global access.
* Now a Api Key should generate. Keep it privately.
* Go to `index.js` and replace the text TOKEN with the api key.
* Now it should look like this 
```js
'Authorisation' : 'Bearer aghdgsjdhw212'
```

### Getting server id 
* Go to your console of pterocyadl panel.
* The Link should be like this `https://yourWebsite.com/server/031afba1`
* The `031afba1` is your server id.
* Go to your `index.js` File 
* On Line 5 , Replace `https://game.creavite.co/api/client/servers/SERVERID/resources` to `https://yourWebsite.com/api/client/SERVERID/resources`
* *ps Replace SERVERID with your server id

### Setting up a Discord Webhook
* Make a webhook in a channel and copy the link
* Replace the link with `WEBHOOK_LINK`

### Running the File
* `node index.js` , Now using the cron module the file will send the stats every 1 minute.

### Screenshots
![ss](https://cdn.discordapp.com/attachments/916933406636527696/929960718227365948/atlast.PNG)

### Support
* Free free to contribute and develop the small project
* Any errors please make a issue. 


Thank You! <3
