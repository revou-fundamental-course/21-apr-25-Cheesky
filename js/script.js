var input = 0;
var output = 0;
var opsi = false;
document.getElementById("label-input").innerHTML = "Celcius (&deg;C)";
document.getElementById("label-output").innerHTML = "Fahrenheit (&deg;F)";

function reverse(){
    opsi = !opsi;
    if(opsi == true){
        document.getElementById("label-input").innerHTML = "Fahrenheit (&deg;F)";
        document.getElementById("label-output").innerHTML = "Celcius (&deg;C)";
    }
    else{
        document.getElementById("label-input").innerHTML = "Celcius (&deg;C)";
        document.getElementById("label-output").innerHTML = "Fahrenheit (&deg;F)";
    }

    return convert();
}
function convert(){
    if(opsi === true){
        // Fahrenheit to Celcius
        input = document.getElementById("input").value;
        output = (input - 32)/1.8;
        output = Math.round(output).toFixed(1);
        document.getElementById("result-sidepanel").innerHTML = output+"&deg;C";
        document.getElementById("result").innerHTML = output;
        document.getElementById("calculate-detail").innerHTML = "S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+input+"- 32) / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+(input - 32)+") / 1.8<br>"+
                                                                "S<sub>(&deg;C)</sub> = ("+(input - 32)/1.8+")";
        return tempcolor(input)
    }
    else{
        // Celcius to Fahrenheit
        input = document.getElementById("input").value;
        output = (input * 1.8)+32;
        output = Math.round(output).toFixed(1);
        document.getElementById("result-sidepanel").innerHTML = output+"&deg;F";
        document.getElementById("result").innerHTML = output;
        document.getElementById("calculate-detail").innerHTML = "S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> &times; 1,8) + 32 <br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+input+"&times; 1,8) + 32<br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+(input * 1.8)+") + 32<br>"+
                                                                "S<sub>(&deg;F)</sub> = ("+(input * 1.8 + 32)+")";
        return tempcolor(output);
    }
}

function tempcolor(x){
    if(x <= -51){
        // Unearthly Cold color rgba(60,49,151,255)
        document.getElementById("status").innerHTML = "Unearthly Cold";
        document.getElementById("result-color").style.backgroundColor = "rgba(60,49,151,255)";
    }
    else if(x<=-21){
        //Extreme Cold color rgba(38,0,207,255)
        document.getElementById("status").innerHTML = "Extreme Cold";
        document.getElementById("result-color").style.backgroundColor = "rgba(38,0,207,255)";
    }
    else if(x <=0){
        //Severe Cold rgba(71,98,251,255)
        document.getElementById("status").innerHTML = "Severe Cold";
        document.getElementById("result-color").style.backgroundColor = "rgba(71,98,251,255)";
    }
    else if(x <=40){
        //Cold rgba(159,202,253,255)
        document.getElementById("status").innerHTML = "Cold";
        document.getElementById("result-color").style.backgroundColor = "rgba(159,202,253,255)";
    }
    else if(x <=60){
        //Moderate rgba(150,204,23,255)
        document.getElementById("status").innerHTML = "Moderate";
        document.getElementById("result-color").style.backgroundColor = "rgba(150,204,23,255)";
    }
    else if(x <=91){
        //Warm rgba(250,208,36,255)
        document.getElementById("status").innerHTML = "Warm";
        document.getElementById("result-color").style.backgroundColor = "rgba(250,208,36,255)";
    }
    else if(x <=110){
        //Hot rgba(250,160,34,255)
        document.getElementById("status").innerHTML = "Hot";
        document.getElementById("result-color").style.backgroundColor = "rgba(250,160,34,255)";
    }
    else if(x <=140){
        //Severe Heat rgba(250,110,35,255)
        document.getElementById("status").innerHTML = "Severe Heat";
        document.getElementById("result-color").style.backgroundColor = "rgba(250,110,35,255)";
    }
    else if(x <=180){
        //Extreme Heat rgba(150,58,21,255)
        document.getElementById("status").innerHTML = "Extreme Heat";
        document.getElementById("result-color").style.backgroundColor = "rgba(150,58,21,255)";
    }
    else if(x <=210){
        //Unearthly Heat rgba(139,25,15,255)
        document.getElementById("status").innerHTML = "Unearthly Heat";
        document.getElementById("result-color").style.backgroundColor = "rgba(139,25,15,255)";
    }
    else{
        //Burning Heat black
        document.getElementById("status").innerHTML = "Burning Heat";
        document.getElementById("result-color").style.backgroundColor = "black";
    }
}