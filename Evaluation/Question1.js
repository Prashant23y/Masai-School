function createOrderManager(){
    let orders = [];

    return {
        addOrder(order){
            orders.push(order);
        },
        updateOrder(id, newStatus){
            orders.forEach(order => {
                if(this.id === id){
                    this.status = newStatus;
                    this.item === item;
                }
            });
        },

        filterOrders(status){
            let res = orders.filter(order => order.status === status);
            return res;
        },
        sortOrders(by){
            return orders.sort((a, b) => {
                if(by === "date") return new Date(a.createdAt) - new Date(b.createdAt);
                if(by === "status") return a.status.localCompare(b.status);
            });
        },
        getTotalRevenue() {
            return orders.reduce((sum, order) => 
                sum + order.item*order.quantity, 0);
        },
        exportOrder() {
            return JSON.stringify(orders);
        }
    }


}

const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
console.log(manager.filterOrders("pending"));

// [
//     {
//       "id": 1,
//       "customerName": "Alice",
//       "items": [{ "name": "Laptop", "price": 1000, "quantity": 1 }],
//       "status": "pending",
//       "createdAt": "2024-03-01T00:00:00.000Z"
//     }
//   ]

console.log(manager.getTotalRevenue());

// 2000
  
  