document.addEventListener("DOMContentLoaded",function(){
    const button=document.querySelectorAll(".missionBtn");
    let openPanel = null;

    button.forEach(button =>{
        button.addEventListener("click", function(){
            const panelClass = this.dataset.panel;
            const panel = document.querySelector("." + panelClass)

            if(!panel)return;

            if(openPanel && openPanel !==panel){
                openPanel.classList.remove("show");
        
            }

            if(panel.classList.contains("show")){
                panel.classList.remove("show");
                openPanel=null;
            }else {
                panel.classList.add("show");
                openPanel=panel
            }
        })
    })
})