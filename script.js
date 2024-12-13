function toggleOffer(index, event) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const offerSections = document.querySelectorAll('.offer-section');
    const optionsContainers = document.querySelectorAll('.options-container');
    const selectedOptions = document.getElementById(`options-${index + 1}`);
    const selectedSection = offerSections[index];

    // Check if the click is inside the options container
    if (selectedOptions.contains(event.target)) {
        // If the click is inside the options container, do nothing
        return;
    }

    if (radioButtons[index].checked && selectedOptions.classList.contains('active')) {
        // If already selected and open, just close it
        selectedOptions.classList.remove('active');
        selectedSection.classList.remove('active');
    } else {
        // Select the radio button
        radioButtons[index].checked = true;

        // Close all option containers and remove active class from all sections
        optionsContainers.forEach(container => {
            container.classList.remove('active');
        });
        offerSections.forEach(section => {
            section.classList.remove('active');
        });

        // Open the selected option container and add active class to the section
        selectedOptions.classList.add('active');
        selectedSection.classList.add('active');

        // Update border color for the active section
        offerSections.forEach((section, i) => {
            if (i === index) {
                section.style.borderColor = '#ff6b82';
            } else {
                section.style.borderColor = '#e0e0e0';
            }
        });

        // Update total based on selection
        const prices = [10.00, 18.00, 24.00];
        const total = document.querySelector('.footer span:last-child');
        total.textContent = `Total: $${prices[index].toFixed(2)} USD`;
    }
}

// Initialize with the most popular option selected
document.addEventListener('DOMContentLoaded', () => {
    const offerSections = document.querySelectorAll('.offer-section');
    offerSections.forEach((section, index) => {
        section.addEventListener('click', (event) => toggleOffer(index, event));
    });
    toggleOffer(1, { target: document.body });
});