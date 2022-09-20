function check(num){

let factor=0;

for(let i=0;i<=num;i++){
if(num%i==0){
factor++;
}
}
if(factor==2){
return true;
}
return false;
}
let res=check(13);
if(res==true){
console.log("prime");
}
else{
console.log("not")
} 

