var x;
function show_hide(){
    if(a==1){
        document.getElementById("desplegar").style.display="none";
        document.getElementById("boton").innerHTML="Mostrar más"
        return a=0;
    }
    else{
        document.getElementById("desplegar").style.display="inline";
        document.getElementById("boton").innerHTML="Mostrar menos"
        return a=1;
    }
}

var a;
function show_hideA(){
    if(a==1){
        document.getElementById("desplegarA").style.display="none";
        document.getElementById("botonA").innerHTML="Mostrar más"
        return a=0;
    }
    else{
        document.getElementById("desplegarA").style.display="inline";
        document.getElementById("botonA").innerHTML="Mostrar menos"
        return a=1;
    }
}

var b;
function show_hideB(){
    if(b==1){
        document.getElementById("desplegarB").style.display="none";
        document.getElementById("botonB").innerHTML="Mostrar más"
        return b=0;
    }
    else{
        document.getElementById("desplegarB").style.display="inline";
        document.getElementById("botonB").innerHTML="Mostrar menos"
        return b=1;
    }
}

var c;
function show_hideC(){
    if(c==1){
        document.getElementById("desplegarC").style.display="none";
        document.getElementById("botonC").innerHTML="Mostrar más"
        return c=0;
    }
    else{
        document.getElementById("desplegarC").style.display="inline";
        document.getElementById("botonC").innerHTML="Mostrar menos"
        return c=1;
    }
}