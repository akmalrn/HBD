document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-btn');
    const jumpImage = document.getElementById('jump-image');
    const jumpSound = document.getElementById('jump-sound');

    startButton.addEventListener('click', () => {
        // Menampilkan gambar
        jumpImage.style.display = 'block';

        // Memutar suara
        jumpSound.play().catch(error => {
            console.log("Error playing audio: ", error);
        });

        // Menonaktifkan tombol setelah diklik
        startButton.disabled = true; // Menonaktifkan tombol
        startButton.innerText = "Sudah Diklik!"; // Mengubah teks tombol
    });
});