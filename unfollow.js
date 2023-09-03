console.log('Script started');

// Function to scroll down
function scrollDown() {
    console.log(`Scrolled to: ${window.scrollY}`);
    window.scrollTo(0, window.scrollY + 500);
}

// Function to click the unfollow button and then confirm the unfollow action
function clickUnfollowAndConfirm() {
    console.log('Trying to find unfollow buttons...');

    let unfollowButtons = document.querySelectorAll('[aria-label="Click to stop following"]');
    if (unfollowButtons.length > 0) {
        console.log('Found unfollow button, clicking...');
        unfollowButtons[0].click();
        
        setTimeout(() => {
            console.log('Looking for name element in popup...');
            let nameElement = document.querySelector('[data-test-dialog-content]');
            if (nameElement) {
                console.log(`Name element found: ${nameElement.textContent}`);
            } else {
                console.log('Name element not found in popup.');
            }

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
