class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
            } else {
                console.log("Insufficient funds");
            }
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}


const account1 = new BankAccount(1001, "Kazi Shayem Mahamood", 200);
const account2 = new BankAccount(1002, "Kazi Shayek Mahamood", 500);
const account3 = new BankAccount(1003, "Kazi Shakib Mahamood", 600);


account1.deposit(200);
account1.withdraw(200);
account1.displayAccountInfo();

console.log("\n");

account2.deposit(500);
account2.withdraw(200);
account2.displayAccountInfo();

console.log("\n");

account3.deposit(300);
account3.withdraw(1000);
account3.displayAccountInfo();
