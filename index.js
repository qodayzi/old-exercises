document.querySelector("#button").addEventListener("click",function(){

    let bill = document.querySelector("#input").value
    if (bill > 50 && bill <= 300 ){
        let tip = bill * 15 / 100
        document.querySelector("#result").innerHTML = "Result: " + tip
    }else if (bill > 300) {
        let tip = bill * 20/100
        document.querySelector("#result").innerHTML = "Result: " + tip
    }else{
        document.querySelector("#result").innerHTML = "Result: " + bill
    }

})