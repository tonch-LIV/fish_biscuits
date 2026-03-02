'use strict'

const hours = [
  "6am","7am","8am","9am","10am","11am",
  "12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"
];

let allStores = [];

let table;
let tableHead;
let tableBody;
let tableFoot;

//-------------------------------------
//  constructor template for objects  |
//------------------------------------

function Store(name, phone, address, minCustomers, maxCustomers, avgSale) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.minCustomers = minCustomers;  // Store the min-            -------
    this.maxCustomers = maxCustomers;  // -max hourly customers,   |  #1  |
    this.avgSale = avgSale;            // and the average cookies per customer, in object properties.
    this.estimates = [];
    allStores.push(this);
}

//--------------------------
//  prototype for methods  |
//-------------------------

Store.prototype.randomCustomers = function() {                 // | #2 | generate random customers number to simulate hourly sales
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

// | #3 | Calculate & store simulated amounts of cookies purchased each hour, using average cookies purchased and random number of customers generated
Store.prototype.calcSales = function() {
    this.estimates = [];
    let total = 0;

    for (let i = 0; i < hours.length; i++) {
        let customers = this.randomCustomers();
        let cookies = Math.floor(customers * this.avgSale);
        this.estimates.push(cookies);
        total += cookies;
    }

    this.estimates.push(total);                             // | #4 | Store the results in array…  as a property of the object
};

Store.prototype.render = function() {                  
    // grabs tbody and creates tr
    let tr = document.createElement("tr")

    let nameCell = document.createElement("th");
    nameCell.textContent = this.name;
    tr.appendChild(nameCell);

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement("td");
        td.textContent = this.estimates[i];
        tr.appendChild(td);
};

    let totalCell = document.createElement("td");
    totalCell.textContent = this.estimates[this.estimates.length - 1];
    tr.appendChild(totalCell);

    tableBody.appendChild(tr);};

///-------------------------
//  Create Table for data  |
//-------------------------

function buildTableStructure() {
    // | #5 & 6 | Display the values of each array as unordered lists in the browser.
    table = document.getElementById("salesData"); //links DOM to HTML by id

    // creates structure
    tableHead = document.createElement("thead");
    tableBody = document.createElement("tbody");
    tableFoot = document.createElement("tfoot");
    // now, the appends
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    table.appendChild(tableFoot);
};

//////////
// new header function

function renderHeader() {
  let tr = document.createElement("tr");

  // empty corner
  let emptyTh = document.createElement("th");
  emptyTh.textContent = "";
  tr.appendChild(emptyTh);

    // hour columns, plural
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  
  // daily total column
  let totalTh = document.createElement("th");
  totalTh.textContent = "Daily Location Total";
  tr.appendChild(totalTh);

  tableHead.appendChild(tr);
};

//////////
// new footer function

function renderFooter() {
  let tr = document.createElement("tr");

  let totalLabel = document.createElement("th");
  totalLabel.textContent = "Totals";
  tr.appendChild(totalLabel);

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].estimates[i];
    }

    let td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }
  // Grand Total
  let grandTotal = 0;
  for (let i = 0; i < allStores.length; i++) {
    grandTotal += allStores[i].estimates[hours.length];
  }

  let grandTd = document.createElement("td");
  grandTd.textContent = grandTotal;
  tr.appendChild(grandTd);

  tableFoot.appendChild(tr);
};

/////////////////////////////////////////
// handler function for form submission

function handleSubmit(event) {
  event.preventDefault(); // self explanitory

  // grabs values from form input
  let name = event.target.name.value;
  let minCustomers = Number(event.target.minCustomers.value);
  let maxCustomers = Number(event.target.maxCustomers.value);
  let avgSale = Number(event.target.avgSale.value);

  // Create new store instance
  let newStore = new Store(name, "", "", minCustomers, maxCustomers, avgSale);

  newStore.calcSales();

  // Clear old table
  table.innerHTML = "";

  // Rebuild everything
  buildTableStructure();
  renderHeader();

  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

  renderFooter();

  // Reset form
  event.target.reset();
};

// --------------------------------------------
// New instances per city using costructors   |
//              and prototypes               |
// ------------------------------------------

const seattle = new Store("Seattle", "555-1590", "400 Broad St.", 23, 65, 6.3);
const tokyo = new Store("Tokyo", "213-1111", "1-1 Chiyoda", 3, 24, 1.2);
const oslo = new Store("Oslo", "200-1400", "Johanne Dybwads plass 1", 11, 38, 3.7);
const paris = new Store("Paris", "537-7377", "Pl. Charles de Gaulle", 20, 38, 2.3);
const lima = new Store("Lima", "321-7654", "Jr. Bolognesi 504", 2, 16, 4.6);

// ------------------------------------------------------------------------
// invoking/calling table and prototype methods to populate data on html  |
// -----------------------------------------------------------------------

// 1. Calculate sales for all stores
for (let i = 0; i < allStores.length; i++) {
  allStores[i].calcSales();
};

// 2. Build empty table structure
buildTableStructure();

// 3. Render header row
renderHeader();

// 4. Render each store row
for (let i = 0; i < allStores.length; i++) {
  allStores[i].render();
};

// 5. Render footer row
renderFooter();

///////////////
// form elements

let storeForm = document.getElementById("storeForm"); //links to html

storeForm.addEventListener("submit", handleSubmit);
