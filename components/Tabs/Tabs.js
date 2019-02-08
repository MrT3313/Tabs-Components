
// class TabLink {
//   constructor(element) {
//     // Assign this.element to the passed in DOM element
//     // this.element;

//       this.element = element
    
//     // Get the custom data attribute on the Link
//     // this.data;
//       this.data = this.element.dataset.element
    
//     // Using the custom data attribute get the associated Item element
//     // this.itemElement;
//       this.itemElement = document.querySelector(``)
    
//     // Using the Item element, create a new instance of the TabItem class
//     // this.tabItem;
    
//     // Add a click event listener on this instance, calling the 
//     // select method on click
//       // -v1-ES6 // 
//         element.addEventListener('click', () => this.select())
//       // -v2-ES5 //
//         // element.addEventListener('click', this.select.bind(this))
//   };

//   select() {
//     // Get all of the elements with the tabs-link class
//     // const links;

//     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
//     // Array.from(links).forEach();

//     // Add a class named "tabs-link-selected" to this link
//     // this.element;
    
//     // Call the select method on the item associated with this link

//   }
// }

// class TabItem {
//   constructor(element) {
//     // Assign this.element to the passed in element
//     // this.element;
//     this.element = element
//   }

//   select() {
//     // Select all ".tabs-item" elements from the DOM
//     // const items;

//     // Remove the class "tabs-item-selected" from each element
    
//     // Add a class named "tabs-item-selected" to this element
//     //this.element;
//   }
// }

// /* START HERE: 

// - Select all classes named ".tabs-link" and assign that value to the links variable

// - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

// - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

// */

// links = document.querySelectorAll('.tabs-link');
//   console.log(links)
// links.forEach( element => new TabLink(element))

// --** --** --** --** --** --** --** --** --** --**
// -V2- BUILT WITH REWATCH LECTURE
// --** --** --** --** --** --** --** --** --** --**


class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;

    // Get the custom data attribute on the Link
    // this.data;

    // Using the custom data attribute get the associated Item element
    // this.itemElement;

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the 
    // select method on click

    // **REWATCH BUILD**
      // ?? //
        this.element = element
          console.log(element)
      // -- // Get Custom Data Attribute on Link
        this.data = this.element.dataset.tab
          console.log(this.data)
      // -- // using CURRENT DATA ATTRIBUTE --> select CURRENT ELEMENT
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
          console.log(this.itemElement)

      // -- // create NEW instance of Tabitem CONSTRUCTOR FUNCTION
        this.tabItem = new TabItem(this.itemElement)

      // -- // create CLICK event listener on instance & call SELECT METHOD
        element.addEventListener('click', () => {
          console.log(`you clicked me`)
          this.select()
        })
    
      
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' 
              //class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link

    // **REWATCH BUILD**
      // -- // REMOVE all 'tabs-link-selected' classes
        // -V1- //
          const links = document.querySelectorAll('.tabs-link').forEach( link => {
            link.classList.remove('tabs-link-selected')
          })
        // -V2- //
          // const links = Array.from(document.getElementsByClassName('.tabs-link')).forEach( link => {
          //   link.classList.remove('tabs-link-selected')
          // })
      // -- // ADD 'tabs-link-selected' to THIS link
          this.element.classList.add('tabs-link-selected')

      // Call LINKED method on TabItem
        this.tabItem.select()

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;

    // **REWATCH BUILD**
    this.element = element

  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;

    // **REWATCH BUILD**
    const items = document.querySelectorAll('.tabs-item').forEach( item => {
      console.log(item)
      console.log(this.element)
      item.classList.remove('tabs-item-selected')
    })

    this.element.classList.add('tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the 
links variable

- With your selection in place, now chain a .forEach() method onto 
the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new 
instance of TabLink and pass in each link as a parameter

*/

// *1* //
// -v1- //
  const links = document.querySelectorAll('.tabs-link');
    // console.log(links)
  links.forEach( link => new TabLink(link))
// -v2- //
// const links = document.querySelectorAll('.tab-link').forEach(link => new TabLink (link))
