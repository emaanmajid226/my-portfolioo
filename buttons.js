// Buttons action script
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons
    const buttons = document.querySelectorAll("a.btn, button.btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // stop empty link reload
            const text = btn.innerText.trim();

            // Example actions based on button text
            switch (text.toLowerCase()) {
                case "hire me":
                    // Open WhatsApp chat
                    window.open("https://wa.me/923215811901", "_blank");
                    break;

                case "contact me":
                    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
                    break;

                case "learn more":
                    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
                    break;

                case "order now":
                    alert("🚀 Order placed! I’ll reach out with details.");
                    break;

                case "pricing plan":
                    document.querySelector("#price").scrollIntoView({ behavior: "smooth" });
                    break;

                case "send message":
                    alert("✅ Your message has been sent (demo).");
                    break;

                default:
                    alert(`You clicked: ${text}`);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop default empty submission

        alert("✅ Thank you! Your message has been sent.");
        form.reset(); // clear form
    });
});
