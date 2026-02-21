function goToJobs(){
    let field = document.getElementById("careerField").value;

    if(field === "IT"){
        window.open("https://www.linkedin.com/jobs/search/?keywords=IT", "_blank");
    }
    else if(field === "Government"){
        window.open("https://www.naukri.com/government-jobs", "_blank");
    }
    else if(field === "Internship"){
        window.open("https://internshala.com/internships/", "_blank");
    }
    else{
        alert("Please select a field");
    }
}
function resumeTip(){
    let skill = document.getElementById("skillInput").value;
    let result = document.getElementById("resumeResult");

    if(skill === ""){
        result.innerHTML = "Enter a skill first.";
    }else{
        result.innerHTML = "Highlight measurable achievements in " + skill + ".";
    }
}

function calculateFinance(){
    let savings = parseInt(document.getElementById("savings").value);
    let tracking = parseInt(document.getElementById("tracking").value);

    let score = (savings + tracking) * 50;

    document.getElementById("financeResult").innerHTML =
    "Your Financial Independence Score: " + score + "%";
}

function healthCheck(){
    let exercise = parseInt(document.getElementById("exercise").value);

    if(exercise === 1){
        document.getElementById("healthResult").innerHTML =
        "Great! Regular activity improves well-being.";
    }else{
        document.getElementById("healthResult").innerHTML =
        "Consider light physical activity weekly.";
    }
}

function supportMessage(){
    let message = document.getElementById("emotionText").value.toLowerCase();
    let response = document.getElementById("supportResult");

    if(message.includes("sad") || message.includes("stress")){
        response.innerHTML = "You are not alone. Try speaking to someone you trust.";
    }
    else{
        response.innerHTML = "Thank you for sharing. You are strong and capable.";
    }
}