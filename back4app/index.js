
const Parse = require('parse/node');
// app_ID e Javascript_ID respectivamente
Parse.initialize("YE8eQfVAPaI5JyBMaVTB7R4aayPSaRuwd3Sh0nmr", "GRVmAQtRl9IiITaLUxII3l3f0CKW8rFL2BXh5bDe"); 
Parse.serverURL = 'https://parseapi.back4app.com/';

// função pra chamar a função
async function chamarFunção() {
    console.log("Chamando a função 'hello'..."); 
    // o try catch basicamente vai lidar com erros, primeira vez usando mas foi intuitivo
    // nessa situação é possível usar o if/else, mas ainda sim usaria dentro do try catch
    try {
      const response = await Parse.Cloud.run('hello');
      console.log('Resposta da função Cloud Code:', response);
    } catch (error) {
      console.error('Erro ao chamar a função Cloud Code:', error);
    }
  }
chamarFunção();