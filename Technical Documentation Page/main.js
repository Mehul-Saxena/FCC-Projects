function collapseNav() {
  [...sectionElements].forEach(element => {
    element.classList.remove("collapsed-content");
    element.classList.add("expanded-content");
  });
  navElement.classList.remove("expanded-nav");
  navElement.classList.add("collapsed-nav");
  collapseBtn.classList.remove("active-collapse-btn");
  collapseBtn.classList.add("passive-btn");
  expandBtn.classList.remove("passive-btn");
  expandBtn.classList.add("active-expand-btn");
}

function expandNav() {
  [...sectionElements].forEach(element => {
    element.classList.remove("expanded-content");
    element.classList.add("collapsed-content");
  });
  navElement.classList.remove("collapsed-nav");
  navElement.classList.add("expanded-nav");
  collapseBtn.classList.remove("passive-btn");
  collapseBtn.classList.add("active-collapse-btn");
  expandBtn.classList.remove("active-expand-btn");
  expandBtn.classList.add("passive-btn");
}

const collapseBtn = document.getElementById("collapse-nav-icon");
const expandBtn = document.getElementById("expand-nav-icon");
const sectionElements = document.getElementsByClassName("main-section");
const navElement = document.getElementById("navbar")
collapseBtn.addEventListener("click", collapseNav);
expandBtn.addEventListener("click", expandNav);
console.log(sectionElements)