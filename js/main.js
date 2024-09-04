document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-btn');
    const balloonContainer = document.querySelector('.balloon-container');
    const music = document.getElementById("background-music");
    const endText = document.querySelector('.end-text');
    const finalText = document.querySelector('.final-text');
    const sideText = document.querySelector('.side-text');
    const sideText2 = document.querySelector('.side-text2');
    // Menampilkan tombol Start setelah animasi "Hai" selesai
    setTimeout(() => {
        startButton.classList.add('show'); // Menampilkan tombol setelah 6 detik
    }, 6000); // Menunggu waktu animasi "Hai" selama 6 detik

    // Menyembunyikan teks pada awalnya
    endText.style.opacity = 0;
    finalText.style.opacity = 0;
    sideText.style.opacity = 0;

    // Fungsi untuk memulai animasi balon
    function startBalloons() {
        for (let i = 0; i < 20; i++) { // Mengubah menjadi 20 balon
            let balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
            balloonContainer.appendChild(balloon);
        }

        // Memutar musik setelah balon muncul
        music.play().catch(error => {
            console.log("Error playing audio: ", error);
        });

        // Menampilkan teks satu per satu
        displayText(endText, "Selamat Ulang Tahun Yaa", 2000)
            .then(() => displayText(finalText, "Semoga Panjang Umur Dan Sehat Selalu", 2000))
            .then(() => displayText(sideText, "Happy Special Day!", 4000))
            .then(() => displayText(sideText2, "Happy Special Day!", 6000));
    }

    // Fungsi untuk menampilkan teks kata demi kata
    function displayText(element, message, delay) {
        return new Promise((resolve) => {
            element.style.opacity = 1; // Pastikan elemen terlihat
            element.innerHTML = ''; // Kosongkan isi sebelumnya
            let index = 0;
            const interval = setInterval(() => {
                if (index < message.length) {
                    element.innerHTML += message[index];
                    index++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        element.style.opacity = 0; // Sembunyikan teks setelah selesai
                        resolve(); // Selesaikan promise
                    }, 1000); // Delay sebelum menyembunyikan teks
                }
            }, 200); // Munculkan setiap 200ms
        });
    }

    // Menambahkan event listener ke tombol Start
    startButton.addEventListener('click', () => {
        startBalloons();
        startButton.classList.remove('show'); // Menghilangkan tombol setelah diklik
    });
});
