call npm install

@echo off
cls
set /p panel-domain= "What is your Panel Domain? EX: panel.example.com "
set /p server-id= "What is the Server ID? "
set /p panel-token= "What is your secret API key? "
set /p webhook-url= "What is your Discord webhook URL? "


@echo off
(
    echo # Panel API Settings
    echo PANEL_DOMAIN=%panel-domain%
    echo SERVER_ID=%server-id%
    echo PANEL_TOKEN=%panel-token%
    echo[
    echo[
    echo # Discord Settings
    echo WEBHOOK_URL=%webhook-url%
    echo FOOTER=""
) > .env


cls

node index.js

echo Program started

@echo off
cmd /k 