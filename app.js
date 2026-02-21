'use strict'

const hours = [
  "6am","7am","8am","9am","10am","11am",
  "12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"
];
///-------------------------------------
/// Object Literals for shop locations |
//-------------------------------------

let seattle = {
    name: "Seattle",
    phone: "555-1590",
    address: "400 Broad St.",
    minCustomers: 23, // Store the min-            -------
    maxCustomers: 65, // -max hourly customers,   |  #1  |
    avgSale: 6.3, // and the average cookies per customer, in object properties.
    estimates: [],
    randomCustomers: function() {               // | #2 | generate random customers number to simulate hourly sales
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    
    // | #3 | Calculate & store simulated amounts of cookies purchased each hour, using average cookies purchased and random number of customers generated
    calcSales: function() {
        this.estimates = [];
        let total = 0;

        for (let i = 0; i < hours.length; i++) {
            let customers = this.randomCustomers();
            let cookies = Math.floor(customers * this.avgSale);
            this.estimates.push(cookies);
            total += cookies;
        }

        this.estimates.push(total);  // | #4 | Store the results in array…  as a property of the object 
    },

    render: function() { // | #5 | Display the values of each array as unordered lists in the browser.
        let container = document.getElementById("salesData");

        let section = document.createElement("section");
        let h2 = document.createElement("h2");
        h2.textContent = this.name;
        section.appendChild(h2);

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
    },

    // do it like we did with Geno's age ...
    // estimate: this.estimates = generateEstimate( this.minCustomers, this.maxCustomers, this.avgSale )
}

let tokyo = {
    name: "Tokyo",
    phone: "213-1111",
    address: "1-1 Chiyoda",
    minCustomers: 3, // Store the min-             -------
    maxCustomers: 24, // -max hourly customers,   |  #1  |
    avgSale: 1.2, // and the average cookies per customer, in object properties.
    estimates: [],
    randomCustomers: function() {               // | #2 generate random customers number to simulate hourly sales |
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
},

    // do it like we did with Geno's age ...
    // estimate: this.estimates = generateEstimate( this.minCustomers, this.maxCustomers, this.avgSale )
}

let oslo = {
    name: "Oslo",
    phone: "200-1400",
    address: "Johanne Dybwads plass 1",
    minCustomers: 11, // Store the min-             -------
    maxCustomers: 38, // -max hourly customers,    |  #1  |
    avgSale: 3.7, // and the average cookies per customer, in object properties.
    estimates: [],
    randomCustomers: function() {               // | #2 generate random customers number to simulate hourly sales |
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
},

    // do it like we did with Geno's age ...
    // estimate: this.estimates = generateEstimate( this.minCustomers, this.maxCustomers, this.avgSale )
}

let paris = {
    name: "Paris",
    phone: "537-7377",
    address: "Pl. Charles de Gaulle",
    minCustomers: 20, // Store the min-             -------
    maxCustomers: 38, // -max hourly customers,    |  #1  |
    avgSale: 2.3, // and the average cookies per customer, in object properties.
    estimates: [],
    randomCustomers: function() {               // | #2 generate random customers number to simulate hourly sales |
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
},

    // do it like we did with Geno's age ...
    // estimate: this.estimates = generateEstimate( this.minCustomers, this.maxCustomers, this.avgSale )
}

let lima = {
    name: "Lima",
    phone: "321-7654",
    address: "Jr. Bolognesi 504",
    minCustomers: 2, // Store the min-              -------
    maxCustomers: 16, // -max hourly customers,    |  #1  |
    avgSale: 4.6, // and the average cookies per customer, in object properties.
    estimates: [],
    randomCustomers: function() {               // | #2 generate random customers number to simulate hourly sales |
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
},

    // do it like we did with Geno's age ...
    // estimate: this.estimates = generateEstimate( this.minCustomers, this.maxCustomers, this.avgSale )
}

// -------------------------------------
// calling the methods needed per city |
// ------------------------------------

// seattle
seattle.calcSales();
seattle.render();