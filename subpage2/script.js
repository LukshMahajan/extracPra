function add(){
    if (localStorage.getItem("arrayMatteo")===null){
        let arr = [];
    }
    let sandType = null;
    let cheeseType = null;
    if (document.getElementById("op1")){
        sandType = "Artisan Italian";
    }
    if (document.getElementById("op2")){
        sandType = "Artisan Flatbread";
    }
    if (document.getElementById("op3")){
        sandType = "Hearty Multigrain";
    }
    if (document.getElementById("op4")){
        cheeseType = "American Cheese";
    }
    if (document.getElementById("op5")){
        cheeseType = "Pepper Jack";
    }
    if (document.getElementById("op6")){
        cheeseType = "Provolone";
    }
    if (document.getElementById("op7")){
        cheeseType = "Monterey Cheddar";
    }
    let sand = {sand:"Matteo's Sandwich",sandType:sandType,cheeseType:cheeseType};
    arr.push(sand);
    localStorage.setItem("arrayMatteo", JSON.stringify(arr));
}