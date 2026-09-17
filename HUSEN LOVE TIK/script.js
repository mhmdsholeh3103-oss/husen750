const zodiacData = {

    aries: {
        name: "Aries",
        icon: "♈"
    },

    taurus: {
        name: "Taurus",
        icon: "♉"
    },

    gemini: {
        name: "Gemini",
        icon: "♊"
    },

    cancer: {
        name: "Cancer",
        icon: "♋"
    },

    leo: {
        name: "Leo",
        icon: "♌"
    },

    virgo: {
        name: "Virgo",
        icon: "♍"
    },

    libra: {
        name: "Libra",
        icon: "♎"
    },

    scorpio: {
        name: "Scorpio",
        icon: "♏"
    },

    sagittarius: {
        name: "Sagittarius",
        icon: "♐"
    },

    capricorn: {
        name: "Capricorn",
        icon: "♑"
    },

    aquarius: {
        name: "Aquarius",
        icon: "♒"
    },

    pisces: {
        name: "Pisces",
        icon: "♓"
    }

};


// Kombinasi kecocokan khusus

const compatibility = {

    aries: {
        taurus: 72,
        gemini: 89,
        cancer: 64,
        leo: 96,
        virgo: 67,
        libra: 85,
        scorpio: 78,
        sagittarius: 94,
        capricorn: 69,
        aquarius: 91,
        pisces: 70
    },

    taurus: {
        gemini: 63,
        cancer: 91,
        leo: 76,
        virgo: 95,
        libra: 81,
        scorpio: 93,
        sagittarius: 60,
        capricorn: 97,
        aquarius: 58,
        pisces: 90
    },

    gemini: {
        cancer: 75,
        leo: 90,
        virgo: 71,
        libra: 96,
        scorpio: 62,
        sagittarius: 94,
        capricorn: 55,
        aquarius: 98,
        pisces: 73
    },

    cancer: {
        leo: 77,
        virgo: 88,
        libra: 70,
        scorpio: 97,
        sagittarius: 58,
        capricorn: 86,
        aquarius: 61,
        pisces: 99
    },

    leo: {
        virgo: 68,
        libra: 92,
        scorpio: 79,
        sagittarius: 95,
        capricorn: 65,
        aquarius: 87,
        pisces: 72
    },

    virgo: {
        libra: 83,
        scorpio: 89,
        sagittarius: 61,
        capricorn: 96,
        aquarius: 69,
        pisces: 91
    },

    libra: {
        scorpio: 80,
        sagittarius: 90,
        capricorn: 67,
        aquarius: 94,
        pisces: 85
    },

    scorpio: {
        sagittarius: 70,
        capricorn: 92,
        aquarius: 63,
        pisces: 98
    },

    sagittarius: {
        capricorn: 64,
        aquarius: 96,
        pisces: 76
    },

    capricorn: {
        aquarius: 71,
        pisces: 87
    },

    aquarius: {
        pisces: 84
    }

};


// Mengambil nilai kombinasi

function getCompatibility(z1, z2) {

    if (z1 === z2) {
        return 88;
    }

    if (compatibility[z1] && compatibility[z1][z2]) {
        return compatibility[z1][z2];
    }

    if (compatibility[z2] && compatibility[z2][z1]) {
        return compatibility[z2][z1];
    }

    return Math.floor(Math.random() * 40) + 60;
}


// Elemen logo berdasarkan nilai

function getLogo(score) {

    if (score >= 95) {
        return "💎";
    }

    if (score >= 90) {
        return "💖";
    }

    if (score >= 80) {
        return "💕";
    }

    if (score >= 70) {
        return "💗";
    }

    if (score >= 60) {
        return "💛";
    }

    if (score >= 40) {
        return "💫";
    }

    return "💔";
}


// Deskripsi hasil

function getDescription(score) {

    if (score >= 95) {
        return {
            title: "Kecocokan Luar Biasa! 💎",
            text: "Kalian memiliki kombinasi energi yang sangat menarik. Banyak hal yang bisa dipelajari dan dibagikan bersama."
        };
    }

    if (score >= 90) {
        return {
            title: "Sangat Cocok! 💖",
            text: "Kombinasi zodiak kalian menunjukkan kecocokan yang sangat tinggi."
        };
    }

    if (score >= 80) {
        return {
            title: "Cocok Banget! 💕",
            text: "Kalian mempunyai banyak energi yang dapat saling melengkapi."
        };
    }

    if (score >= 70) {
        return {
            title: "Cukup Cocok! 💗",
            text: "Ada banyak kesamaan menarik, meskipun tetap ada beberapa perbedaan."
        };
    }

    if (score >= 60) {
        return {
            title: "Menarik untuk Dicoba! ✨",
            text: "Perbedaan karakter bisa menjadi kesempatan untuk saling memahami."
        };
    }

    return {
        title: "Penuh Tantangan 💫",
        text: "Perbedaan yang ada bisa menjadi kesempatan untuk belajar memahami satu sama lain."
    };
}


// Animasi angka

function animateNumber(element, target) {

    let current = 0;

    const duration = 1800;
    const start = performance.now();

    function update(time) {

        const progress = Math.min(
            (time - start) / duration,
            1
        );

        current = Math.floor(
            progress * target
        );

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}


// Update preview

document.getElementById("zodiac1")
    .addEventListener("change", function () {

        const zodiac = zodiacData[this.value];

        if (zodiac) {
            document.getElementById("preview1").textContent =
                zodiac.icon;
        }

    });


document.getElementById("zodiac2")
    .addEventListener("change", function () {

        const zodiac = zodiacData[this.value];

        if (zodiac) {
            document.getElementById("preview2").textContent =
                zodiac.icon;
        }

    });


// Tombol cek

document.getElementById("matchButton")
    .addEventListener("click", function () {

        const z1 = document.getElementById("zodiac1").value;
        const z2 = document.getElementById("zodiac2").value;

        if (!z1 || !z2) {

            alert("✨ Silakan pilih kedua zodiak terlebih dahulu!");

            return;
        }

        const score = getCompatibility(z1, z2);

        const data1 = zodiacData[z1];
        const data2 = zodiacData[z2];

        document.getElementById("resultName1")
            .textContent = data1.name;

        document.getElementById("resultName2")
            .textContent = data2.name;

        document.getElementById("resultIcon1")
            .textContent = data1.icon;

        document.getElementById("resultIcon2")
            .textContent = data2.icon;


        const result = getDescription(score);

        document.getElementById("resultTitle")
            .textContent = result.title;

        document.getElementById("resultDescription")
            .textContent = result.text;


        document.getElementById("percentageLogo")
            .textContent = getLogo(score);


        document.getElementById("result")
            .classList.remove("hidden");


        const percentage =
            document.getElementById("percentage");

        animateNumber(
            percentage,
            score
        );


        const progress =
            document.getElementById("progressBar");

        progress.style.width = "0%";

        setTimeout(() => {
            progress.style.width =
                score + "%";
        }, 100);


        // Statistik

        const love = Math.min(
            100,
            score + Math.floor(Math.random() * 7) - 3
        );

        const friendship = Math.min(
            100,
            score + Math.floor(Math.random() * 10) - 5
        );

        const energy = Math.min(
            100,
            score + Math.floor(Math.random() * 8) - 4
        );


        document.getElementById("loveStat")
            .textContent = love + "%";

        document.getElementById("friendStat")
            .textContent = friendship + "%";

        document.getElementById("energyStat")
            .textContent = energy + "%";


        // Scroll ke hasil

        setTimeout(() => {

            document.getElementById("result")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

        }, 300);

    });


// Reset

document.getElementById("resetButton")
    .addEventListener("click", function () {

        document.getElementById("zodiac1").value = "";
        document.getElementById("zodiac2").value = "";

        document.getElementById("preview1").textContent = "♈";
        document.getElementById("preview2").textContent = "♌";

        document.getElementById("result")
            .classList.add("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });