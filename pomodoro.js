let pomodoroTimer=document.querySelector("#timer");
let dakika=document.querySelector(".dakika");
let saniye=document.querySelector(".saniye");
let audio=new Audio('Ram Bell Sound.mp3');
const calisma=()=>{
    const interval=setInterval(()=>{
        if (dakika.textContent=="0" && saniye.textContent=="01") {
           dakika.textContent="0";
           saniye.textContent="00";
           clearInterval(interval);
           audio.play();
           setTimeout(() => {
               MolaAyarla();
           }, 1000);
       }
       else if(saniye.textContent=="00"){
           dakika.textContent-=1
           saniye.textContent="60";
           saniyeAzalt();
           
       }
       else if(saniye.textContent=="10"){
           saniye.textContent="09";
       }
       else if(saniye.textContent=="09"){
           saniye.textContent="08";
       }
       else if(saniye.textContent=="08"){
           saniye.textContent="07";
       }
       else if(saniye.textContent=="07"){
           saniye.textContent="06";
       }
       else if(saniye.textContent=="06"){
           saniye.textContent="05";
       }
       else if(saniye.textContent=="05"){
           saniye.textContent="04";
       }
       else if(saniye.textContent=="04"){
           saniye.textContent="03";
       }
       else if(saniye.textContent=="03"){
           saniye.textContent="02";
       }
       else if(saniye.textContent=="02"){
           saniye.textContent="01";
       }
       else if(saniye.textContent=="01"){
           saniye.textContent="00";
       }
       
       
       else if(dakika.textContent=="0" && saniye.textContent=="59"){
           saniyeAzalt();
       }
       
       else{
           
           saniyeAzalt();
       }
       
       
   },1000)
}
calisma();
const saniyeAzalt=()=>saniye.textContent-=1;
const calismaAyarla=()=>{
    dakika.textContent="25";
    saniye.textContent="00";
    info.textContent="Molaya kalan süre:";
    calisma();
}
const MolaAyarla=()=>{
    dakika.textContent="5";
    saniye.textContent="00";
    info.textContent="Molanın bitmesine kalan süre:";
    Mola();
}
let info=document.querySelector("#info");
const Mola=()=>{
    const molaInterval=setInterval(() => {
        
    if(dakika.textContent=="0" && saniye.textContent=="01"){
        dakika.textContent="0";
        saniye.textContent="00";
        clearInterval(molaInterval);
        audio.play();
        setTimeout(() => {
            calismaAyarla();
        }, 1000);
        
    }
    else if(saniye.textContent=="00"){
        dakika.textContent-=1
        saniye.textContent="60";
        saniyeAzalt();
        
    }
    else if(saniye.textContent=="10"){
        saniye.textContent="09";
    }
    else if(saniye.textContent=="09"){
        saniye.textContent="08";
    }
    else if(saniye.textContent=="08"){
        saniye.textContent="07";
    }
    else if(saniye.textContent=="07"){
        saniye.textContent="06";
    }
    else if(saniye.textContent=="06"){
        saniye.textContent="05";
    }
    else if(saniye.textContent=="05"){
        saniye.textContent="04";
    }
    else if(saniye.textContent=="04"){
        saniye.textContent="03";
    }
    else if(saniye.textContent=="03"){
        saniye.textContent="02";
    }
    else if(saniye.textContent=="02"){
        saniye.textContent="01";
    }
    else if(saniye.textContent=="01"){
        saniye.textContent="00";
    }
    else if(dakika.textContent=="0" && saniye.textContent=="59"){
        saniyeAzalt();
    }
    else{
        
        saniyeAzalt();
    }
    }, 1000);
}