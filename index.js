const { fetch } = require('@sapphire/fetch');
const { Webhook, MessageBuilder } = require('discord-webhook-node');
require('dotenv').config()
const ms = require('ms')
var cron = require('node-cron');

async function getData() {
  const response = await fetch(`https://${process.env.PANEL_DOMAIN}/api/client/servers/${process.env.SERVER_ID}/resources`, {
    headers: {
      'Authorization': `Bearer ${process.env.PANEL_TOKEN}`
    }
  });

  // Webhook Connection //
  const hook = new Webhook({
    url: `${process.env.WEBHOOK_URL}`,
    throwErrors: true
  });

  // Cron Task //
  var task = 
    cron.schedule('*/1 * * * *', () => {
      // Re cache data
      getData();
        let embed = new MessageBuilder()
        .setColor('BLURPLE')
      if (response.attributes.current_state == "running") {
        embed.setTitle(`🟢 Server ${process.env.SERVER_ID} 🟢`)
      } else {
        embed.setTitle(`🔴 Server ${process.env.SERVER_ID} 🔴`)
      }
      embed.addField('CPU Usage:', `${response.attributes.resources.cpu_absolute}%`, true)
      embed.addField('Memory Usage:', `${formatSizeUnits(response.attributes.resources.memory_bytes)}`, true)
      embed.addField('Disk Usage:', `${formatSizeUnits(response.attributes.resources.disk_bytes)}`, true)
      embed.addField('Uptime', `${ms(response.attributes.resources.uptime)}`, true)
      if (process.env.FOOTER) {
        embed.setFooter(`${process.env.FOOTER}`)
      } else {
        embed.setFooter(`Ptero Status`)
      }
        hook.send(embed);
      });
    task.start();
}
// init //
getData();



/**
 * Format bytes to readable units.
 * @param  {} bytes
 */
function formatSizeUnits(bytes) {
  if (bytes >= 1073741824) {
    bytes = (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) {
    bytes = (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    bytes = (bytes / 1024).toFixed(2) + " KB";
  } else if (bytes > 1) {
    bytes = bytes + " bytes";
  } else if (bytes == 1) {
    bytes = bytes + " byte";
  } else {
    bytes = "0 bytes";
  }
  return bytes;
}