function toggleOffer(index, event) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const offerSections = document.querySelectorAll('.offer-section');
    const optionsContainers = document.querySelectorAll('.options-container');
    const selectedOptions = document.getElementById(`options-${index + 1}`);
    const selectedSection = offerSections[index];

    if (selectedOptions.contains(event.target)) {
        return;
    }

    if (radioButtons[index].checked && selectedOptions.classList.contains('active')) {
        selectedOptions.classList.remove('active');
        selectedSection.classList.remove('active');
    } else {
        radioButtons[index].checked = true;

        optionsContainers.forEach(container => {
            container.classList.remove('active');
        });
        offerSections.forEach(section => {
            section.classList.remove('active');
        });

        selectedOptions.classList.add('active');
        selectedSection.classList.add('active');


        offerSections.forEach((section, i) => {
            if (i === index) {
                section.style.borderColor = '#ff6b82';
            } else {
                section.style.borderColor = '#e0e0e0';
            }
        });


        const prices = [10.00, 18.00, 24.00];
        const total = document.querySelector('.footer span:last-child');
        total.textContent = `Total: $${prices[index].toFixed(2)} USD`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const offerSections = document.querySelectorAll('.offer-section');
    offerSections.forEach((section, index) => {
        section.addEventListener('click', (event) => toggleOffer(index, event));
    });
    toggleOffer(1, { target: document.body });
});