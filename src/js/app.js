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
