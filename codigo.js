

const boton = document.getElementById("rechazo");



const displace =()=>{

    boton.style.marginLeft == "200px" ? boton.style.marginLeft = "0px" : boton.style.marginLeft = "200px";

}

boton.addEventListener("mouseover", displace);


