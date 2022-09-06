function vig(f){
  const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let k = document.getElementById('chave').value.toUpperCase();   
  let palavra = document.getElementById('palavra').value.toUpperCase();   

  if(k.length > palavra.length){
    alert("Chave deve ser menor ou igual a frase!");
    document.getElementById('chave').value='';

  }
 
  const diff = (palavra.length - k.length);
  const resto = diff - k.length;
  let kaux = k;
  if( resto >= 0){     
    let c = 0;
    let m = 0;
    while(c < diff){
      kaux = kaux+k.charAt(m);
      m++;
      if(m==k.length){
        m=0;
      }
      c++;
    }
  }else{
    kaux =kaux+k.substr(0,(k.length+resto));
  }
  
  k=kaux;
  document.getElementById('chave').value = k;

  let resultado='';

  for(let i = 0; i < palavra.length; i++){

    let letra = palavra[i];
    let letrak = k[i];
    
    if(f == 0){
      console.log('Encript');
      
      let p = alfabeto.indexOf(letra);      
      let posk = alfabeto.indexOf(letrak);

      let primeiraMetade = alfabeto.slice(0,posk);
      let segundaMetade = alfabeto.slice(posk,alfabeto.length);

      let newAlf = segundaMetade.concat(primeiraMetade);
      resultado = resultado+newAlf[p];
    }else{
      console.log('Decript');
         
      let posk = alfabeto.indexOf(letrak);

      let primeiraMetade = alfabeto.slice(0,posk);
      let segundaMetade = alfabeto.slice(posk,alfabeto.length);

      let newAlf = segundaMetade.concat(primeiraMetade);
      let p = newAlf.indexOf(letra);   
      resultado = resultado+alfabeto[p];
    }
    
  }

  document.getElementById('resultado').value=resultado;
}