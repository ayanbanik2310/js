
let year = 2000;

if(year %400 == 0 || (year%4==0 && year%100!=0)){
    console.log(`year ${year} is leap year`);
}
else{
    console.log(`year ${year} is not leap year`);
}