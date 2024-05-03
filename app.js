const express = require('express');
const app = express();

// Function to calculate optimal change
function change(cash) {
    if (cash < 2) return null; // Not possible to give back change
    let ten = Math.floor(cash / 10); // Number of ten-dollar bills
    cash %= 10;
    let five = Math.floor(cash / 5); // Number of five-dollar bills
    cash %= 5;
    let two = cash; // Remaining cash is in two-dollar bills
    return { two, five, ten };
}

// Route to handle incoming requests
app.get('/calculateChange', (req, res) => {
    const cash = req.query.cash; // Get the cash parameter from the request
    const result = change(cash); // Calculate optimal change
    res.json(result); // Send the result as JSON response
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
