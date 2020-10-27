//Sets the Speed
const speed = 1000;
​
        // Makes href that points to somewhere on the page <a href="#whereever"> a smooth scroll. 
        $('a[href*="#"]')
            .filter((i, a) => a.getAttribute('href').startsWith('#'))
            .unbind('click.smoothScroll')
            .bind('click.smoothScroll', event => {
                const targetId = event.currentTarget.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);
​
                if (targetElement) {
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
                }
            });