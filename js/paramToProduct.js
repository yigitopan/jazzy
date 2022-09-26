var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


const getProductDetails = () => {
    const urun = getUrlParameter('urun');
    const attributes = urun.split("-");
    
    let tad;
    let tur;
    let gr;
    let title;
    let paw;

    if(attributes[0] == "kedi") {
        tur = "Kedi";
        paw = "cat";        
        document.querySelector(".breadcrumbs-right img").setAttribute("src",`assets/pawcat.png`)
    }
    else {
        tur = "Köpek";
        paw = "dog";
        document.querySelector(".breadcrumbs-right img").setAttribute("src",`assets/pawdog.png`)
    }
    /////////////////////////////////////////////
    if(attributes[1] == "ton") {
        tad = "Ton";
        title = "TON BALIKLI JAZZY";
    }
    else if (attributes[1] == "tavuk") {
        tad = "Tavuk";
        title = "TAVUK ETLİ JAZZY";
    }
    else {
        tad = "Sığır";
        title = "SIĞIR ETLİ JAZZY";
    }
    /////////////////////////////////////////////
    if(attributes[2] == "400gr") {
        gr = "400 Gr";
    }
    else {
        tur = "95 Gr";
    }
    document.querySelector(".type-dynamic").innerHTML = tur;
    document.querySelector(".taste-dynamic").innerHTML = tad;
    document.querySelector(".gr-dynamic").innerHTML = gr;
    document.querySelector(".product-info h2").innerHTML = title;
}

document.addEventListener('DOMContentLoaded', function() {
    var urun = getUrlParameter('urun');
    document.querySelector(".product-main-img").setAttribute("src",`assets/png-products/${urun}.png`)
    document.querySelector(".product-main-img").setAttribute("src",`assets/png-products/${urun}.png`)
    

    
    getProductDetails();
}, false);