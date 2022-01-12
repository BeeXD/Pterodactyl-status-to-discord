#!/bin/sh

# Start program
npm install
clear

echo What is your Panel Domain? EX: panel.example.com 
read panelDomain
echo What is the Server ID?
read serverID
echo What is your secret API key?
read panelToken
echo What is your Discord webhook URL?
read webhookURL

{
        echo '# Panel API Settings'
        echo 'PANEL_DOMAIN='$panelDomain
        echo 'SERVER_ID='$serverID
        echo 'PANEL_TOKEN='$panelToken
        echo
        echo 
        echo '# Discord Settings'
        echo 'WEBHOOK_URL='$webhookURL
        echo 'FOOTER=""'
} > .env

clear
node index.js

echo program started