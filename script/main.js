


    var xhr = new XMLHttpRequest;
    var url ="https://api.covid19india.org/data.json";
    xhr.open('GET', url , true);
    xhr.onload = function(event) {
        var data = JSON.parse(this.responseText)
        var output = '';
        var headding = '';
        if (this.status == 200)
        {   headding +='<table><th>State</th><th>Total Confirmed</th><th>Active</th><th>Recovered</th><th>Deaths</th><th>Today New Cases</th><th>Recovered Today</th><th>Deaths Today</th></table>'
            document.getElementById('haeding').innerHTML= headding;
            for(var i in this.responseText)
            {
            console.log(data.statewise[i].state)

             output +='<div class="states"><ul><table><th>'
             + data.statewise[i].state+
             '</th><td><li class="total">'+ data.statewise[i].confirmed +
             '</td><td><li class="active">'+ data.statewise[i].active +
             '</td><td><li class="recv">'+ data.statewise[i].recovered +
             '</td><td><li class="deaths">'+ data.statewise[i].deaths +
             '</td><td><li class="conf">'+ data.statewise[i].deltaconfirmed +
             '</td><td><li class="recv">'+ data.statewise[i].deltarecovered +
             '</td><td><li class="deaths">'+ data.statewise[i].deltadeaths +
             '</table></div></br>';
             document.getElementById('cont').innerHTML= output;
            }
            
        }       
}
xhr.send();
