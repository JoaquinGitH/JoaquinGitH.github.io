
var a;
function show_hideA(){
    if(a==1){
        document.getElementById("desplegarA").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("desplegarA").style.display="none";
        return a=1;
    }
}

var b;
function show_hideB(){
    if(b==1){
        document.getElementById("desplegarB").style.display="inline";
        return b=0;
    }
    else{
        document.getElementById("desplegarB").style.display="none";
        return b=1;
    }
}

var c;
function show_hideC(){
    if(c==1){
        document.getElementById("desplegarC").style.display="inline";
        return c=0;
    }
    else{
        document.getElementById("desplegarC").style.display="none";
        return c=1;
    }
}