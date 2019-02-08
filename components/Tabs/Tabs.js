
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;

      // ?? //
        this.element = element
        console.log(element)

    // Get the custom data attribute on the Link
    // this.data;

      // -- // Get Custom Data Attribute on Link
        this.data = this.element.dataset.tab
        console.log(this.data)

    // Using the custom data attribute get the associated Item element
    // this.itemElement;

      // -- // using CURRENT DATA ATTRIBUTE --> select CURRENT ELEMENT
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
        console.log(this.itemElement)

    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;

      // -- // create NEW instance of Tabitem CONSTRUCTOR FUNCTION
        this.tabItem = new TabItem(this.itemElement)
    
    // Add a click event listener on this instance, calling the 
    // select method on click

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

      const links = document.querySelectorAll('.tabs-link').forEach( link => {
        link.classList.remove('tabs-link-selected')
      })

      // -- // ADD 'tabs-link-selected' to THIS link
        this.element.classList.add('tabs-link-selected')

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link
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

const links = document.querySelectorAll('.tabs-link');
  // console.log(links)
links.forEach( link => new TabLink(link))

