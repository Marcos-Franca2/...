
function insert(num){
    var number = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = number + num;
    var v1 = number.includes(`+-`)
    var v2 = number.includes(`+*`)
    var v3 = number.includes(`+/`)
    var v4 = number.includes(`++`)

    var b1 = number.includes(`--`)
    var b2 = number.includes(`-*`)
    var b3 = number.includes(`-/`)
    var b4 = number.includes(`-+`)

    var f1 = number.includes(`*-`)
    var f2 = number.includes(`**`)
    var f3 = number.includes(`*/`)
    var f4 = number.includes(`*+`)

    var g1 = number.includes(`/-`)
    var g2 = number.includes(`/*`)
    var g3 = number.includes(`//`)
    var g4 = number.includes(`/+`)
    if (v1 == true){
        n1 = number.replace(`+-`, `-`)
         window.document.getElementById(`result`).innerHTML = n1
    
    }else if (v2 == true){
        n1 = number.replace(`+*`, `*`)
         window.document.getElementById(`result`).innerHTML = n1
        }else if (v3 == true){
            n1 = number.replace(`+/`, `/`)
             window.document.getElementById(`result`).innerHTML = n1
            }else if (v4 == true){
                n1 = number.replace(`++`, `+`)
                 window.document.getElementById(`result`).innerHTML = n1
 }else if (b1 == true){
    n1 = number.replace(`--`, `-`)
    window.document.getElementById(`result`).innerHTML = n1
                
    }else if (b2 == true){
         n1 = number.replace(`-*`, `*`)
         window.document.getElementById(`result`).innerHTML = n1
            
        }else if (b3 == true){
             n1 = number.replace(`-/`, `/`)
             window.document.getElementById(`result`).innerHTML = n1
            }else if (b4 == true){
                n1 = number.replace(`-+`, `+`)
                 window.document.getElementById(`result`).innerHTML = n1
}else if (f1 == true){
    n1 = number.replace(`*-`, `-`)
     window.document.getElementById(`result`).innerHTML = n1

    }else if (f2 == true){
    n1 = number.replace(`**`, `*`)
     window.document.getElementById(`result`).innerHTML = n1

        }else if (f3 == true){
        n1 = number.replace(`*/`, `/`)
         window.document.getElementById(`result`).innerHTML = n1
            }else if (f4 == true){
            n1 = number.replace(`*+`, `+`)
             window.document.getElementById(`result`).innerHTML = n1
}else if (g1 == true){
    n1 = number.replace(`/-`, `-`)
     window.document.getElementById(`result`).innerHTML = n1

    }else if (g2 == true){
    n1 = number.replace(`/*`, `*`)
     window.document.getElementById(`result`).innerHTML = n1

        }else if (g3 == true){
        n1 = number.replace(`//`, `/`)
         window.document.getElementById(`result`).innerHTML = n1
            }else if (g4 == true){
            n1 = number.replace(`/+`, `+`)
             window.document.getElementById(`result`).innerHTML = n1}
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function calc(){
    var result = document.getElementById("result").innerHTML;
        if(result){
            document.getElementById('result').innerHTML = eval(result);
        }
    }