function showSuccessMessage() {
    alert("Your changes saved successfully.");
}

function redirectToEditPage() {
    // Redirect to the edit page (replace 'edit.html' with the actual file name)
    window.location.href = 'edit.html';
}

function saveChanges() {
    // Placeholder function for saving changes
    alert("Changes saved successfully.");
}

function cancel() {
    // Placeholder function for canceling the edit
    // Redirect back to the main page (replace 'index.html' with the actual file name)
    window.location.href = 'index.html';
}

document.addEventListener("DOMContentLoaded", function() {
    createPieChart();
});

function createPieChart() {
    var ctx = document.getElementById('pieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['C-TE', 'C-EX', 'C-IN', 'C-RA'],
            datasets: [{
                data: [30, 20, 25, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            }]
        },
        options: {
            responsive: false, // Set to false to prevent automatic resizing
            maintainAspectRatio: false, // Set to false to allow the canvas to dynamically resize
            // Add other chart options as needed
        }
    });
}