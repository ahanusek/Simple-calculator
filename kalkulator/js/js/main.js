var totalPallets = 0;
var selectedOption = "";
var totalCost = 0;
var allCost = 0;
var directCost = 0;
var totalDirectPallets = 0;


$(document).ready(function(){
    getData();
     
    
});


function getData() {
    $('.btn').on('click', function() {
    totalPallets = $('#volumePallets').val();
    selectedOption = $( "#selectOption option:selected").val();
    calculateDepot();
    showResult();
    calculateDirect();
    });
};

function calculateDepot() {
    if (selectedOption == 1) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*21.15;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 29.61;
            break;
            case 2: totalCost = parseInt(totalPallets)*26.78;
            break;
            case 3: totalCost = parseInt(totalPallets)*25.25;
            break;
            case 4: totalCost = parseInt(totalPallets)*23.72;
            break;
            case 5: totalCost = parseInt(totalPallets)*22.02;
            break;
            case 6: totalCost = parseInt(totalPallets)*24.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*25.76;
            break;
            case 8: totalCost = parseInt(totalPallets)*25.48;
            break;
            case 9: totalCost = parseInt(totalPallets)*23.80;
            break;
            default : alert("Błędna wartość");
            };
        };
        
    } else if(selectedOption == 2) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*27.45;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 32.85;
            break;
            case 2: totalCost = parseInt(totalPallets)*31.23;
            break;
            case 3: totalCost = parseInt(totalPallets)*29.97;
            break;
            case 4: totalCost = parseInt(totalPallets)*28.80;
            break;
            case 5: totalCost = parseInt(totalPallets)*26.82;
            break;
            case 6: totalCost = parseInt(totalPallets)*28.50;
            break;
            case 7: totalCost = parseInt(totalPallets)*30.71;
            break;
            case 8: totalCost = parseInt(totalPallets)*30.94;
            break;
            case 9: totalCost = parseInt(totalPallets)*29.82;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 3) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*47.25;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 51.80;
            break;
            case 2: totalCost = parseInt(totalPallets)*49.50;
            break;
            case 3: totalCost = parseInt(totalPallets)*48.20;
            break;
            case 4: totalCost = parseInt(totalPallets)*46.80;
            break;
            case 5: totalCost = parseInt(totalPallets)*43.80;
            break;
            case 6: totalCost = parseInt(totalPallets)*42.00;
            break;
            case 7: totalCost = parseInt(totalPallets)*45.89;
            break;
            case 8: totalCost = parseInt(totalPallets)*47.58;
            break;
            case 9: totalCost = parseInt(totalPallets)*47.60;
            break;
            default : alert("Błędna wartość");
            };
        };
    } else if(selectedOption == 4) {
        if(parseInt(totalPallets) >= 10) {
            totalCost = parseInt(totalPallets)*57.17;
        } else {
            switch(parseInt(totalPallets)) {
            case 1: totalCost = 58.50;
            break;
            case 2: totalCost = parseInt(totalPallets)*56.70;
            break;
            case 3: totalCost = parseInt(totalPallets)*54.90;
            break;
            case 4: totalCost = parseInt(totalPallets)*53.10;
            break;
            case 5: totalCost = parseInt(totalPallets)*49.90;
            break;
            case 6: totalCost = parseInt(totalPallets)*49.65;
            break;
            case 7: totalCost = parseInt(totalPallets)*54.49;
            break;
            case 8: totalCost = parseInt(totalPallets)*56.91;
            break;
            case 9: totalCost = parseInt(totalPallets)*57.68;
            break;
            default : alert("Błędna wartość");
            };
        };
    };
    totalCost = +totalCost.toFixed(2);
    allCost = totalCost + (totalPallets*27) //średni koszt pal per linia
};

function showResult() {
     $('#rrv').html('- Koszta RRV, w tym wypadku jest to <span class="colDist">'+totalCost + ' PLN</span>.');
     $('#depot').html('- Koszt transportu palet linią do oddziału dostarczającego, w tym wypadku jest to <span class="colDist"> '+(totalPallets*27) + ' PLN</span> (przyjęto średnio koszt 27pln/mpt).');
     $('#resultDepot').html(' '+allCost+' PLN.');
     allCostFix = +(allCost/totalPallets).toFixed(2);
     $('#averageDepot').html(' '+allCostFix+' PLN.');
     
 };

function calculateDirect() {
    directCost = $('#directCost').val();
    console.log(directCost);
    totalDirectPallets = parseInt(totalPallets);
    var addPallets = $('#extraPallets').val();
    if(addPallets > 0) {
        totalDirectPallets += parseInt(addPallets);
    };
    allCostDirect = +(directCost/totalDirectPallets).toFixed(2);
    console.log(totalDirectPallets);
    $('#allCost').html('Koszt dostawy bezpośredniej to po prostu cena frachtu, w tym wypadku jest to <span class="colDist">'+directCost+ ' PLN</span>.');
    $('#averageDirect').html('Średni koszt per paleta to <span class="colDist">'+allCostDirect+ ' PLN</span>.');
}