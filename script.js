class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
    deposit(quantity) {
      this.balance += quantity;
    }
    withdraw(quantity) {
        if(quantity <= this.balance) {
            this.balance -= quantity;
        } else {
            return `Insufficient funds`;
        }
    }
    }
    
    const account1 = new BankAccount(1000);
    
    console.log(account1.getBalance()); 
    
    account1.deposit(500);
    
    console.log(account1.getBalance()); 
    
    account1.withdraw(200);
    
    console.log(account1.getBalance()); 