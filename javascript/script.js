document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. EFECTO MÁQUINA DE ESCRIBIR ---
    const subtitle = document.querySelector('.subtitle');
    
    if (subtitle) {
        const text = "Desarrollo sitios web a tu medida para hacer crecer tu negocio.";
        subtitle.textContent = ""; // Limpiamos el texto inicial
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 35); // Velocidad de tipeo
            }
        }

        typeWriter();
    }
});