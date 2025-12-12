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
})