
  
var haut= window.innerHeight;
var scrl=document.querySelector('.scrol');
onscroll = function (){

    var Position = document.documentElement.scrollTop;
    if(Position <= haut )
       scrl.classList.add('dis');
    else
     scrl.classList.remove('dis');  
};
 var nom_marc=["samsung","iphone","xiomi","oppo"];

//    SAMSUNG
 var sam=[["Samsung Galaxy A02 Noir 32Go","Camera Frontale: 5MP","Camera Arrière: 13MP + 2MP","Ecran: 6.5","RAM: 3 Go","Stockage: 32 Go","Batterie: 5000mAh"],["Samsung Galaxy A01 Core Noir","Ecran 5.3","Définition HD","Capteur de proximité","1Go de mémoire + 16 Go de stockage","2 caméras 8 MP + 5 MP de selfie",""],["Samsung Galaxy A32 Noir","Ecran: 6.4” Infinity-U Display","Camera Frontale: 20 MP","Cameras Arrière: Principale 64 MP<br>Ultra large 8 MP<br>Profondeur 5 MP<br>Macro 5 MP","RAM: 6 GB","ROM: 128 GB","Batterie: 5000 mAh"],["Samsung Galaxy A52 Noir","Ecran: 6.5” Infinity-O Display","Camera Frontale: 32 MP","Cameras Arrière: Principale 64 MP<br>Ultra large 12 MP<br>Profondeur 5 MP<br>Macro 5 MP","RAM: 8 GB","ROM: 128 GB","Batterie: 4500 mAh"],["Samsung Galaxy A72 Noir ","Ecran: 6.7” Infinity-O Display","Camera Frontale: 32 MP","Cameras Arrière: Principale 64 MP<br>Ultra large 8 MP<br>Profondeur 12 MP<br>Macro 5 MP","RAM: 8 GB","ROM: 256 GB","Batterie: 5000 mAh"],["Infinix Hot 9 Play Noir Minuit 64GB + Gift Box","Ecran : 6,82\"","RAM : 4Go","ROM : 64Go","Batterie: 5000 mAh","",""]];
//    iPhone
var ipho=[["Apple iPhone 12 pro max 6,7\" 256 GB","Processeur   Apple A14 Bionic","Mémoire vive (RAM)  6 Go","Capacité  256 Go","Nombre de coeurs   6Puce graphique  Intégrée","garantie international 1 an",""],["Apple IPhone5S ","Écran: Écran 4.0 pouces 640 x 1136","CPU: Apple A7 / M7 Dual Core","Mémoire: 1 Go de RAM + 64 Go de ROM","Caméra arrière 8MP","Batterie: 1560 mAh","Système d'exploitation: iOS 7"],["Apple IPHONE 6S","ROM: 16 Go","RAM: 2 Go","Écran Retina HD avec 3D Touch","GARANTIE 2 ANS","",""],["Apple iPhone 11","Ecran : 6.1","RAM : 4Go","ROM : 64Go","Caméra principale : 12MP+12MP","CPU  :Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)",""],["Apple iPhone 12 pro max 6,7\"","Système  iOS 14","émoire vive (RAM)    6 Go","Capacité  128Go","RAM: 8 GB","Processeur   Apple A14 Bionic","garantie international 1 an"],["Apple IPHONE X 64 GO Silver Black","MÉMOIRE INTERNE: 64 GO","RAM: 3 GO","SYSTÈME D'EXPLOITATION: IOS","POIDS: 174G","",""]];
//    xiomi
var xiom=[["Xiaomi Redmi 9T Noir","Ecran : 6,53\" Full HD+","Camera frontale : 8MP+HDR","Camera arriere :<br> 48MP+8MP+2MP+2MP","RAM : 4 Go","ROM : 128 Go","Batterie : 6000mAh 18W FS"],["Xiaomi Redmi Note 10 Noir","Ecran : 6,43\"FHD+ SuperAMOLED","Caméra Arrière :<br> 48Mp+8Mp+2Mp+2Mp","Caméra Frontale : 13Mp","RAM : 6Go","ROM : 128Go","Batterie : 5000 33W FS"],["Xiaomi Redmi Note 10 Pro Noir","Ecran : 6,67\"FHD+ SuperAMOLED","Caméra Arrière : <br>108Mp+8Mp+5Mp+2Mp ","Caméra Frontale : 16Mp","RAM : 8Go","ROM : 128Go","Batterie : 5020 33W FS"],["Xiaomi Redmi 9A","Écran : 6,53\" HD+ Dot Drop","Camera frontale : 5 MP","Camera arriere : 13 MP","RAM : 2 Go","ROM : 32 Go","Batterie : 5000mAh"],["XIAOMI Mi 11 Lite 6.55","Selfie : 16 MP","RAM : 8Go","Capacité  128Go","Caméra principal : <br>64MP+8MP+5MP","Batterie : 4250 mAh,Fast charging 33W",""],["Xiaomi Redmi 9C Noir","Écran : 6,53\" HD+ Dot Drop","Camera frontale : 5 MP","Camera arriere : 13MP+2MP","RAM : 3 Go","ROM : 64 Go","Batterie : 5000 mAh"]];
//    oppo
var opp=[["Oppo A53 noir","RAM : 4Go","ROM : 64Go","Caméra Selfie: 8MP","Caméra arrière : 13MP+2MP+2MP","Batterie : 5000mAh",""],["Oppo A73 Bleu","Écran6.44”FHD AMOLED","RAM : 6Go","ROM :128Go","2 Cartes SIM + 1 carte SD3.0","Batterie  4015mAh",""],["Xiaomi Redmi Note 10 Pro Noir","Ecran : 6,67\"FHD+ SuperAMOLED","Caméra Arrière : <br>108Mp+8Mp+5Mp+2Mp ","Caméra Frontale : 16Mp","RAM : 8Go","ROM : 128Go","Batterie : 5020 33W FS"],["Xiaomi Redmi 9A ","Écran : 6,53\" HD+ Dot Drop","Camera frontale : 5 MP","Camera arriere : 13 MP","RAM : 2 Go","ROM : 32 Go","Batterie : 5000mAh"],["XIAOMI Mi 11 Lite 6.55","Selfie : 16 MP","RAM : 8Go","Capacité  128Go","Caméra principal : <br>64MP+8MP+5MP","Batterie : 4250 mAh,Fast charging 33W",""],["Oppo A12 Noir","Ecran: 6.22","RAM: 3Go","Stockage: 32GB","Résolution: 720x1520 pixels","Camera :13MP + 2MP + 5MP","Batterie : 41000 mAh"]];


function imge(V1,V2,tab)
 {
     img='<img src="images/'+nom_marc[V1]+'/'+V2+'.jpg">';
        document.write('<!DOCTYPE html><html> <head><title>site</title><link rel="stylesheet" type="text/css" href="styles/style-info.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body><div class="menu-top"><a href="index.html"><div class="partie-menu">Accueil</div></a><a href="contact.html"><div class="partie-menu">Contactez-Nous</div></a></div><div class="div-img">'+img+'</div><div class="informations"><strong><div class="nom">'+tab[V1][0]+'</div></strong><div class="info-phone" id="info"><table><tr><td>'+tab[V1][1]+'</td><td>'+tab[V1][2]+'</td></tr>   <tr><td>'+tab[V1][3]+'</td><td>'+tab[V1][4]+'</td></tr>      <tr><td>'+tab[V1][5]+'</td><td>'+tab[V1][6]+'</td></tr>   </table><a href="reservation.html"><div class="reserve">Réservation</div></a></div></div></div></div></body></html>');
}







