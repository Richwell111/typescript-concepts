"use strict";
class BankAccount {
    owner;
    balance = 0;
    #otp = 123456;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0)
            throw new Error("amount must be positive");
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return this.#otp === code; //only accessibjle inside the class
    }
}
const acc = new BankAccount("Sangam");
acc.deposit(5000);
console.log(acc.getBalance());
// acc.balance
// acc.#otp
