// Scroll every second
let scrollInterval = setInterval(() => {
    window.scrollTo(0, document.body.scrollHeight);
}, 1000);

// Click "Unfollow" and handle the confirmation dialog
function clickUnfollowAndConfirm() {
    let buttons = document.querySelectorAll('.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary');
    
    if (buttons.length > 0) {
        buttons[0].click();
        console.log('Clicked unfollow button');
        
        setTimeout(() => {
            // Assuming 'confirm-button' is the class of the "Confirm" button. 
            // You need to replace this with the actual class or identifier of the "Confirm" button.
            let confirmButton = document.querySelector('.confirm-button');
            if (confirmButton) {
                confirmButton.click();
                console.log('Clicked confirm button');
            }
        }, 500); // Wait half a second for the dialog to appear
    } else {
        console.log('No buttons found, scrolling...');
    }
}

// Keep checking for "Unfollow" buttons
let checkInterval = setInterval(clickUnfollowAndConfirm, 2000);

// Stop after running for some time, for example, 5 minutes
setTimeout(() => {
    clearInterval(scrollInterval);
    clearInterval(checkInterval);
    console.log('Stopped scrolling and unfollowing');
}, 5 * 60 * 1000);
