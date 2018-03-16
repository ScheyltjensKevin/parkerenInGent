(function() {
    //DOM volledig klaar
    document.addEventListener("DOMContentLoaded",init);
    function init(){
        http.get("https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json")
            .then(function(response){
            console.info(response);
        });
    }
})();

// let p = new Parking(name,description, availableCapacity, totalCapacity)

function Parking (name, description, availableCapacity, totalCapacity) {

    this.name = name;
    this.description = description;
    this.availableCapacity = availableCapacity;
    this.totalCapacity = totalCapacity;
}
//http.get
(function() {
    "use strict";

    function get(url){
        let promise = new Promise(function(ok,nok){
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET",url);
            xmlHttp.onload = ()=>{
                let json = JSON.parse(xmlHttp.responseText);
                ok(json);
            };
            xmlHttp.onerror = ()=>{
                nok("iets is misgelopen, contacteer de administrator");
            };
            xmlHttp.send(null);
        });
        return promise;
    }

    window.http = {
        get:get
    };
})();
