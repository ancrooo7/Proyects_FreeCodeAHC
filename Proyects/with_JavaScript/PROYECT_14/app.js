const menu = [
    {
        id: 1,
        title: "Burger",
        category: "breackfast",
        price: 15.99,
        img: "./images/download.jpeg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 2,
        title: "Hot Dog",
        category: "dinner",
        price: 15.99,
        img: "./images/img.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 3,
        title: "Chips",
        category: "lunch",
        price: 15.99,
        img: "./images/img1.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 4,
        title: "Fried Chicken",
        category: "breackfast",
        price: 15.99,
        img: "./images/img2.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 5,
        title: "Roast",
        category: "breackfast",
        price: 15.99,
        img: "./images/img3.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 6,
        title: "Salad",
        category: "breackfast",
        price: 15.99,
        img: "./images/img4.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 7,
        title: "Sandwich",
        category: "lunch",
        price: 15.99,
        img: "./images/img5.jpeg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 8,
        title: "Breaded",
        category: "breackfast",
        price: 15.99,
        img: "./images/img6.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 9,
        title: "Taco",
        category: "dinner",
        price: 15.99,
        img: "./images/img7.jpeg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 10,
        title: "Empanada",
        category: "breackfast",
        price: 15.99,
        img: "./images/img8.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 11,
        title: "Noodles",
        category: "dinner",
        price: 15.99,
        img: "./images/img9.jpeg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 12,
        title: "Cupcakes",
        category: "lunch",
        price: 15.99,
        img: "./images/img10.jpeg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    },
    {
        id: 13,
        title: "Smoothie",
        category: "snakes",
        price: 15.99,
        img: "./images/img11.jpg",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque beatae itaque odio. Quis perspiciatis pariatur temporibus totam asperiores blanditiis, inventore ea neque dolor eos sapiente recusandae qui iste reprehenderit.'
    }
];  

const section = document.querySelector(".section");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category))
            values.push(item.category);
        return values;
    }, ["all"]
    );
    const displayBtns = categories.map((item) => {
        return `<button class="filter-btn" type="button" data-id=${item}>${item}</button>`;
    }).join('');
    btnContainer.innerHTML = displayBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(btnItem => {
        btnItem.addEventListener("click", e => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(menuItem => {
                if (menuItem.category === category) return menuItem;
            });
            if (category === "all") 
                displayMenuItems(menu);
            else
                displayMenuItems(menuCategory);
        })
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        
        return `<article class="menu-item">
                <img src=${item.img} alt=${item.title}>
                <header class="item-info">
                    <h3>${item.title}</h3>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="description">
                    ${item.desc}
                </p>
                </article>`;
    }).join('');
    section.innerHTML = displayMenu;
}