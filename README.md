# fish_biscuits

fish flavored biscuits business site

- 02.19
  - added two html docs (index & sales) and one js file
  - added .eslintor file
  - added structure for index and sales pages
  - added style.css for styling and reset.css for fault tolerence
  - linked css sheets and added placeholder for font
  - added object literals containg data for different cities

- 2.20
  - finished building seattle js code for sales calculation, tested if populated in browser successfully, no console errors, amd pushed to main
  - applied same code structure to tokyo before adding to rest of the cities, not forgetting to add function calls at the bottom of doc, worked; repeat, (!!! note for future on avoiding repetitions/ something, something about constructor functions, shared prototype method, storing locations in one array, looping through that array to render)
  - pushed to main, moving on for now to other styling and editing
  - started applying styling
    - added black and orange banner (fix left and right margins(fixed through use of reset css... .__.))
      - centered text
      - !!! need to align nav items s-x-s !!!, added padding to top, bottom, and left
      - changed link color to black for active and visited
      - added grey-ish footer banner
      - refactored code to use element selectors, rather than classes for the main shared design elements across both pages

- 02.24
  - refactored js to simplify obj literals into using a constructor as well as a prototype for methods.
  - added call to prototype methods to call methods.
  - found error on why `<ul>` list were not populating from js code and refined method calls. will push and start working on table conversion.
  - modified `constructor` name from `Stores` to `Store` and updated relevant `prototypes` and invocations. also added not on why only two `prototypes` are called, not `.randomCustomers()`.

- 02.26.2026
  - major refactor to build table instead of list

- 02.28.2026
  - cleaned up js, added buildTable function as well appening proper html elements.
  - linked cutom fonts (3; headings, sales data, all other text).
  - started styling, but realized I should created a branch... created id's to use though..
  - lighthouse for lab06; overdue, serves for lab07 as well.
  - ![Lighthouse report of 92](images\lighthouse_lab06.png)

- 03.01.2026
  - misc styling like centering, aligning and font sizing
  - major restructure to table function and the way its built
    - separated header and footer rows to separate functions
  - added form submission elements to sales.html to add new stores and update table real time
  - restructured function/method invocations
  - added styling elements throughout

## Items completed

### Lab06

- Sales data section
  1. `this.minCustomers`, `this.maxCustomers`, `this.avgSale`
  2. `this.randomCustomers();`
  3. `this.calcSales();`
  4. `this.estimates[];`
  5. `this.render();`
  6. displayed on site; `sales.html`

- Home Page
  1. Our custom sans-serif Google Font for use in heading tags (<h# />) called “Righteous”
  2. A specified standard sans-serif web font for sales data (such as Arial, Verdana, or Helvetica). - Fredoka
  3. A specified standard serif web font for text (such as Georgia, Times). - Domine

-

  5. Header background: Black
  6. Header Navigation: Salmon background, black link text
  7. Page Background: White
  8. Be thorough in your implementation of the designed layout and overall organization of the page.
  9. Run a Lighthouse Accessibility report. In this module, push to achieve a score between 65-80. Add the screenshot of your score to your README.md.
  10. Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.h

### Lab07

1. Create a new branch. (table)
2. Replace all object literals for cookie stand with single constructor function. (`Store`)
3. Replace the lists of data and build table instead. (`buildTable`)
4. Display stores data in table. Break column by hour and complete each row with “Daily Location Total”. (`buildTable`)

-

1. Each cookie stand location has separate render() method that creates and appends row to the table. bottom of page (`[blank].render`)
2. The header row and footer row are each created in their own stand-alone function. (soon)
NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

## list of items left to do

- Home Page
  4. Specified different font colors for all three font uses.
