// Get the button and message elements

const thankYouButton = document.getElementById("thankYouButton");

const thankYouMessage = document.getElementById("thankYouMessage");


// Add a click event to the button

thankYouButton.addEventListener("click", function () {

    // Display a special thank-you message

    thankYouMessage.innerHTML =
        "🌟 Thank you, Sir Randy Bello! 🌟<br>" +
        "You make learning meaningful and inspiring.<br>" +
        "Happy Teachers' Day! ❤️";


    // Change the button text

    thankYouButton.textContent = "Thank You, Sir Randy! ❤️";


    // Create floating sparkle effects

    for (let i = 0; i < 20; i++) {

        const sparkle = document.createElement("span");

        sparkle.textContent = ["✨", "⭐", "💚", "🌟"][
            Math.floor(Math.random() * 4)
        ];

        sparkle.style.position = "fixed";

        sparkle.style.left = Math.random() * 100 + "vw";

        sparkle.style.top = "75vh";

        sparkle.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.zIndex = "9999";

        sparkle.style.transition =
            "transform 2s ease, opacity 2s ease";

        document.body.appendChild(sparkle);


        // Animate the sparkle upward

        requestAnimationFrame(() => {

            sparkle.style.transform =
                `translateY(-${150 + Math.random() * 300}px) rotate(180deg)`;

            sparkle.style.opacity = "0";

        });


        // Remove the sparkle after the animation

        setTimeout(() => {

            sparkle.remove();

        }, 2100);

    }

});