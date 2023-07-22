
// Online Java Compiler
// Use this editor to write, compile and run your Java code online

import java.util.Scanner;

class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            return true;
        }
        return false;
    }
}

class ATM {
    private BankAccount bankAccount;

    public ATM(BankAccount account) {
        bankAccount = account;
    }

    public void displayMenu() {
        System.out.println("Welcome to the ATM");
        System.out.println("1. Check Balance");
        System.out.println("2. Withdraw");
        System.out.println("3. Deposit");
        System.out.println("4. Quit");
    }

    public void performOption(int option) {
        Scanner scanner = new Scanner(System.in);
        double amount;

        switch (option) {
            case 1:
                System.out.println("Your balance is: $" + bankAccount.getBalance());
                break;
            case 2:
                System.out.print("Enter the amount to withdraw: $");
                amount = scanner.nextDouble();
                if (bankAccount.withdraw(amount)) {
                    System.out.println("Withdrawal successful. Remaining balance: $" + bankAccount.getBalance());
                } else {
                    System.out.println("Insufficient funds. Unable to withdraw.");
                }
                break;
            case 3:
                System.out.print("Enter the amount to deposit: $");
                amount = scanner.nextDouble();
                bankAccount.deposit(amount);
                System.out.println("Deposit successful. New balance: $" + bankAccount.getBalance());
                break;
            case 4:
                System.out.println("Thank you for using the ATM. Goodbye!");
                System.exit(0);
                break;
            default:
                System.out.println("Invalid option. Please try again.");
                break;
        }
    }
}

public class Main 
{
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000.0);
        ATM atm = new ATM(account);
        Scanner scanner = new Scanner(System.in);
        int option;

        while (true) {
            atm.displayMenu();
            System.out.print("Enter your choice: ");
            option = scanner.nextInt();
            atm.performOption(option);
            System.out.println();
        }
    }
}
