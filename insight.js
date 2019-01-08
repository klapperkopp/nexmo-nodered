const Nexmo = require('nexmo');
const mustache = require("mustache");

module.exports = function (RED) {
  
   function numberinsight(config){
    RED.nodes.createNode(this, config);
    this.creds = RED.nodes.getNode(config.creds);
    this.ni_type = config.ni_type;
    var node = this;
    
    node.on('input', function (msg) {
      this.number = mustache.render(config.number, msg);
      this.url = mustache.render(config.url, msg);
      
      const nexmo = new Nexmo({
        apiKey: this.creds.apikey,
        apiSecret: this.creds.apisecret,
        applicationId: this.creds.appid,
        privateKey: this.creds.privatekey
        }, {debug: false, appendToUserAgent: "nexmo-nodered/3.0.0"}
      );
      nexmo.numberInsight.get({level: this.ni_type, number: this.number, callback: this.url}, (error, response) => {
        if(error) {
          console.error(error);
        }
        else {
          msg.payload=response;
          node.send(response) 
        }
      });
    });  
  }
  
 
  RED.nodes.registerType("numberinsight",numberinsight);  
    
}
