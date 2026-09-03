

document.addEventListener('DOMContentLoaded', () => {


    const topNav = document.getElementById('topNav');
    let lastScroll = 0;

    if (topNav) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 80) {
                topNav.classList.add('scrolled');
            } else {
                topNav.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }


    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);


    document.querySelectorAll('.plan-card').forEach(card => {
        revealObserver.observe(card);
    });


    document.querySelectorAll('.value-item').forEach(item => {
        revealObserver.observe(item);
    });


    document.querySelectorAll('.typo-word').forEach(word => {
        revealObserver.observe(word);
    });


    const cities = [
        { name: 'LOS ANGELES, CA', timezone: 'America/Los_Angeles' },
        { name: 'BARCELONA, SPAIN', timezone: 'Europe/Madrid' },
        { name: 'PARIS, FRANCE', timezone: 'Europe/Paris' },
        { name: 'HONG KONG, CHINA', timezone: 'Asia/Hong_Kong' },
    ];

    const cityClocks = document.getElementById('cityClocks');
    let currentCityIndex = 0;

    function formatTime(timezone) {
        const now = new Date();
        return now.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    function renderCityClock() {
        const city = cities[currentCityIndex];
        const time = formatTime(city.timezone);
        cityClocks.innerHTML = `<span class="city-clock">${city.name}  ${time}</span>`;
    }


    function rotateCities() {
        currentCityIndex = (currentCityIndex + 1) % cities.length;
        renderCityClock();
    }


    renderCityClock();


    setInterval(() => {
        renderCityClock();
    }, 1000);


    setInterval(rotateCities, 5000);


    const typoWords = document.querySelectorAll('.typo-word');

    function updateParallax() {
        const scrollY = window.scrollY;
        typoWords.forEach(word => {
            const speed = parseFloat(word.dataset.speed) || 0.5;
            const rect = word.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            const offset = (center - viewCenter) * speed * 0.08;
            word.style.transform = `translateX(${offset}px)`;
        });
        requestAnimationFrame(updateParallax);
    }

    requestAnimationFrame(updateParallax);


    document.querySelectorAll('.plan-features li').forEach(li => {
        li.addEventListener('mouseenter', () => {
            li.style.paddingLeft = '8px';
        });
        li.addEventListener('mouseleave', () => {
            li.style.paddingLeft = '0';
        });
    });

    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / centerY * -4;
            const rotateY = (x - centerX) / centerX * 4;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
