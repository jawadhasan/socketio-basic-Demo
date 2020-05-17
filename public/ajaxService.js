var ajaxService = function(){

    let serviceBase = 'api/';

    function get(endPoint){
        return $.getJSON(serviceBase + endPoint);
    }

    //public API
    return {
        get: get
       

    }

}();