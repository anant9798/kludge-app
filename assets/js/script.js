var threshHigh = 90
var threshLow = 45;

function getData() {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "https://api.thingspeak.com/channels/258352/feeds.json?results=1", true);
    oReq.send();

    function reqListener(e) {
      var data = JSON.parse(this.responseText);
      analyze(data);
    }
}
function analyze(data) {
    for(var feed in data['feeds'])
    {
      if(data['feeds'][feed]['field1']>threshHigh)
        alertHigh(feed);
      else if(data['feeds'][feed]['field1']<threshLow)
        alertLow(feed);
    }
}

function alertHigh()
{
  var oReq = new XMLHttpRequest();
  //oReq.onload = reqListener;
  oReq.open("get", "https://maker.ifttt.com/trigger/danger-high/with/key/cPQwkOsvF18k0Y_A62SFy-", true);
  oReq.send();
}

function control()
{
  getData();
}

control();

function alertLow()
{
    var oReq = new XMLHttpRequest();
    //oReq.onload = reqListener;
    oReq.open("get", "https://maker.ifttt.com/trigger/Danger-Low/with/key/cZBUE78qNT32UHA8UJmG5N",true);
    oReq.send();
}

