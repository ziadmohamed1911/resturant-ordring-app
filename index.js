import { menuArray } from "./data/data.js"

const order = []

const menuEl = document.getElementById("menu")
const orderEl = document.getElementById("order-container")
const confirmationEl = document.getElementById("confirmation")
const modalEl = document.getElementById("payment-modal")
const paymentForm = document.getElementById("payment-form")

/* ---------- menu ---------- */

function getMenuItemHtml(arr) {
   return arr.map(item => `
      <div class="menu-item">
         <span class="emoji">${item.emoji}</span>
         <div class="item-description">
            <h3 class="item-name">${item.name}</h3>
            <p class="ingredients">${item.ingredients.join(", ")}</p>
            <p class="price">$${item.price}</p>
         </div>
         <button class="add-btn" data-id="${item.id}">+</button>
      </div>`).join("")
}

menuEl.innerHTML = getMenuItemHtml(menuArray)

/* ---------- clicks (one listener for everything) ---------- */

document.addEventListener("click", function (e) {
   const addBtn = e.target.closest(".add-btn")
   const removeBtn = e.target.closest(".remove-item")
   const completeBtn = e.target.closest(".complete-order-btn")

   if (addBtn) {
      addToOrder(Number(addBtn.dataset.id))
   } else if (removeBtn) {
      removeFromOrder(Number(removeBtn.dataset.index))
   } else if (completeBtn) {
      openModal()
   } else if (e.target === modalEl) {
      closeModal()                      // click on the dark backdrop
   }
})

/* ---------- order ---------- */

function addToOrder(itemId) {
   const item = menuArray.find(item => item.id === itemId)
   order.push(item)
   confirmationEl.innerHTML = ""        // hide the old "thanks" message
   renderOrder()
}

function removeFromOrder(index) {
   order.splice(index, 1)
   renderOrder()
}

function getTotalPrice(orderArr) {
   return orderArr.reduce((total, item) => total + item.price, 0)
}

function getOrderHtml(orderArr) {
   if (orderArr.length === 0) return ""

   const itemsHtml = orderArr.map((item, index) => `
      <div class="order-item">
         <h3 class="order-item-title">${item.name}</h3>
         <button class="remove-item" data-index="${index}">remove</button>
         <p class="item-price">$${item.price}</p>
      </div>`).join("")

   return `
      <h2 class="section-title">Your order</h2>
      <div class="order">${itemsHtml}</div>
      <div class="order-completion-section">
         <h2>Total Price: <span class="total-price">$${getTotalPrice(orderArr)}</span></h2>
         <button class="complete-order-btn">Complete order</button>
      </div>`
}

function renderOrder() {
   orderEl.innerHTML = getOrderHtml(order)
}

/* ---------- payment ---------- */

function openModal() {
   modalEl.classList.add("open")
}

function closeModal() {
   modalEl.classList.remove("open")
}

paymentForm.addEventListener("submit", function (e) {
   e.preventDefault()                   // stop the page from reloading
   const fullName = document.getElementById("full-name").value
   completeOrder(fullName)
})

function completeOrder(fullName) {
   order.length = 0                     // empty the order (it's a const array)
   renderOrder()
   paymentForm.reset()
   closeModal()
   showConfirmation(fullName)
}

function showConfirmation(fullName) {
   confirmationEl.innerHTML = `
      <div class="confirmation">
         <p></p>
      </div>`
   // textContent (not innerHTML) so a typed name can never inject HTML
   confirmationEl.querySelector("p").textContent =
      `Thanks ${fullName}, your order is on its way!`
}