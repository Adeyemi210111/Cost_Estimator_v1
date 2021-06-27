
let Pname = document.getElementById('Pname');
let Cname = document.getElementById('Cname');
let PM = document.getElementById('PM');
let PD = document.getElementById('PD');
let Pscale = document.getElementById('Pscale');
let Ptype = document.getElementById('Ptype');
let comm = document.getElementById('commission');
let find = document.getElementById('find');
let show = document.getElementById('show');
let check = document.getElementById('check');
let catOpt1 = document.getElementById('categoryOption1');
let resLev1 = document.getElementById('resourceLevel1');
let dur1 = document.getElementById('duration1');
let resNo1 = document.getElementById('resNo1');
let util1 = document.getElementById('util1');
let catOpt2 = document.getElementById('categoryOption2');
let resLev2 = document.getElementById('resourceLevel2');
let dur2 = document.getElementById('duration2');
let resNo2 = document.getElementById('resNo2');
let util2 = document.getElementById('util2');
let catOpt3 = document.getElementById('categoryOption3');
let resLev3 = document.getElementById('resourceLevel3');
let dur3 = document.getElementById('duration3');
let resNo3 = document.getElementById('resNo3');
let util3 = document.getElementById('util3');
let catOpt4 = document.getElementById('categoryOption4');
let resLev4 = document.getElementById('resourceLevel4');
let dur4 = document.getElementById('duration4');
let resNo4 = document.getElementById('resNo4');
let util4 = document.getElementById('util4');
let catOpt5 = document.getElementById('categoryOption5');
let resLev5 = document.getElementById('resourceLevel5');
let dur5 = document.getElementById('duration5');
let resNo5 = document.getElementById('resNo5');
let util5 = document.getElementById('util5');
let catOpt6 = document.getElementById('categoryOption6');
let resLev6 = document.getElementById('resourceLevel6');
let dur6 = document.getElementById('duration6');
let resNo6 = document.getElementById('resNo6');
let util6 = document.getElementById('util6');
let catOpt7 = document.getElementById('categoryOption7');
let resLev7 = document.getElementById('resourceLevel7');
let dur7 = document.getElementById('duration7');
let resNo7 = document.getElementById('resNo7');
let util7 = document.getElementById('util7');
let catOpt8 = document.getElementById('categoryOption8');
let resLev8 = document.getElementById('resourceLevel8');
let dur8 = document.getElementById('duration8');
let resNo8 = document.getElementById('resNo8');
let util8 = document.getElementById('util8');
let catOpt9 = document.getElementById('categoryOption9');
let resLev9 = document.getElementById('resourceLevel9');
let dur9 = document.getElementById('duration9');
let resNo9 = document.getElementById('resNo9');
let util9 = document.getElementById('util9');
let catOpt10 = document.getElementById('categoryOption10');
let resLev10 = document.getElementById('resourceLevel10');
let dur10 = document.getElementById('duration10');
let resNo10 = document.getElementById('resNo10');
let util10 = document.getElementById('util10');
let dur11 = document.getElementById('duration11');
let util11 = document.getElementById('util11');
let dur12 = document.getElementById('duration12');
let util12 = document.getElementById('util12');
let serial1 = document.getElementById('serial1');
let item1 = document.getElementById('item1');
let quant1 = document.getElementById('quant1');
let perc1 = document.getElementById('perc1');
let price1 = document.getElementById('price1');
let amount1 = document.getElementById('amount1');
let serial2 = document.getElementById('serial2');
let item2 = document.getElementById('item2');
let quant2 = document.getElementById('quant2');
let perc2 = document.getElementById('perc2');
let price2 = document.getElementById('price2');
let amount2 = document.getElementById('amount2');
let serial3 = document.getElementById('serial3');
let item3 = document.getElementById('item3');
let quant3 = document.getElementById('quant3');
let perc3 = document.getElementById('perc3');
let price3 = document.getElementById('price3');
let amount3 = document.getElementById('amount3');
let serial4 = document.getElementById('serial4');
let item4 = document.getElementById('item4');
let quant4 = document.getElementById('quant4');
let perc4 = document.getElementById('perc4');
let price4 = document.getElementById('price4');
let amount4 = document.getElementById('amount4');
let serial5 = document.getElementById('serial5');
let item5 = document.getElementById('item5');
let quant5 = document.getElementById('quant5');
let perc5 = document.getElementById('perc5');
let price5 = document.getElementById('price5');
let amount5 = document.getElementById('amount5');
let serial6 = document.getElementById('serial6');
let item6 = document.getElementById('item6');
let quant6 = document.getElementById('quant6');
let perc6 = document.getElementById('perc6');
let price6 = document.getElementById('price6');
let amount6 = document.getElementById('amount6');
let serial7 = document.getElementById('serial7');
let item7 = document.getElementById('item7');
let quant7 = document.getElementById('quant7');
let perc7 = document.getElementById('perc7');
let price7 = document.getElementById('price7');
let amount7 = document.getElementById('amount7');
let serial8 = document.getElementById('serial8');
let item8 = document.getElementById('item8');
let quant8 = document.getElementById('quant8');
let perc8 = document.getElementById('perc8');
let price8 = document.getElementById('price8');
let amount8 = document.getElementById('amount8');
let subTotal = document.getElementById('subTotal');
let vat = document.getElementById('VAT');
let totalDevCost = document.getElementById('totalDevCost');
let weeks = 4;
let vatRate = document.getElementById('rate');
let projName = document.getElementById('projName');





ResourceCat = ['backend engineer', 'frontend engineer', 'mobile engineer', 'qa engineer', 'product designer', 'product manager'];
EngResourceLev = ['intern', 'associate engineer 1', 'associate engineer 2', 'software engineer 1', 'software engineer 2', 'senior engineer 1', 'senior engineer 2', 'senior engineer 3', 'principal engineer 1', 'principal engineer 2', 'chief technology officer'];

DesResourceLev = ['intern', 'associate product designer 1', 'associate product designer 2', 'product designer 1', 'product designer 2', 'senior product designer 1', 'senior product designer 2', 'senior product designer 3', 'principal product designer 1', 'principal product designer 2', 'chief technology officer'];

ManResourceLev = ['intern', 'associate product manager 1', 'associate product manager 2', 'product manager 1', 'product manager 2', 'senior product manager 1', 'senior product manager 2', 'senior product manager 3', 'principal product manager 1', 'principal product manager 2', 'chief technology officer'];

ChargeRate = { int: 61667.70, AE1: 220067.7, AE2: 332951.03, SOE1: 497934.37, SOE2: 610817.7, SE1: 784484.37, SE2: 897367.7, SE3: 1027567.7, PE1: 1227334.37, PE2: 1357584.37, DH: 1748334.37, LT: 1262067.7};


check.addEventListener('click', calculate);


function calculate() {
    // result = ResourceCat[1];
    // show.innerHTML = ChargeRate.AE2
    let chargeRate1, chargeRate2, chargeRate3, chargeRate4, chargeRate5, chargeRate6, chargeRate7, chargeRate8, chargeRate9, chargeRate10, durMonth1, durMonth2, durMonth3, durMonth4, durMonth5, durMonth6, durMonth7, durMonth8, durMonth9, durMonth10, durMonth11, durMonth12, total1, total2, total3, total4, total5, total6, total7, total8, total9, total10, total11, total12, directCost, leadCost, totalCost, incidentals, markup, commission, findFee, price;
    let chargeRate11 = ChargeRate.LT;
    let chargeRate12 = ChargeRate.LT;   
    //first row
    if (resLev1.value == EngResourceLev[0]) {
        chargeRate1 = ChargeRate.int;
    } else if (resLev1.value == EngResourceLev[1]) {
        chargeRate1 = ChargeRate.AE1;
    } else if (resLev1.value == EngResourceLev[2]) {
        chargeRate1 = ChargeRate.AE2;
    } else if (resLev1.value == EngResourceLev[3]) {
        chargeRate1 = ChargeRate.SOE1;
    } else if (resLev1.value == EngResourceLev[4]) {
        chargeRate1 = ChargeRate.SOE2;
    } else if (resLev1.value == EngResourceLev[5]) {
        chargeRate1 = ChargeRate.SE1;
    } else if (resLev1.value == EngResourceLev[6]) {
        chargeRate1 = ChargeRate.SE2;
    } else if (resLev1.value == EngResourceLev[7]) {
        chargeRate1 = ChargeRate.SE3;
    } else if (resLev1.value == EngResourceLev[8]) {
        chargeRate1 = ChargeRate.PE1;
    } else if (resLev1.value == EngResourceLev[9]) {
        chargeRate1 = ChargeRate.PE2;
    } else if (resLev1.value == EngResourceLev[10]) {
        chargeRate1 = ChargeRate.DH;
    }else{
        chargeRate1 = 0;
    }
    //second row
    if (resLev2.value == EngResourceLev[0]) {
        chargeRate2 = ChargeRate.int;
    } else if (resLev2.value == EngResourceLev[1]) {
        chargeRate2 = ChargeRate.AE1;
    } else if (resLev2.value == EngResourceLev[2]) {
        chargeRate2 = ChargeRate.AE2;
    } else if (resLev2.value == EngResourceLev[3]) {
        chargeRate2 = ChargeRate.SOE1;
    } else if (resLev2.value == EngResourceLev[4]) {
        chargeRate2 = ChargeRate.SOE2;
    } else if (resLev2.value == EngResourceLev[5]) {
        chargeRate2 = ChargeRate.SE1;
    } else if (resLev2.value == EngResourceLev[6]) {
        chargeRate2 = ChargeRate.SE2;
    } else if (resLev2.value == EngResourceLev[7]) {
        chargeRate2 = ChargeRate.SE3;
    } else if (resLev2.value == EngResourceLev[8]) {
        chargeRate2 = ChargeRate.PE1;
    } else if (resLev2.value == EngResourceLev[9]) {
        chargeRate2 = ChargeRate.PE2;
    } else if (resLev2.value == EngResourceLev[10]) {
        chargeRate2 = ChargeRate.DH;
    }else{
        chargeRate2 = 0;
    }

    //Third row
    if (resLev3.value == EngResourceLev[0]) {
        chargeRate3 = ChargeRate.int;
    } else if (resLev3.value == EngResourceLev[1]) {
        chargeRate3 = ChargeRate.AE1;
    } else if (resLev3.value == EngResourceLev[2]) {
        chargeRate3 = ChargeRate.AE2;
    } else if (resLev3.value == EngResourceLev[3]) {
        chargeRate3 = ChargeRate.SOE1;
    } else if (resLev3.value == EngResourceLev[4]) {
        chargeRate3 = ChargeRate.SOE2;
    } else if (resLev3.value == EngResourceLev[5]) {
        chargeRate3 = ChargeRate.SE1;
    } else if (resLev3.value == EngResourceLev[6]) {
        chargeRate3 = ChargeRate.SE2;
    } else if (resLev3.value == EngResourceLev[7]) {
        chargeRate3 = ChargeRate.SE3;
    } else if (resLev3.value == EngResourceLev[8]) {
        chargeRate3 = ChargeRate.PE1;
    } else if (resLev3.value == EngResourceLev[9]) {
        chargeRate3 = ChargeRate.PE2;
    } else if (resLev3.value == EngResourceLev[10]) {
        chargeRate3 = ChargeRate.DH;
    }else{
        chargeRate3 = 0;
    }

    //fourth row
    if (resLev4.value == EngResourceLev[0]) {
        chargeRate4 = ChargeRate.int;
    } else if (resLev4.value == EngResourceLev[1]) {
        chargeRate4 = ChargeRate.AE1;
    } else if (resLev4.value == EngResourceLev[2]) {
        chargeRate4 = ChargeRate.AE2;
    } else if (resLev4.value == EngResourceLev[3]) {
        chargeRate4 = ChargeRate.SOE1;
    } else if (resLev4.value == EngResourceLev[4]) {
        chargeRate4 = ChargeRate.SOE2;
    } else if (resLev4.value == EngResourceLev[5]) {
        chargeRate4 = ChargeRate.SE1;
    } else if (resLev4.value == EngResourceLev[6]) {
        chargeRate4 = ChargeRate.SE2;
    } else if (resLev4.value == EngResourceLev[7]) {
        chargeRate4 = ChargeRate.SE3;
    } else if (resLev4.value == EngResourceLev[8]) {
        chargeRate4 = ChargeRate.PE1;
    } else if (resLev4.value == EngResourceLev[9]) {
        chargeRate4 = ChargeRate.PE2;
    } else if (resLev4.value == EngResourceLev[10]) {
        chargeRate4 = ChargeRate.DH;
    }else{
        chargeRate4 = 0;
    }

    //fifth row
    if (resLev5.value == EngResourceLev[0]) {
        chargeRate5 = ChargeRate.int;
    } else if (resLev5.value == EngResourceLev[1]) {
        chargeRate5 = ChargeRate.AE1;
    } else if (resLev5.value == EngResourceLev[2]) {
        chargeRate5 = ChargeRate.AE2;
    } else if (resLev5.value == EngResourceLev[3]) {
        chargeRate5 = ChargeRate.SOE1;
    } else if (resLev5.value == EngResourceLev[4]) {
        chargeRate5 = ChargeRate.SOE2;
    } else if (resLev5.value == EngResourceLev[5]) {
        chargeRate5 = ChargeRate.SE1;
    } else if (resLev5.value == EngResourceLev[6]) {
        chargeRate5 = ChargeRate.SE2;
    } else if (resLev5.value == EngResourceLev[7]) {
        chargeRate5 = ChargeRate.SE3;
    } else if (resLev5.value == EngResourceLev[8]) {
        chargeRate5 = ChargeRate.PE1;
    } else if (resLev5.value == EngResourceLev[9]) {
        chargeRate5 = ChargeRate.PE2;
    } else if (resLev5.value == EngResourceLev[10]) {
        chargeRate5 = ChargeRate.DH;
    }else{
        chargeRate5 = 0;
    }

    //Sixth row
    if (resLev6.value == EngResourceLev[0]) {
        chargeRate6 = ChargeRate.int;
    } else if (resLev6.value == EngResourceLev[1]) {
        chargeRate6 = ChargeRate.AE1;
    } else if (resLev6.value == EngResourceLev[2]) {
        chargeRate6 = ChargeRate.AE2;
    } else if (resLev6.value == EngResourceLev[3]) {
        chargeRate6 = ChargeRate.SOE1;
    } else if (resLev6.value == EngResourceLev[4]) {
        chargeRate6 = ChargeRate.SOE2;
    } else if (resLev6.value == EngResourceLev[5]) {
        chargeRate6 = ChargeRate.SE1;
    } else if (resLev6.value == EngResourceLev[6]) {
        chargeRate6 = ChargeRate.SE2;
    } else if (resLev6.value == EngResourceLev[7]) {
        chargeRate6 = ChargeRate.SE3;
    } else if (resLev6.value == EngResourceLev[8]) {
        chargeRate6 = ChargeRate.PE1;
    } else if (resLev6.value == EngResourceLev[9]) {
        chargeRate6 = ChargeRate.PE2;
    } else if (resLev6.value == EngResourceLev[10]) {
        chargeRate6 = ChargeRate.DH;
    }else{
        chargeRate6 = 0;
    }

    //Seventh row
    if (resLev7.value == EngResourceLev[0]) {
        chargeRate7 = ChargeRate.int;
    } else if (resLev7.value == EngResourceLev[1]) {
        chargeRate7 = ChargeRate.AE1;
    } else if (resLev7.value == EngResourceLev[2]) {
        chargeRate7 = ChargeRate.AE2;
    } else if (resLev7.value == EngResourceLev[3]) {
        chargeRate7 = ChargeRate.SOE1;
    } else if (resLev7.value == EngResourceLev[4]) {
        chargeRate7 = ChargeRate.SOE2;
    } else if (resLev7.value == EngResourceLev[5]) {
        chargeRate7 = ChargeRate.SE1;
    } else if (resLev7.value == EngResourceLev[6]) {
        chargeRate7 = ChargeRate.SE2;
    } else if (resLev7.value == EngResourceLev[7]) {
        chargeRate7 = ChargeRate.SE3;
    } else if (resLev7.value == EngResourceLev[8]) {
        chargeRate7 = ChargeRate.PE1;
    } else if (resLev7.value == EngResourceLev[9]) {
        chargeRate7 = ChargeRate.PE2;
    } else if (resLev7.value == EngResourceLev[10]) {
        chargeRate7 = ChargeRate.DH;
    }else{
        chargeRate7 = 0;
    }

    //Eighth row
    if (resLev8.value == EngResourceLev[0]) {
        chargeRate8 = ChargeRate.int;
    } else if (resLev8.value == EngResourceLev[1]) {
        chargeRate8 = ChargeRate.AE1;
    } else if (resLev8.value == EngResourceLev[2]) {
        chargeRate8 = ChargeRate.AE2;
    } else if (resLev8.value == EngResourceLev[3]) {
        chargeRate8 = ChargeRate.SOE1;
    } else if (resLev8.value == EngResourceLev[4]) {
        chargeRate8 = ChargeRate.SOE2;
    } else if (resLev8.value == EngResourceLev[5]) {
        chargeRate8 = ChargeRate.SE1;
    } else if (resLev8.value == EngResourceLev[6]) {
        chargeRate8 = ChargeRate.SE2;
    } else if (resLev8.value == EngResourceLev[7]) {
        chargeRate8 = ChargeRate.SE3;
    } else if (resLev8.value == EngResourceLev[8]) {
        chargeRate8 = ChargeRate.PE1;
    } else if (resLev8.value == EngResourceLev[9]) {
        chargeRate8 = ChargeRate.PE2;
    } else if (resLev8.value == EngResourceLev[10]) {
        chargeRate8 = ChargeRate.DH;
    }else{
        chargeRate8 = 0;
    }

    //Ninth row
    if (resLev9.value == EngResourceLev[0]) {
        chargeRate9 = ChargeRate.int;
    } else if (resLev9.value == EngResourceLev[1]) {
        chargeRate9 = ChargeRate.AE1;
    } else if (resLev9.value == EngResourceLev[2]) {
        chargeRate9 = ChargeRate.AE2;
    } else if (resLev9.value == EngResourceLev[3]) {
        chargeRate9 = ChargeRate.SOE1;
    } else if (resLev9.value == EngResourceLev[4]) {
        chargeRate9 = ChargeRate.SOE2;
    } else if (resLev9.value == EngResourceLev[5]) {
        chargeRate9 = ChargeRate.SE1;
    } else if (resLev9.value == EngResourceLev[6]) {
        chargeRate9 = ChargeRate.SE2;
    } else if (resLev9.value == EngResourceLev[7]) {
        chargeRate9 = ChargeRate.SE3;
    } else if (resLev9.value == EngResourceLev[8]) {
        chargeRate9 = ChargeRate.PE1;
    } else if (resLev9.value == EngResourceLev[9]) {
        chargeRate9 = ChargeRate.PE2;
    } else if (resLev9.value == EngResourceLev[10]) {
        chargeRate9 = ChargeRate.DH;
    }else{
        chargeRate9 = 0;
    }

    //Tenth row
    if (resLev10.value == EngResourceLev[0]) {
        chargeRate10 = ChargeRate.int;
    } else if (resLev10.value == EngResourceLev[1]) {
        chargeRate10 = ChargeRate.AE1;
    } else if (resLev10.value == EngResourceLev[2]) {
        chargeRate10 = ChargeRate.AE2;
    } else if (resLev10.value == EngResourceLev[3]) {
        chargeRate10 = ChargeRate.SOE1;
    } else if (resLev10.value == EngResourceLev[4]) {
        chargeRate10 = ChargeRate.SOE2;
    } else if (resLev10.value == EngResourceLev[5]) {
        chargeRate10 = ChargeRate.SE1;
    } else if (resLev10.value == EngResourceLev[6]) {
        chargeRate10 = ChargeRate.SE2;
    } else if (resLev10.value == EngResourceLev[7]) {
        chargeRate10 = ChargeRate.SE3;
    } else if (resLev10.value == EngResourceLev[8]) {
        chargeRate10 = ChargeRate.PE1;
    } else if (resLev10.value == EngResourceLev[9]) {
        chargeRate10 = ChargeRate.PE2;
    } else if (resLev10.value == EngResourceLev[10]) {
        chargeRate10 = ChargeRate.DH;
    }else{
        chargeRate10 = 0;
    }

    
    //computations
    durMonth1 = dur1.value / weeks;
    total1 = durMonth1 * resNo1.value * util1.value * chargeRate1;
    durMonth2 = dur2.value / weeks;
    total2 = durMonth2 * resNo2.value * util2.value * chargeRate2;
    durMonth3 = dur3.value / weeks;
    total3 = durMonth3 * resNo3.value * util3.value * chargeRate3;
    durMonth4 = dur4.value / weeks;
    total4 = durMonth4 * resNo4.value * util4.value * chargeRate4;
    durMonth5 = dur5.value / weeks;
    total5 = durMonth5 * resNo5.value * util5.value * chargeRate5;
    durMonth6 = dur6.value / weeks;
    total6 = durMonth6 * resNo6.value * util6.value * chargeRate6;
    durMonth7 = dur7.value / weeks;
    total7 = durMonth7 * resNo7.value * util7.value * chargeRate7;
    durMonth8 = dur8.value / weeks;
    total8 = durMonth8 * resNo8.value * util8.value * chargeRate8;
    durMonth9 = dur9.value / weeks;
    total9 = durMonth9 * resNo9.value * util9.value * chargeRate9;
    durMonth10 = dur10.value / weeks;
    total10 = durMonth10 * resNo10.value * util10.value * chargeRate10;
    durMonth11 = dur11.value / weeks;
    total11 = durMonth11 * util11.value * chargeRate11;
    durMonth12 = dur12.value / weeks;
    total12 = durMonth12 * util12.value * chargeRate12;
    directCost = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10;
    leadCost = total11 + total12;
    totalCost = directCost + leadCost;
    incidentals = 0.2 * totalCost;
    finalCost = totalCost + incidentals;
    if (Pscale.value == 'smallScale') {
        markup = 0.3;
    }else if(Pscale.value == 'mediumScale'){
        markup = 0.5;
    }else if(Pscale.value == 'largeScale'){
        markup = 0.7;
    }
    markupval = markup * finalCost;
    if (comm.checked == true) {
        commission = 0.1 * markupval;
    }else{
        commission = 0;
    }

    if (find.checked == true) {
        findFee = 0.1 * markupval;
    }else{
        findFee = 0;
    }
    
    let total = [total1, total2, total3, total4, total5,total6, total7, total8, total9, total10];
    let caty = [catOpt1, catOpt2, catOpt3, catOpt4, catOpt5, catOpt6, catOpt7, catOpt8, catOpt9, catOpt10];
        for (let i = 0; i < total.length; i++) {
            
            if (total[i] != 0) {
                console.log(caty[i].value + ' ' + '=' + ' ' + '₦' + total[i].toFixed(2));
                if (breakdown.checked == true) {
                    show.innerHTML += '<li>' + caty[i].value + ' ' + '=' + ' ' + '₦' + total[i].toFixed(2) + '</li>';
                    
                }
                
            }
        }
   
        //     if (catOpt1 == ' ') {
        //     console.log('empty');
        // }else{
        //     console.log(catOpt1);
        // }
    price = finalCost + markupval + commission + findFee;
    calcuprice1 = price * perc1.value;
    calcprice1 = calcuprice1.toLocaleString();
    price1.innerHTML = '₦' + calcprice1;
    calcamount1 = calcuprice1 * quant1.value;
    amount1.innerHTML = '₦' + calcamount1.toLocaleString();
    calcuprice2 = price * perc2.value;
    calcprice2 = calcuprice2.toLocaleString();
    price2.innerHTML = '₦' + calcprice2;
    calcamount2 = calcuprice2 * quant2.value;
    amount2.innerHTML = '₦' + calcamount2.toLocaleString();
    calcuprice3 = price * perc3.value;
    calcprice3 = calcuprice3.toLocaleString();
    price3.innerHTML = '₦' + calcprice3;
    calcamount3 = calcuprice3 * quant3.value;
    amount3.innerHTML = '₦' + calcamount3.toLocaleString();
    calcuprice4 = price * perc4.value;
    calcprice4 = calcuprice4.toLocaleString();
    price4.innerHTML = '₦' + calcprice4;
    calcamount4 = calcuprice4 * quant4.value;
    amount4.innerHTML = '₦' + calcamount4.toLocaleString();
    calcuprice5 = price * perc5.value;
    calcprice5 = calcuprice5.toLocaleString();
    price5.innerHTML = '₦' + calcprice5;
    calcamount5 = calcuprice5 * quant5.value;
    amount5.innerHTML = '₦' + calcamount5.toLocaleString();
    calcuprice6 = price * perc6.value;
    calcprice6 = calcuprice6.toLocaleString();
    price6.innerHTML = '₦' + calcprice6;
    calcamount6 = calcuprice6 * quant6.value;
    amount6.innerHTML = '₦' + calcamount6.toLocaleString();
    calcuprice7 = price * perc7.value;
    calcprice7 = calcuprice7.toLocaleString();
    price7.innerHTML = '₦' + calcprice7;
    calcamount7 = calcuprice7 * quant7.value;
    amount7.innerHTML = '₦' + calcamount7.toLocaleString();
    calcuprice8 = price * perc8.value;
    calcprice8 = calcuprice8.toLocaleString();
    price8.innerHTML = '₦' + calcprice8;
    calcamount8 = calcuprice8 * quant1.value;
    amount8.innerHTML = '₦' + calcamount8.toLocaleString();
    // show.innerHTML = 'total cost:' + totalCost + 'incidentals:' + incidentals + 'final cost:' + finalCost + 'markup:' + markup + 'markupvalue:' + markupval + 'commission:' + commission + 'finders fee' + findFee + 'price:' + price;
    // show.innerHTML = vatRate.value / 100;
    // show.innerHTML = 'lead 1 is' + total1 + ' ' + 'lead 2 is' + total2 + ' ' + 'totallead is:' + leadCost;
    sub = calcamount1 + calcamount2 + calcamount3 + calcamount4 + calcamount5 + calcamount6 + calcamount7 + calcamount8;
    sum = sub.toLocaleString();
    subTotal.innerHTML = '₦' + sum;
    vatamount = vatRate.value / 100 * sub;
    vata = vatamount.toLocaleString();
    vat.innerHTML =  '₦' + vata;
    totaldev = sub + vatamount;
    totaldevel = totaldev.toLocaleString();
    totalDevCost.innerHTML = '₦' + totaldevel;
    projName.innerHTML = Pname.value + ' ' + '-' + ' ' + 'Project Cost Estimate';
}

