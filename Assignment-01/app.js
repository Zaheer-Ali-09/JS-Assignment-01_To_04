// ===== Var detail ok Sir  =====

console.log(myName); // undefined because of hoisting

{
    var myName = "Zaheer";
    console.log(myName); // Zaheer

    myName = "Zaheer Soomro";
    console.log(myName); // Zaheer Soomro
}

console.log(myName); // Zaheer Soomro



// ===== lEt Detail Ha =====

try {
    console.log(myAge);
} catch {
    console.log("Let TDZ me hai is liye error aaya");
}

{
    let myAge = 22;
    console.log(myAge);

    myAge = 23;
    console.log(myAge);
}

try {
    console.log(myAge);
} catch {
    console.log("Let block scope hota hai");
}



// ===== Const =====

try {
    console.log(myFather);
} catch {
    console.log("Const TDZ me hai");
}

{
    const myFather = "Fareed";
    console.log(myFather);

    try {
        myFather = "Ghulam Fareed";
    } catch {
        console.log("Const ki value change nahi hoti");
    }
}

try {
    console.log(myFather);
} catch {
    console.log("Const block ke bahar exist nahi karta");
}