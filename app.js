'use strict'

const hours = [
  "6am","7am","8am","9am","10am","11am",
  "12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"
];

let allStores = [];

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
    let tbody = document.querySelector("tbody")
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

    tbody.appendChild(tr);
};

///-------------------------
//  Create Table for data  |
//-------------------------

function buildTable() {
    // | #5 & 6 | Display the values of each array as unordered lists in the browser.
    let container = document.getElementById("salesData"); //links DOM to HTML by id

    // create section (within div, but appended later) and table elements (also appended later, but to section)
    let section = document.createElement("section");
    let table = document.createElement("table");
    // caption element with text content "created"(appended) inside
    let caption = document.createElement("caption")
    caption.textContent = "sales data totals per city and per hour";

    // table HEAD
    let thead = document.createElement("thead");
       // table row creation here for ONE top table row
    let headerRow = document.createElement("tr");
    let locationHeader = document.createElement("th"); // locations header
    locationHeader.textContent = "Location";
    headerRow.appendChild(locationHeader);

    for (let i = 0; i < hours.length; i++) {    // hours header
        let hourHeader = document.createElement("th");
        hourHeader.textContent = hours[i];
        headerRow.appendChild(hourHeader);
    }

    let totalsHeader = document.createElement("th");     //locations totals header
    totalsHeader.textContent = "Location Totals";
    headerRow.appendChild(totalsHeader);

    // table body
    let tbody = document.createElement("tbody");
    // footer row
    let tfoot = document.createElement("tfoot")
    // footer totals in here

    // now, the appends
    section.appendChild(table); // table is wrapped by section
    table.appendChild(caption); // caption inside table
    table.appendChild(thead); // heading inside table
    table.appendChild(tbody); //tbody inside table as well
    thead.appendChild(headerRow); // headerRow nested within thead
    table.appendChild(tfoot); // footer nested in table, to close out table

    // will need to move to own function once form comes into play
    // footer totals
    let footerRow = document.createElement("tr");

    // 1️ - "Totals" label cellbb
    let totalsLabel = document.createElement("th");
    totalsLabel.textContent = "Totals";
    footerRow.appendChild(totalsLabel);

    // 2️ - Hourly totals
    let grandTotal = 0;

    for (let i = 0; i < hours.length; i++) {

        let hourlyTotal = 0;

        for (let j = 0; j < allStores.length; j++) {
            hourlyTotal += allStores[j].estimates[i];
        }

        let td = document.createElement("td");
        td.textContent = hourlyTotal;
        footerRow.appendChild(td);

        grandTotal += hourlyTotal;
    }

    // 3️ - Grand total cell
    let grandTotalCell = document.createElement("td");
    grandTotalCell.textContent = grandTotal;
    footerRow.appendChild(grandTotalCell);

    tfoot.appendChild(footerRow);
    container.appendChild(section);
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

// seattle.randomCustomers();  -  No need to call since it is being called inside of calcSales()

// calc sales first
seattle.calcSales();
tokyo.calcSales();
oslo.calcSales();
paris.calcSales();
lima.calcSales();

// build table
buildTable();

// render store row
seattle.render();
tokyo.render();
oslo.render();
paris.render();
lima.render();
