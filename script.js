// On attend que le DOM (la page) soit chargé avant de dessiner
document.addEventListener('DOMContentLoaded', function() {
    
    const ctx = document.getElementById('monRadarChart').getContext('2d');

    const config = {
        type: 'radar',
        data: {
            labels: ['Java', 'Python', 'HTML / CSS', 'SQL / JDBC', 'C', 'C#', 'Unity'],
            datasets: [{
                label: 'Niveau',
                data: [70, 55, 75, 40, 55, 40, 55],
                // Couleur de fond (Bleu clair transparent)
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                // Couleur de la ligne (Bleu solide)
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                // Points sur les axes
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, // Garde le ratio carré
            scales: {
                r: {
                    angleLines: { color: '#6F7D92' },
                    grid: { color: '#6F7D92' },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }, // Cache les chiffres 10, 20...
                    pointLabels: {
                        font: { size: 14, family: "'Arial', sans-serif" },
                        color: '#6F7D92' // Couleur du texte (ex: Java, SQL)
                    }
                }
            },
            plugins: {
                legend: { display: false }, // Pas besoin de légende "Niveau"
                tooltip: { enabled: true }  // Affiche la valeur au survol
            }
        }
    };

    new Chart(ctx, config);
});