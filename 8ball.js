function shakeMagic8Ball() {
    const question = prompt("What is to be asked of the Magic 8-Ball?");

    const alertContainer = document.getElementById("alert-container");
    alertContainer.innerHTML = ""; // Clear previous alert

    if (question === null || !question.trim()) {
        alertContainer.innerHTML = `
            <div class="alert alert-warning animate__animated animate__fadeIn" role="alert">
                Please ask a question! 🌸
            </div>
        `;
        document.getElementById('response-text').innerText = 'Reply Hazy, Try Again!';
        document.getElementById('response-text').className = 'lead text-danger';
        document.getElementById('response-img').src = 'maybe.png';
        return; // Stop execution
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0: answer = "Yes!"; image = "ballimg.png"; color = "text-success"; break;
        case 1: answer = "No!"; image = "ballimg1.png"; color = "text-danger"; break;
        case 2: answer = "Maybe..."; image = "ballimg2.png"; color = "text-warning"; break;
        case 3: answer = "Ask again later."; image = "ballimg3.png"; color = "text-info"; break;
        case 4: answer = "Absolutely!"; image = "ballimg4.png"; color = "text-success"; break;
        case 5: answer = "I don't think so."; image = "ballimg5.png"; color = "text-danger"; break;
        case 6: answer = "Uncertain..."; image = "ballimg6.png"; color = "text-secondary"; break;
        case 7: answer = "Definitely not."; image = "ballimg7.png"; color = "text-danger"; break;
    }

    // Update response text
    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.className = `display-4 text-center fw-bold ${color}`;

    // Update image
    const responseImg = document.getElementById('response-img');
    responseImg.src = image;

    // Reset animation to trigger swing every click
    responseImg.classList.remove("animate__swing");
    void responseImg.offsetWidth; // Trigger reflow
    responseImg.classList.add("animate__swing");
}
