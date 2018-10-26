function thrice(argFunc){
    let count=0;
    return function(){
        count++;
        if(count > 3){
            return undefined;
        }
        else{
          return  argFunc();

        }
    }
}