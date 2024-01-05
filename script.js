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