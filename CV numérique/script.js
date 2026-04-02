// On attend que le DOM (la page) soit chargé avant de dessiner
document.addEventListener('DOMContentLoaded', function() {
    
    const ctx = document.getElementById('monRadarChart').getContext('2d');

    const config = {
    type: 'radar',
    data: {
        labels: ['Développement (Java/C)', 'Web (HTML/CSS/JSP)', 'Système/Réseau', 'Agilité (Scrum)', 'Autonomie', 'Leadership', 'Rigueur'],
        datasets: [{
            label: 'Mon Profil Professionnel',
            data: [65, 80, 70, 75, 80, 75, 85], 
            backgroundColor: 'rgba(78, 102, 144, 0.4)', 
            borderColor: 'rgba(78, 102, 144, 1)',
            borderWidth: 3,
            pointBackgroundColor: 'rgba(78, 102, 144, 1)',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: { display: false },
                pointLabels: {
                    font: { size: 14, weight: '600' },
                    color: '#6F7D92'
                }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
};

    new Chart(ctx, config);
});