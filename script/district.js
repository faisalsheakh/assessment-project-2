var xhr = new XMLHttpRequest;
var url ="https://api.covidindiatracker.com/state_data.json";
xhr.open('GET', url , true);
xhr.onload = function(event) {
    var data = JSON.parse(this.responseText)
    var output = '';
    var temp = this.responseText
    var i = '';
    var j = '';
    if (this.status == 200)
    {
        
      for(i in data)
        {
          output +='<div class="states"><h2>'
          + data[i].state +
          '</h2></div><center><table><tr><th>District</th><th>Total Confirmed</th></tr></table></center>';
            document.getElementById('cont').innerHTML =JSON.stringify(output);
          for(j in data[i].districtData)
          {

            output += '<center><table><tr><td>'
                    + data[i].districtData[j].name +
            '</td><td>'+data[i].districtData[j].confirmed+
            '</td></table></center>';
            document.getElementById('cont').innerHTML =JSON.stringify(output);

      
        
    }
                
    }
        
    }       
}
xhr.send();
