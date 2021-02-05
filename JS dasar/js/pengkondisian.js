//pengkondisian if else
angka = 10;
if(angka % 2 == 0){
    console.log(angka +" adalah bilangan genap");
}else{
    console.log(angka +" adalah bilangan ganjil");
}

//pengkondisian if else if OR

nilai = 90;
if(nilai > 100){
    console.log("anda terlalu cerdas!");
}else if(nilai <= 100 || nilai >= 86){
    console.log("A");
}else if(nilai <= 85 || nilai >= 76){
    console.log("B");
}else if(nilai <= 75 || nilai>= 66){
    console.log("C");
}else{
    console.log("D");
}


//pengkondisian for if else if else plugin AND
for(i = 1; i <= 10; i++){
    if(i % 2 == 0 && i % 5 == 0 ){
        console.log("plugin");
    }else if (i %2 == 0){
        console.log("plug");
    }else if(i % 5== 0){
        console.log("in");
    }else{
        console.log(i);
    }
}

//pengkondisian switch case harga menu

let menu = 'milk';
switch (menu){
    case 'milk':
        console.log("Rp 3000");
        break;
    case 'cofee':
        console.log("Rp 3500");
        break;
    case 'tea':
        console.log("Rp 2500");
        break;
    default:
        console.log("anda salah memasukkan menu");
} 

//pengkondisian switch case product
let product = 'tunik';
switch(product){
    case 'bedak':
    case 'lipstick':
    case 'blushon':
    case 'maskara':
    case 'eyeliner':
        console.log("kosmetik");
        break;
    case 'tunik':
    case 'kemeja':
    case 'kaos':
        console.log("atasan");
        break;
    case 'rok plisket':
    case 'baggy pants':
    case 'rok sepan':
        console.log('bawahan');
        break
    default:
        console.log("bukan product kami");
}