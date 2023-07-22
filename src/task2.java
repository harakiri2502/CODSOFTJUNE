
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class WordCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String inputText = "";

        System.out.println("Word Counter");
        System.out.println("-------------");
        System.out.println("Enter 'T' to input text, or 'F' to input a file: ");
        String choice = scanner.nextLine();

        if (choice.equalsIgnoreCase("T")) {
            System.out.println("Enter the text:");
            inputText = scanner.nextLine();
        } else if (choice.equalsIgnoreCase("F")) {
            System.out.println("Enter the file path:");
            String filePath = scanner.nextLine();
            try {
                File file = new File(filePath);
                Scanner fileScanner = new Scanner(file);
                while (fileScanner.hasNextLine()) {
                    inputText += fileScanner.nextLine() + " ";
                }
                fileScanner.close();
            } catch (FileNotFoundException e) {
                System.out.println("File not found. Please check the file path.");
                System.exit(0);
            }
        } else {
            System.out.println("Invalid choice. Please try again.");
            System.exit(0);
        }

        String[] words = inputText.split("\\s+"); // Splitting the text into an array of words
        int wordCount = words.length; // Counting the number of words

        System.out.println("Total number of words: " + wordCount);
    }
}
