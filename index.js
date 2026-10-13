import {menuArray} from "/data/data.js"
 const order = []


function getMenuItemHtml(arr){
   return  arr.map(item => `
   <div class="menu-item">
      <span class="emoji">${item.emoji}</span>
      <div class="item-description">
         <h3 class="item-name">${item.name}</h3>
         <p class="ingredients">${item.ingredients.join(", ")}</p>
         <p class="price">$${item.price}</p>
      </div>
      <button 
      class="add-btn"
      data-id="${item.id}">+</button>
   </div>`).join("")
}

document.getElementById("menu").innerHTML = getMenuItemHtml(menuArray)

document.addEventListener("click", function(e){
   const addBtn = e.target.closest(".add-btn")
   const removeBtn = e.target.closest(".remove-item")
   if (addBtn){
   const itemId = Number(addBtn.dataset.id)
   const item = menuArray.find(item => item.id === itemId)
   addToOrder(item)
   } else if (removeBtn){
      removeFromOrder(Number(removeBtn.dataset.index))
   }
   
})

function addToOrder(item) {
   order.push(item)
   getOrderHtml(order)
   getTotalOrderPrice(order)
}

function getOrderHtml(orderArr) {
   if (order.length ===0){
      renderOrder("")
      return
   }
   const orderHtml = orderArr.map(orderItem => `
         <div class="order-item">
            <h3 class="order-item-title">${orderItem.name}</h3>
            <button class="remove-item" 
            data-id="${orderItem.id}">remove</button>
            <p class="item-price">$${orderItem.price}</p>
      </div>`).join("")

   renderOrder(`<h2 class="section-title">Your order</h2><div class="order">${orderHtml}</div`)
}


function renderOrder(orderHtml){
   document.getElementById("order-container").innerHTML = orderHtml

}

function removeFromOrder(index){
   order.splice(index, 1)  
   getOrderHtml(order)
}

function getTotalOrderPrice(orderArr){
   const totalOrderPrice = orderArr.reduce((total, currntItem) => {
      return total = currntItem.price}, 0
   )
   renderTotalOrderPrice(totalOrderPrice)
}

function renderTotalOrderPrice (price){
   document.getElementById("total-order-price").innerHTML =`</div>
                    <div class="order-completion-section">
                        <h2>Total Price: <span class="total-price">$${Number(price)}</span></h2>
                        <button class="complete-order-btn" 
                        id="complete-order-btn">Complete order</button>
                    </div>` 
}




         






