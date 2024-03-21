
// Getting all the Wainwrights
const getAllWainwrights = async () =>{
    fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json')
    //.then(response => response.json()); 

    const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
    const jsonData = await response.json(); 
    return jsonData; 
}


const wainwrightsContainer = document.createElement("div");



document.querySelector("body").appendChild(wainwrightsContainer);


const button = document.querySelector("button")
button.addEventListener("click", () => {
    getAllWainwrights();
});


document.getElementById('wainwrightsData').addEventListener('click', async() =>{
    const results = await getAllWainwrights();
    results.forEach((result) =>{
       const paragraph = document.createElement("p");
       paragraph.innerText = result.name
       wainwrightsContainer.appendChild(paragraph);
    })
})






