


    var xhr = new XMLHttpRequest;
    var url ="https://api.covid19india.org/data.json";
    xhr.open('GET', url , true);
    xhr.onload = function(event) {
        var data = JSON.parse(this.responseText)
        var output = '';
        if (this.status == 200)
        {
            for(var i in this.responseText)
            {
            

             output +='<div class="states"><ul>'
             + data.statewise[i].state+
             '<li class="total">Total confirmed :-' + data.statewise[i].confirmed +
             '<li class="active">Active :-' + data.statewise[i].active +
             '<li class="recv">Total Recovered :-' + data.statewise[i].recovered +
             '<li class="deaths">Total Deaths :-' + data.statewise[i].deaths +
             '<li class="conf">Today New Cases:-' + data.statewise[i].deltaconfirmed +
             '<li class="recv">Recovered Today :-' + data.statewise[i].deltarecovered +
             '<li class="deaths">Deaths Today :-' + data.statewise[i].deltadeaths +
             '</div></br>';
             document.getElementById('cont').innerHTML= output;
            }
            
        }       
}
xhr.send();
