document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });

    const json = JSON.stringify(object);

    fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Add your SendGrid API key here
            "Authorization": "Bearer YOUR_SENDGRID_API_KEY"
        },
        body: json
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Message sent:", data);
            // Optionally, show a success message or redirect to a thank you page
        })
        .catch(error => {
            console.error("Error:", error);
            // Optionally, show an error message to the user
        });
});
