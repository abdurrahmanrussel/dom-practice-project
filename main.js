const milestonesData = data.data;

function loadMilestones() {
    const milestones = document.querySelector(".milestones");
    milestones.innerHTML = `${milestonesData.map(function(milestone) {
        return  `
          <div class="milestone border-b" id= "${milestone._id}">
            <div class="flex">
              <div class="checkbox" ><input type="checkbox" onclick= "markMilestone(this, ${milestone._id})" /></div>
              <div onclick= " openmilestone(this, ${milestone._id}) ">
                <p>
                  ${milestone.name}
                  ${milestone.description}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              <div class="module border-b">
             ${milestone.modules.map(function(module){
                    return `<div class="module border-b">
                    <p> ${module.name} </p>
              </div>`;
                }).join("")}
              </div>
            </div>
          </div>
        </div> `;
    }).join("")} `
}

function openmilestone(milestoneElement, id) {
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPannel = document.querySelector(".show");

  const active = document.querySelector(".active");


  if( active && !milestoneElement.classList.contains("active")) { 
    active.classList.remove("active");
    }

  milestoneElement.classList.toggle('active');

  if( ! currentPanel.classList.contains("show") && shownPannel != null) { 
  shownPannel.classList.remove("show");
  }

  currentPanel.classList.toggle('show');

  showMilestone(id);
}

function showMilestone(id) {
  const milestoneImage = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");


  milestoneImage.style.opacity = "0";
  milestoneImage.src = milestonesData[id].image;
  milestoneTitle.innerHTML = milestonesData[id].name;
  milestoneDetails.innerHTML = milestonesData[id].description;

}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function() {
  this.style.opacity =  "1";
}


function markMilestone(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);
  if(checkbox.checked) {
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  }

  else {
    doneList.removeChild(item);
    milestoneList.appendChild(item);
  }
}

loadMilestones();
