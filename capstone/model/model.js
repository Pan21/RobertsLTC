var MODEL = (function(){


    var _getInsurance = function(viewName){
        $.get(`views/aboutLtc/${viewName}.html`, function(data){
            $("#ltcTextContain").html(data);
        });

    };

    var _getRisk = function(viewName){
        $.get(`views/riskFactors/${viewName}.html`, function(data){
            $("#riskTextContain").html(data);
        });

    };

    var _getOption = function(viewName){
        $.get(`views/ltcOptions/${viewName}.html`, function(data){
            $("#ltcOptionsText").html(data);
        });

    };


    return {
        getInsurance: _getInsurance,
        getRisk: _getRisk,
        getOption: _getOption
    }
})();