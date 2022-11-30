#!/usr/bin/env node

const axios  = require('axios'); // part le chercher dans les modules installer dans le package.json


 async function main () {

    
    try {
    let currency = 'USD'; 
    if (process.argv[2]) {
        currency = process.argv[2].toUpperCase();
    }else {
        let currency = 'USD';
    }

    
    

    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log(response);
   if (!response.data.bpi[currency]){

    throw new Error('devise inconnu');


   }
    
    const rate = response.data.bpi[currency].rate
    console.log(`1 BTC = ${rate} ${currency} `);
}catch(err){
    console.log(err);

}


}



main();
