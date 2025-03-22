function createBankAccount(userBalance){
    let balance = userBalance;

    return {
        deposit : function(amount){
            balance += amount
            return balance;
        },
        withdraw : function(amount){
            if(balance > 0 && amount <= balance){
                balance -= amount;
                return balance;
            } else{
                return "Insufficient Fund";
            }
        },
        getBalance : function() {
            return balance;
        }
    }
}

const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120