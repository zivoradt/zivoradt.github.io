// script.js
const defaultLanguage = 'sr';
let currentLanguage = defaultLanguage;

function translate() {
    fetch(`translations-${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                element.innerText = data[key];
            });
        })
        .catch(error => console.error('Error fetching translation:', error));
}

// Call translate() when the page loads
document.addEventListener('DOMContentLoaded', translate);

// Example: Switch language
function switchLanguage(language) {
    // Remove 'lan-active' class from all buttons
    document.querySelectorAll('.nav-link').forEach(button => {
        button.classList.remove('lan-active');
    });

    // Add 'lan-active' class to the clicked button
    document.querySelector(`button[onclick="switchLanguage('${language}')"`).classList.add('lan-active');

    // Set the current language and trigger translation
    currentLanguage = language;
    translate();
}

function extractTranslationsFromHTML() {
    const translations = {};

    // Select all elements with the data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const value = element.textContent.trim();
        translations[key] = value;
    });

    console.log(translations); // Log the extracted translations to the console

    return translations;
}




