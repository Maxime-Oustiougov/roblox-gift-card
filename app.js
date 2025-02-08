document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const surveyForm = document.getElementById('survey-form');
    const claimButton = document.getElementById('claim-button');
    const giftCode = document.getElementById('gift-code');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate storing user information securely
            console.log(`Storing user info: ${username}, ${email}, ${password}`);

            // Redirect to survey page
            window.location.href = 'survey.html';
        });
    }

    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Collect survey answers and process them as needed
            console.log('Survey submitted');
            
            // Redirect to reward page
            window.location.href = 'reward.html';
        });
    }

    if (claimButton) {
        claimButton.addEventListener('click', () => {
            giftCode.classList.remove('hidden');
            // Add confetti or sparkles animation here
            console.log('Gift code revealed');
        });
    }
});
