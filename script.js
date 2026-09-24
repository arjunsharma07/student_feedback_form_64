const form = document.getElementById("feedbackForm");

const feedbackList = document.getElementById("feedbackList");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    const div = document.createElement("div");

    div.classList.add("feedback");

    div.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Course:</strong> ${course}</p>
        <p>${feedback}</p>
    `;

    feedbackList.appendChild(div);

    form.reset();

});