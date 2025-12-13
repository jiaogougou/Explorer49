
//The JavaScript code language learning originates from the interaction course content in this semester's SCTM-2005.//

//mission button setting//
document.addEventListener("DOMContentLoaded",function(){
    //get all mission buttons
    const button=document.querySelectorAll(".missionBtn");
    let openPanel = null;
    let activeBtn = null

    button.forEach(button =>{
        button.addEventListener("click", function(){
            const panelClass = this.dataset.panel;
            const panel = document.querySelector("." + panelClass)

            if(!panel)return;
            //Set the state of the panel under different conditions
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

    //The panel with the added header has basic settings similar to the mission panel

//I update the panel setting, lthe footer panel and header panel use the same JavaScript control. 
// (Initially, I wanted to write separate scripts for the header panel and footer panel. But I realized their settings are essentially identical and can be combined)
    const allPanelBtns = document.querySelectorAll(".hList[data-hpanel]");
    let openHPanel = null;

    allPanelBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();

            const panelClass = this.dataset.hpanel;
            const panel = document.querySelector("." + panelClass);
            if (!panel) return;

            if (openHPanel && openHPanel !== panel) {
                openHPanel.classList.remove("show");
            }
            if (panel.classList.contains("show")) {
                panel.classList.remove("show");
                openHPanel = null;
            } else {
                panel.classList.add("show");
                openHPanel = panel;
            }
        });
    });

    //Click anywhere else on the page to close all panels
     document.addEventListener("click", function (e) {
        //check if it's click the button or the panel
        const isPanel = e.target.closest('.hpanel');
        const isPanelBtn = e.target.closest('.hList[data-hpanel]');

        if (!isPanel && !isPanelBtn && openHPanel) {
            openHPanel.classList.remove("show");
            openHPanel = null;
        }

        const isMissionPanel = e.target.closest('.panel');
        const isMissionBtn = e.target.closest('.missionBtn');
        
        if (!isMissionPanel && !isMissionBtn && openPanel) {
            openPanel.classList.remove("show");
            if (activeBtn) activeBtn.classList.remove("active");
            openPanel = null;
            activeBtn = null;
        }
    });
        
    //name label setting//
    const input = document.getElementById("playerName");
    const btn = document.getElementById("confirmName");
    const output = document.getElementById("saveName");

    function saveName() {
            const name = input.value.trim();
            if(name === "") return;

            //save name
            output.textContent = name;
            output.style.display = "block";

            //the name block disappear
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
});


