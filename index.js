const { fetch } = require ('@sapphire/fetch');
const { Webhook } = require('discord-webhook-node');
var cron = require('node-cron');
async function getData() {
    const response = await fetch('https://game.creavite.co/api/client/servers/SERVERID/resources', {
    headers : {
        'Authorization' : 'Bearer TOKEN'
    }
});
    console.log(response.attributes);
    function formatSizeUnits(bytes){
        if      (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
        else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
        else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB"; }
        else if (bytes > 1)           { bytes = bytes + " bytes"; }
        else if (bytes == 1)          { bytes = bytes + " byte"; }
        else                          { bytes = "0 bytes"; }
        return bytes;
      }
      console.log(formatSizeUnits(response.attributes.resources.memory_bytes));

    const hook = new Webhook("WEBHOOK_LINK");

    var task = 
    cron.schedule('*/1 * * * *', () => {
        hook.send("Memory Usage: " + formatSizeUnits(response.attributes.resources.memory_bytes) + " | " + "CPU Usage: " + response.attributes.resources.cpu_absolute + "%" + " | " + "Disk Bytes: " + formatSizeUnits(response.attributes.resources.disk_bytes) + "|" + "Is Running: " + response.attributes.current_state);
      });
    task.start();
}
getData();
