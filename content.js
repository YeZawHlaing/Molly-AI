// Function to inject Molly onto the page
function injectMolly() {
    // 1. Create the main wrapper container
    const rootContainer = document.createElement('div');
    rootContainer.id = 'molly-floating-root';

    // 2. Create Molly's speech bubble text
    const speechBubble = document.createElement('div');
    speechBubble.id = 'molly-speech-bubble';
    speechBubble.innerText = "Hi! I'm Molly. Go ahead and look around this page!";

    // 3. Create the circular container for her image
    const avatarContainer = document.createElement('div');
    avatarContainer.id = 'molly-avatar-container';

    // 4. Create the image tag for Molly's picture
    const avatarImg = document.createElement('img');
    avatarImg.id = 'molly-avatar-img';
    
    // Get the path to your image asset located inside your extension folder
    avatarImg.src = chrome.runtime.getURL('../images/molly.png');
    avatarImg.alt = 'Molly Avatar';

    // Assemble the elements together
    avatarContainer.appendChild(avatarImg);
    rootContainer.appendChild(speechBubble);
    rootContainer.appendChild(avatarContainer);

    // Inject the fully assembled Molly block directly into the webpage body
    document.body.appendChild(rootContainer);
}

// Execute the injection process once the page is fully loaded
if (document.readyState === 'complete') {
    injectMolly();
} else {
    window.addEventListener('load', injectMolly);
}