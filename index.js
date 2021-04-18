// Shop
let activeItem
document.querySelectorAll(".shop .item").forEach(item => {
    item.onclick = (e) => {
        const eItem = e.target.closest(".item")
        if (eItem.className.includes("active")) return
        if(activeItem) activeItem.className = 'item'
        eItem.classList.add("active")
        activeItem = eItem
    }
})