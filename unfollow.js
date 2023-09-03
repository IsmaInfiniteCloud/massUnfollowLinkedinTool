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
            // Look for a button with the text "Unfollow" and click it
            let confirmButtons = document.querySelectorAll('span.artdeco-button__text');
            for (let btn of confirmButtons) {
                if (btn.textContent.trim() === "Unfollow") {
                    btn.closest('button').click();
                    console.log('Clicked confirm button');
                    return;
                }
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
