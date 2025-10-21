// Check if the element exists before initializing Typed.js
const multipleTextElement = document.querySelector(".multiple-text");

if (multipleTextElement) {
    var typed = new Typed(multipleTextElement, {
        strings: ["Secretaria Acadêmica Unicesumar"], // Example change in strings
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000, // Increased backDelay for better readability
        loop: true
    });
} else {
    console.error("Element with class 'multiple-text' not found. Typed.js cannot initialize.");
}