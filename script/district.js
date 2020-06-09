document.getElementById("district").addEventListener("click", districtwiseData);
function districtwiseData(){

var xhr = new XMLHttpRequest;
var url ="https://api.covidindiatracker.com/state_data.json";
xhr.open('GET', url , true);
xhr.onload = function(event) {
    var data = JSON.parse(this.responseText)
    var output = '';
    var temp = this.responseText
    var i = '';
    var j = '';
    var headding = '';
    if (this.status == 200)
    {
        headding +='<center><table><th>District</th><th>Total Confirmed</th></table></center>';
        document.getElementById('haeding').innerHTML= headding;
      for(i in data)
        {
          output +='<div class="states"><h2><th>'
          + data[i].state +
          '</th></h2></div>';
            document.getElementById('cont').innerHTML =JSON.stringify(output);
          for(j in data[i].districtData)
          {

            output += '<center><ul><table><th>'
                    + data[i].districtData[j].name +
            '</th><td><li class="total">'+data[i].districtData[j].confirmed+
            '</li></td></table></ul></center>';
            document.getElementById('cont').innerHTML =JSON.stringify(output);

      
        
    }
                
    }
        
    }       
}
xhr.send();
}