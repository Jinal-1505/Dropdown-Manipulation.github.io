const countryList = {
    "USA": {
        "Alabama": ["Birmingham", "Huntsville"],
        "Alaska": ["Anchorage", "Fairbanks"],
        "California": ["Los Angeles", "San Francisco"]
    },
    "INDIA": {
        "Punjab": ["p1", "p2"],
        "Gujarat": ["Ahmedabad", "Surat"],
        "Maharastra": ["m1", "m2"]
    },
};

const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const cityDropdown = document.getElementById("city");
const tableBody = document.querySelector("#table tbody");

function changeState() {
    const country = countryDropdown.value;
    const states = countryList[country];
    stateDropdown.innerHTML = "<option value=''>Select a state</option>";
    stateDropdown.disabled = false;
    cityDropdown.innerHTML = "<option value=''>Select a city</option>";

    for (const state in states) {
        const option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateDropdown.appendChild(option);
    }
}

function changeCity() {
    const country = countryDropdown.value;
    const state = stateDropdown.value;
    const cities = countryList[country][state];
    cityDropdown.innerHTML = "<option value=''>Select a city</option>";
    cityDropdown.disabled = false;
    for (const city of cities) {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        cityDropdown.appendChild(option);
    }
}

function displayTable() {
    const country = countryDropdown.value;
    const state = stateDropdown.value;
    const city = cityDropdown.value;
    const row = document.createElement("tr");
    const countryCell = document.createElement("td");
    const stateCell = document.createElement("td");
    const cityCell = document.createElement("td");
    countryCell.innerText = country;
    stateCell.innerText = state;
    cityCell.innerText = city;
    row.appendChild(countryCell);
    row.appendChild(stateCell);
    row.appendChild(cityCell);
    tableBody.appendChild(row);
}