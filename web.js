//mission button setting//
document.addEventListener("DOMContentLoaded",function(){
    const button=document.querySelectorAll(".missionBtn");
    let openPanel = null;
    let activeBtn = null

    button.forEach(button =>{
        button.addEventListener("click", function(){
            const panelClass = this.dataset.panel;
            const panel = document.querySelector("." + panelClass)

            if(!panel)return;

            if(openPanel && openPanel !==panel){
                openPanel.classList.remove("show");
        
            }
            if (activeBtn && activeBtn !== this){
                activeBtn.classList.remove("active");
            }

            if(panel.classList.contains("show")){
                panel.classList.remove("show");
                this.classList.remove("active");
                openPanel=null;
                activeBtn=null;
            }else {
                panel.classList.add("show");
                this.classList.add("active");
                openPanel=panel
                activeBtn= this
            }
        })
    })
    //name label setting//
    const input = document.getElementById("playerName");
    const btn = document.getElementById("confirmName");
    const output = document.getElementById("saveName");

    function saveName() {
            const name = input.value.trim();
            if(name === "") return;

            output.textContent = name;
            output.style.display = "block";

            input.style.display = "none";
            btn.style.display = "none";

        }

    //confirm the name//
    btn.addEventListener("click", saveName);

    input.addEventListener("keydown", function(e) {
        if(e.key === "Enter") {
            saveName();
        }
    });
})
