(async function () {
    'use strict';
    const ordersList = document.getElementById('orders');
    let allOrders = [];
    let allItems = [];

    class Item {
        constructor(itemName, price, quantity) {
            this.itemName = itemName;
            this.price = price;
            this.quantity = quantity;
        }
        addItem() {
            allItems.push(this);
        }
    }

    class Order {
        constructor(customer, address, orderItems) {
            this.customer = customer;
            this.address = address;
            this.orderItems = orderItems;
        }
        get total() {
            let total = 0;
            this.orderItems.forEach(item => {
                total += item.total;
            });
            return total;
        }
        addOrder() {
            allOrders.push(this);
        }
    }

    async function loadFile() {
        try {
            const r = await fetch('orders.json');
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return await r.json();
        } catch (e) {
            console.error(e);
        }
    }

    function populateItems(item) {
        item.forEach(item => {
            item.items.forEach(item => {
                let itemName = item.item;
                let quantity = item.quantity;
                let thePrice = 0;
                let price = order.map(() => {
                    thePrice = item.total / item.quantity;
                    return thePrice.toFixed(2);
                });

                let theItem = new Item(itemName, price[0], quantity);
                theItem.addItem();
            });

        });
    }
    function populateOrdes(order) {
        order.forEach(order => {
            let customer = order.customer;
            let address = order.address;
            let orderItems = order.items;
            let theOrder = new Order(customer, address, orderItems);
            theOrder.addOrder(theOrder);
        });

    }

    const order = await loadFile();
    populateItems(order);
    populateOrdes(order);

    console.log(allOrders);
    console.log(allItems);

    allOrders.forEach(order => {
        let orderListItem = document.createElement('li');
        orderListItem.innerHTML = `<hr> Customer: ${order.customer} <br> Address: ${order.address} <br> Total: $${order.total} <br>`;
        ordersList.appendChild(orderListItem);

        let thisOrderItems = [];

        for (let i = 0; i < order.orderItems.length; i++) {
            let item = order.orderItems[i].item;
            if (item === allItems[i].itemName) {
                thisOrderItems.push(allItems[i]);
            }
        }

        thisOrderItems.forEach(item => {
            let itemListItem = document.createElement('li');
            itemListItem.innerHTML = `<br> Item: ${item.itemName} <br> Quantity: ${item.quantity} <br> Price: $${item.price}`;
            ordersList.appendChild(itemListItem);
        });
    });
}());