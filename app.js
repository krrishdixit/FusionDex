
const wrapper = document.querySelector('.wrapper');
const numberOfBubbles = 15;

for (let i = 0; i < numberOfBubbles; i++) {
    // Create the bubble container
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Create the inner dot
    const dot = document.createElement('span');
    dot.classList.add('dot');
    bubble.appendChild(dot);

    // Set random position and animation duration
    bubble.style.top = `${Math.random() * 90}%`;
    bubble.style.left = `${Math.random() * 90}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s

    // Append the bubble to the wrapper
    wrapper.appendChild(bubble);
}
