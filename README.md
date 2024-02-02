<h1>Shopping Cart Documentation</h1>

<h3>Components Overview</h3>
<h4>App Component</h4>

<h5>State Management</h5>
<ul>
  <li>useState Hook: Utilized for managing state within functional components.</li>
  <li>The application maintains two main pieces of state:</li>
  items: An array representing the available items for purchase.
  cart: An array representing the items added to the cart.
</ul>
<h5>Functions</h5>
<ul>
  <h6>addToCart(item):</h6>
  <li>Description: Adds an item to the cart or increments the quantity if the item is already in the cart.</li>
  <li>Parameters: item - The item object to be added to the cart.</li>
  <h6>Logic:</h6>
  <li>Checks if the item already exists in the cart.</li>
  <li>If the item exists, increments the quantity; otherwise, adds the item to the cart.</li>
</ul>


