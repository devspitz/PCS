module.exports = class Cart {
  constructor(cart) {
    this.items = cart?.items || {};
  }

  addItem(itemId, quantity) {
    //{ 1: 2, 2: 5 }
    const q = this.items[itemId] || 0;
    this.items[itemId] = q + quantity;
  }

  getItems() {
    return Object.entries(this.items).map(([key, value]) => {
      const item = global.items.find(item => item.id === +key);
      return {
        item,
        subtotal: (item.price * value).toFixed(2)//its a string
      };
    })
  }
}