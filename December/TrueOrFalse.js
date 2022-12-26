function six(a, b){
    if (a==6 || b==6){
        return true
    }
    else if(a+b==6 || a-b==6){
        return true
    }
    else{
        return false
    }
}
console.log(six(18, 12));