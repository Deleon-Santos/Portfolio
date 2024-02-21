    var btn = document.querySelector(".btn")
    var container = document.querySelector(".oculta")

    btn.addEventListener("click", function(){
        if(container.Style.display ==="block"){
            container.Style.display ="none";
        }else{
            container.Style.display ="block";
        }
    });

