(async function () {
    'use strict';
    const ordersList = document.getElementById('orders');
    let allOrders = [];

    // SL - we dont really want this. We want items to be in orders...
    let allItems = [];

    class Item {
        constructor(itemName, price, quantity) {
            this.itemName = itemName;
            this.price = price;
            this.quantity = quantity;
        }
        // SL - as above not really wanted
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
                // SL - items are supposed to have price and we would need price * quantity here - but these orders dont have correct Item instances, they have the simple objects we got from json
                total += item.total;
            });
            return total;
        }
        // SL - dont think we want Order class to know about your particular list of orders. What if you want multiple lists? This should be your business not Orders.
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

    // SL - so item here is really all the orders. item.forEach looks wrong item is singular...
    // as above, we dont really want the Items living in a separate array, we want these to be stored in the orders
    function populateItems(item) {
        item.forEach(item => {
            item.items.forEach(item => {
                let itemName = item.item;
                let quantity = item.quantity;

                // SL - whats the need here for thePrice, price, and a function? and why a mapping function from order array?
                // what does order have to do with anything here? and the mapping is called on each order in the orders array
                // but you do the same thing each time (unrelated to the current order - you dont even accept the order) so rach items
                // price gets caluclated multiple times for no reason and then below you always take first[0] result
                // Why not just
                // let price = (item.total / item.quantity).toFixed(2)
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
            // SL - this is where you should be turning them into Items and passing the Items into the order
            let orderItems = order.items;

            // SL - this is a little unusual, why not just allOrders.push(new Order(...))
            // why should orders know about your particular list of orders? What if you want to keep multiple lists of orders (e.g. pickup vs delivery)?
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

        // SL - so now, since you didnt put the Items in the orders your trying to find them instead of being able to get them simply from each order. All this should be unnecessary
        let thisOrderItems = [];

        // SL - this doesnt work - you dont find carrots in second order. Your looping based on number of items in particular order
        for (let i = 0; i < order.orderItems.length; i++) {
            let item = order.orderItems[i].item;
            // SL - but you only look in 1 spot in the allItems array - and look in the wrong spot for all orders but first
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

// SL - 80 - I know you asked me about where to create the items, I hope you didnt misunderstand my answer. I suggested that you could create the items in the Order constructor, or create them outside and pass them in. You created them outside and kept them outside....