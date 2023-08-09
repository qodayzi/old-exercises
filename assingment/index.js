document.querySelector("#add").addEventListener("click",function(){
    // 1.inu value ga an mel dhax dhigno 

    let ali = document.querySelector("#input").value

    // 2. ind element cusub samaysid 

    let div = document.createElement("div")



    div.innerHTML = ali



    // 3. add the new element to a parent

    document.querySelector(".tasks").appendChild(div)

    // 4.add class
    
    div.classList.add("task")




})

