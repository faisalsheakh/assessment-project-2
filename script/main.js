var xhr = new XMLHttpRequest;
var url ="https://api.covid19india.org/state_district_wise.json";
xhr.open('GET', url , true);
xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    var output ='';
    for(var i in data){
        console.log(data[i].districtData)
    }
}
xhr.send();