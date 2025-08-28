(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

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
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => {
                alert("✅ Message sent! I will reply soon.");
                form.reset();
            }, (error) => {
                alert("❌ Failed to send. Try again later.");
                console.error("EmailJS Error:", error);
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
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // stop the page from refreshing

            // Show demo notification
            alert("✅ Your message has been sent (demo).");

            // Clear the form
            form.reset();
        });
    }
});
