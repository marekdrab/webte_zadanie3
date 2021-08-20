var myList = [
    ["Europa", "Nemecko","VW"],
    ["Europa", "Nemecko","Audi"],
    ["Europa", "Francuzsko","Peugeot"],
    ["Europa","Francuzsko","Renault"],
    ["Europa","Taliansko","Fiat"],
    ["Europa", "Taliansko", "Alfa Romeo"],
    ["Asia","Japan","Toyota"],
    ["Asia","Japan","Nissan"],
    ["Asia","Korea","Kia"],
    ["Asia","Korea","Hyundai"]
];

function makeDropDown(data,filters,target){
    const filtered = filterArray(data,filters)
    const uniqueList = getUniqueValues(filtered,filters.length)
    populateDropDown(uniqueList,target)
}

function applyDropDown(){
    const selectLevel1Value = document.getElementById("level1").value
    const selectLevel2 = document.getElementById("level2")
    makeDropDown(myList,[selectLevel1Value],selectLevel2)
    applyDropDown2()
}
function applyDropDown2(){
    const selectLevel1Value = document.getElementById("level1").value
    const selectLevel2Value = document.getElementById("level2").value
    const selectLevel3 = document.getElementById("level3")
    makeDropDown(myList,[selectLevel1Value,selectLevel2Value],selectLevel3)
}

function afterDocLoads(){
    populateFirstLevel()
    applyDropDown()
}

function getUniqueValues(data,index){
    const unique = new Set();
    data.forEach(row => unique.add(row[index]));
    return [...unique];
}

function populateFirstLevel(){
    const unique = getUniqueValues(myList,0)
    const element = document.getElementById("level1")
    populateDropDown(unique,element)
}

function populateDropDown(uniqueList,element){
    element.innerHTML = ""
    uniqueList.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        element.appendChild(option);
    });
}

function filterArray(data,filters){
    return data.filter(row => filters.every((item,i)=>item===row[i]))
}


document.getElementById("level1").addEventListener("change",applyDropDown)
document.getElementById("level2").addEventListener("change",applyDropDown2)
document.addEventListener("DOMContentLoaded",afterDocLoads)