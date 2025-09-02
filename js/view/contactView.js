function render() {
    const main = document.getElementById("app");
    main.innerHTML = "";

    const container = document.createElement("section");
    container.classList.add("contact-container");

    const title = document.createElement("h2");
    title.textContent = "Get in Touch";
    container.appendChild(title);

    const form = document.createElement("form");
    form.classList.add("contact-form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Your name";
    nameInput.required = true;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "you@example.com";
    emailInput.required = true;
    form.appendChild(emailLabel);
    form.appendChild(emailInput);

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message";
    const messageInput = document.createElement("textarea");
    messageInput.placeholder = "Your message...";
    messageInput.rows = 5;
    messageInput.required = true;
    form.appendChild(messageLabel);
    form.appendChild(messageInput);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Send Message";
    submitBtn.classList.add("submit-btn");
    form.appendChild(submitBtn);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nameInput.value.trim(),
            from_email: emailInput.value.trim(),
            message: messageInput.value.trim(),
        };

        emailjs.send("service_fo6d44p", "template_cfb98sp", templateParams)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                alert("Failed to send message. Try again later.");
            });
    });

    container.appendChild(form);
    main.appendChild(container);
}

export default { render };