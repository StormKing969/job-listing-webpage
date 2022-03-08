// Creating the variables
const companyName = document.querySelector(".company_name");

// Fetching the data
async function loadData() {
    const response = await fetch("./public/data/data.json");
    const data = await response.json();
    return data;
}

loadData().then(data => {
    // console.log(data);
    data.forEach(element => {
        console.log(element.company)
        companyName.innerHTML = element.company;
    });
})