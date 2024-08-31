//your JS code here. If required.
// script.js

// Function to change the color of squares
function handleMouseOver(event) {
    // Get the id of the square that is being hovered over
    const hoveredSquareId = event.target.id;
    
    // Define the color codes
    const lavenderColor = '#E6E6FA';
    const coffeeColor = '#6F4E37';
    
    // Get all the squares
    const squares = document.querySelectorAll('.square');
    
    // Iterate through each square
    squares.forEach(square => {
        // Change color based on whether the square is the one being hovered over or not
        if (square.id === hoveredSquareId) {
            square.style.backgroundColor = lavenderColor;
        } else {
            square.style.backgroundColor = coffeeColor;
        }
    });
}

// Get all squares
const squares = document.querySelectorAll('.square');

// Add event listeners for mouseover event
squares.forEach(square => {
    square.addEventListener('mouseover', handleMouseOver);
});
