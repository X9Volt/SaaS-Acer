const checkBtn = document.getElementById("checkBtn");

const result = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");



checkBtn.addEventListener("click", function(){


    let score = 0;


    // Get answers

    const landing = document.getElementById("landingYes").checked;

    const social = document.getElementById("socialYes").checked;

    const email = document.getElementById("emailYes").checked;

    const target = document.getElementById("targetYes").checked;



    // Weighted scoring

    if(target){
        score += 35;
    }

    if(email){
        score += 30;
    }

    if(landing){
        score += 20;
    }

    if(social){
        score += 15;
    }



    // Show result

    result.style.display = "block";


    scoreText.textContent = 
    `Your SaaS Score: ${score}/100`;



    // Animate progress bar

    progressBar.style.width = score + "%";



    // Feedback

    if(score >= 90){

        feedback.textContent =
        "Excellent foundation. Your SaaS has strong growth fundamentals.";

    }

    else if(score >= 60){

        feedback.textContent =
        "Good start. Improve your distribution and customer acquisition.";

    }

    else{

        feedback.textContent =
        "Your SaaS needs more groundwork. Focus on audience, marketing, and retention.";

    }


});