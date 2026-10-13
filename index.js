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
   renderOrder(order)
}











