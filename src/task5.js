
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Contact {
    
    private String name;
    private String phoneNumber;
    private String emailAddress;

    public Contact(String name, String phoneNumber, String emailAddress) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }

    public String getName() {
        return name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
}

class AddressBook {
    private List<Contact> contacts;

    public AddressBook() {
        contacts = new ArrayList<>();
    }

    public void addContact(Contact contact) {
        contacts.add(contact);
    }

    public void removeContact(Contact contact) {
        contacts.remove(contact);
    }

    public Contact searchContact(String name) {
        for (Contact contact : contacts) {
            if (contact.getName().equalsIgnoreCase(name)) {
                return contact;
            }
        }
        return null;
    }

    public List<Contact> getAllContacts() {
        return contacts;
    }
}

class AddressBookSystem {
    private AddressBook addressBook;
    private Scanner scanner;

    public AddressBookSystem() {
        addressBook = new AddressBook();
        scanner = new Scanner(System.in);
    }

    public void run() {
        boolean running = true;
        while (running) {
            System.out.println("Address Book System");
            System.out.println("--------------------");
            System.out.println("1. Add a new contact");
            System.out.println("2. Edit an existing contact");
            System.out.println("3. Search for a contact");
            System.out.println("4. Display all contacts");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    addContact();
                    break;
                case 2:
                    editContact();
                    break;
                case 3:
                    searchContact();
                    break;
                case 4:
                    displayAllContacts();
                    break;
                case 5:
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
                    break;
            }
            System.out.println();
        }
    }

    private void addContact() {
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        System.out.print("Enter phone number: ");
        String phoneNumber = scanner.nextLine();
        System.out.print("Enter email address: ");
        String emailAddress = scanner.nextLine();

        Contact contact = new Contact(name, phoneNumber, emailAddress);
        addressBook.addContact(contact);
        System.out.println("Contact added successfully.");
    }

    private void editContact() {
        System.out.print("Enter the name of the contact to edit: ");
        String name = scanner.nextLine();

        Contact contact = addressBook.searchContact(name);
        if (contact == null) {
            System.out.println("Contact not found.");
        } else {
            System.out.println("Enter new phone number (leave blank to keep the existing value): ");
            String phoneNumber = scanner.nextLine();
            if (!phoneNumber.isEmpty()) {
                contact = new Contact(contact.getName(), phoneNumber, contact.getEmailAddress());
            }

            System.out.println("Enter new email address (leave blank to keep the existing value): ");
            String emailAddress = scanner.nextLine();
            if (!emailAddress.isEmpty()) {
                contact = new Contact(contact.getName(), contact.getPhoneNumber(), emailAddress);
            }

            addressBook.removeContact(contact);
            addressBook.addContact(contact);
            System.out.println("Contact edited successfully.");
        }
    }

    private void searchContact() {
        System.out.print("Enter the name of the contact to search: ");
        String name = scanner.nextLine();

        Contact contact = addressBook.searchContact(name);
        if (contact == null) {
            System.out.println("Contact not found.");
        } else {
            System.out.println("Contact details:");
            System.out.println("Name: " + contact.getName());
            System.out.println("Phone Number: " + contact.getPhoneNumber());
            System.out.println("Email Address: " + contact.getEmailAddress());
        }
    }

    private void displayAllContacts() {
        List<Contact> contacts = addressBook.getAllContacts();
        if (contacts.isEmpty()) {
            System.out.println("No contacts found.");
        } else {
            System.out.println("All contacts:");
            for (Contact contact : contacts) {
                System.out.println("Name: " + contact.getName());
                System.out.println("Phone Number: " + contact.getPhoneNumber());
                System.out.println("Email Address: " + contact.getEmailAddress());
                System.out.println("--------------------");
            }
        }
    }
}

 class Main {
      public static void main(String[] args)
    
     {   
        AddressBookSystem addressBookSystem = new AddressBookSystem();
        addressBookSystem.run();
    }
}
