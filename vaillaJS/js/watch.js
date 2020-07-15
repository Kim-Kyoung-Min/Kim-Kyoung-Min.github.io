var kbsWatch = true;
var naverWatch = true;
$(document).ready(function () {
    init();
    
});
function kbs() {
    $("#kbs").click(function () {
        if (kbsWatch == true && naverWatch == true) { 
            $(".kbs2").addClass("showKbs");
            kbsWatch = false;
        } else if (kbsWatch == true && naverWatch == false) { 
            $(".naverSport2").removeClass("showNaverSport");
            $(".kbs2").addClass("showKbs");
            naverWatch=true;
            kbsWatch=false;
        } else if (kbsWatch == false && naverWatch == true) { 
            $(".kbs2").removeClass("showKbs");
            kbsWatch = true;
        } else if (kbsWatch == false && naverWatch == false) { 
            $(".naverSport2").removeClass("showNaverSport");
            $(".kbs2").addClass("showKbs");
            kbsWatch=false;
            naverWatch=true;
        }
});
};
    
function naver() {
    $("#naverSport").click(function () {
        if (kbsWatch == true && naverWatch == true) {
            $(".naverSport2").addClass("showNaverSport");
            naverWatch = false;
        } else if (kbsWatch == true && naverWatch == false){
            $(".naverSport2").removeClass("showNaverSport");
            naverWatch = true;
        } else if(kbsWatch == false && naverWatch == true){
            $(".kbs2").removeClass("showKbs");
            $(".naverSport2").addClass("showNaverSport");
            kbsWatch = true;
            naverWatch = false;
        } else if(kbsWatch == false && naverWatch == false){
            $(".kbs2").removeClass("showKbs");
            $(".naverSport2").addClass("showNaverSport");
            kbsWatch=true;
            naverWatch=false;
        }
});
};

function init(){
    kbs();
    naver();
};

// $("#kbs").click(function () {$(".kbs2").toggleClass("showKbs");});
    // $("#naverSport").click(function () {$(".naverSport2").toggleClass("showNaverSport");});