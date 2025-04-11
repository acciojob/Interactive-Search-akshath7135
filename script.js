//your JS code here. If required.
// Function to handle the search button click
function activateSearch() {
    const searchComponent = document.getElementById('searchComponent');
    const searchInput = document.getElementById('searchInput');

    // Add the 'active' class to the search component
    searchComponent.classList.add('active');

    // Focus the input field
    searchInput.focus();
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', activateSearch);