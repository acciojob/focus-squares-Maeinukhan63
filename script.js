// script.js

// Function to handle mouse over event
function handleMouseOver(event) {
    // Define colors
    const lavenderColor = '#E6E6FA'; // lavender
    const coffeeColor = '#6F4E37';   // coffee

    // Get the hovered square's id
    const hoveredSquareId = event.target.id;

    // Get all the squares
    const squares = document.querySelectorAll('.square');

    // Update colors based on the hovered square
    squares.forEach(square => {
        if (square.id === hoveredSquareId) {
            square.style.backgroundColor = lavenderColor;
        } else {
            square.style.backgroundColor = coffeeColor;
        }
    });
}

// Function to reset all squares to lavender color
function handleMouseOut() {
    const lavenderColor = '#E6E6FA'; // lavender
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.style.backgroundColor = lavenderColor;
    });
}

// Attach event listeners to squares
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', handleMouseOver);
    square.addEventListener('mouseout', handleMouseOut);
});
