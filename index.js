import {menuArray} from "/data/data.js"
 const order = []


function getMenuItemHtml(arr){
   return  arr.map(item => `
   <div class="menu-item">
      <span class="emoji">${item.emoji}</span>
      <div class="item-description">
         <h3 class="item-name">${item.name}</h3>
         <p class="ingredients">${item.ingredients}</p>
         <p class="price">$${item.price}</p>
      </div>
      <button 
      class="add-btn"
      id="add-btn"
      data-id="${item.id}">+</button>
   </div>`).join("")
}

document.getElementById("menu").innerHTML = getMenuItemHtml(menuArray)

document.getElementById("menu").addEventListener("click", function(e){
   const btn = e.target.closest(".add-btn")
   if (!btn) return
   
   const itemId = Number(btn.dataset.id)
   const item = menuArray.find(item => item.id === itemId)
   addToOrder(item)
})

function addToOrder(item) {
   order.push(item)
   getOrderHtml(order)
}

function getOrderHtml(orderArr) {
   const orderHtml = orderArr.map(orderItem => `
      <div class="order-item">
         <h3 class="order-item-title">${orderItem.name}</h3>
         <button class="remove-item" 
         id="remove-item" data-id="${orderItem.id}">remove</button>
         <p class="item-price">$${orderItem.price}</p>
      </div>`).join("")

   renderOrder(`<h2 class="section-title">Your order</h2>${orderHtml}`)
}

function renderOrder(orderHtml){
   document.getElementById("order-container").innerHTML = orderHtml
}





         






// </div>
//                     <div class="order-completion-section">
//                         <h2>Total Price: <span class="total-price">$26</span></h2>
//                         <button class="complete-order-btn" 
//                         id="complete-order-btn">Complete order</button>
//                     </div>