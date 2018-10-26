function findObjPropsHasOwn(obj){
    let str= "";
for(let key in obj){
if( obj.hasOwnProperty(key)){
    str += key + ", "; 
}
}
str = str.substring(0,str.length-2);
return str;
}

console.log(findObjKeys({turtle: "a", b: "b", c: "c"}));

function findObjKeys(obj2){
    let arr= Object.keys(obj2);
    for (let i=0; i<arr.length-1;i++){
        arr[i]+= ",";
    }
    return arr.join(" ");
    
}