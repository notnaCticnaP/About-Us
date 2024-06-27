document.addEventListener("DOMContentLoaded", function() {
    // Target the circle element responsible for the mask
    const circleMask = document.querySelector("#mask circle");

    // Listen for mousemove event on the entire window
    window.addEventListener("mousemove", updateCircleMask);

    // Function to update the position of the circle mask
    function updateCircleMask(e) {
        // Get the x and y coordinates of the mouse cursor relative to the viewport
        let xCoor = e.clientX;
        let yCoor = e.clientY;

        // Update the attributes of the circle mask to match the cursor position
        circleMask.setAttribute("cx", xCoor);
        circleMask.setAttribute("cy", yCoor);
    }
});
