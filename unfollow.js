console.log('Script started');

// Function to scroll down the page
function scrollDown() {
    let previousHeight = window.scrollY;
    window.scrollTo(0, previousHeight + 500);
    console.log('Scrolled to:', window.scrollY);
}

// Function to click "Unfollow" and confirm it
function clickUnfollowAndConfirm() {
    console.log('Trying to find unfollow buttons...');

    let unfollowButtonSelector = '.unfollow-button-class'; // Replace with the actual class or ID
    let unfollowButtons = document.querySelectorAll(unfollowButtonSelector);

    if (unfollowButtons.length > 0) {
        console.log(`Found ${unfollowButtons.length} unfollow buttons, clicking the first one...`);

        // Click the first "Unfollow" button
        unfollowButtons[0].click();

        // Wait for the popup to appear
        setTimeout(() => {
            console.log('Looking for confirm button in popup...');

            let confirmButton = document.querySelector('[data-test-dialog-primary-btn]');
            if (confirmButton) {
                console.log('Confirm button found, clicking...');
                confirmButton.click();
            } else {
                console.log('Confirm button not found.');
            }
        }, 2000);
    } else {
        console.log('No unfollow buttons found.');
    }
}

// Keep scrolling down the page every 3 seconds
let scrollInterval = setInterval(scrollDown, 3000);

// Keep checking for "Unfollow" buttons every 5 seconds
let checkInterval = setInterval(clickUnfollowAndConfirm, 5000);

// Stop after running for 5 minutes
setTimeout(() => {
    console.log('Stopping script...');
    clearInterval(scrollInterval);
    clearInterval(checkInterval);
}, 15 * 60 * 1000);
