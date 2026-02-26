'use strict'

const hours = [
  "6am","7am","8am","9am","10am","11am",
  "12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"
];

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

Store.prototype.render = function() {                  // | #5 & 6 | Display the values of each array as unordered lists in the browser.
    let container = document.getElementById("salesData"); //links DOM to HTML by id

// create section (within div, but appended later) and table elements (also appended later, but to section)
    let section = document.createElement("section");
    let table = document.createElement("table");

    // caption element with text content "created"(appended) inside
    let caption = document.createElement("caption")
    caption.textContent = "this table is meant to practice formatting / sales data totals per city and per hour";
    section.appendChild(caption); //move append later to end, now is fine here

    // table HEAD with text content
    let thead = document.createElement("thead");
    thead.textContent = "Sales Data per city and hour";

    /////////////////////////////////////////////////////////
    // table body
    let tbody = document.createElement("tbody");
    // now table content
    // table row creation here for ONE top table row
    let headerRow = createElement("tr");

    // creates first column header; name: Location, and appends to headerRow
    let locationHeader = document.createElement("th");
    locationHeader.textContent = "Location";
    headerRow.appendChild(locationHeader);

    // hours loop for all 14 hours of business, and add hour to header
    for (let i = 0; i < hours.length; i++) {
        let hourHeader = document.createElement("th")
        hourHeader.textContent = hours[i]
        headerRow.appendChild(hourHeader);
    }

    // cumilative total header
    let totalsHeader = document.createElement("th");
    totalsHeader.textContent = "Location Totals";
    headerRow.appendChild(headerRow);

    ////////////////////////////////////////////////////
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
    container.appendChild(section);


    let ul = document.createElement("ul");

    for (let i = 0; i < hours.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${hours[i]}: ${this.estimates[i]} cookies`;
        ul.appendChild(li);
    }

    let totalLi = document.createElement("li");
    totalLi.textContent = `Total: ${this.estimates[this.estimates.length - 1]} cookies`;
    ul.appendChild(totalLi);

    section.appendChild(ul);
    container.appendChild(section);
};

///----------------------------------------------
//  Object Literals for shop locations          |
//----------------------------------------------
// --------------------------------------------
// New instances per city using costructors   |
//              and prototypes               |
// ------------------------------------------

const seattle = new Store("Seattle", "555-1590", "400 Broad St.", 23, 65, 6.3);
const tokyo = new Store("Tokyo", "213-1111", "1-1 Chiyoda", 3, 24, 1.2);
const oslo = new Store("Oslo", "200-1400", "Johanne Dybwads plass 1", 11, 38, 3.7);
const paris = new Store("Paris", "537-7377", "Pl. Charles de Gaulle", 20, 38, 2.3);
const lima = new Store("Lima", "321-7654", "Jr. Bolognesi 504", 2, 16, 4.6);

// -----------------------------------------------
//  invoking the methods needed per city         |
//  deleted 02.24; refactored for constructors  |
// ---------------------------------------------
// --------------------------------------------------------------
// invoking/calling prototype methods to populate data on html  |
// -------------------------------------------------------------

// seattle.randomCustomers();  -  No need to call since it is being called inside of calcSales()
seattle.calcSales();
seattle.render();

// tokyo.randomCustomers();  -  "^ v"
tokyo.calcSales();
tokyo.render();

// oslo.randomCustomers();  -  " "
oslo.calcSales();
oslo.render();

// paris.randomCustomers();  -  " "
paris.calcSales();
paris.render();

// lima.randomCustomers();  -  " "
lima.calcSales();
lima.render();
