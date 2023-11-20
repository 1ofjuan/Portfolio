// modal.js

// Function to open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal if the close button is clicked
document.getElementById("closeBtn").addEventListener("click", closeModal);

// Close the modal if the user clicks outside the modal
window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
});
