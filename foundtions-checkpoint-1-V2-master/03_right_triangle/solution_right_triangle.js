function rightTriangle(num,fin="",temp=""){
  if(num ===0){
      let lastTwo = fin.length -1;
     fin= fin.substring(0,lastTwo);
      return fin;
  }
    for(let i= num; i>0; i--){
 temp += "*";
    }
    fin += temp+ "\n";
   return rightTriangle(num-1,fin);
    
}

console.log(rightTriangle(5));