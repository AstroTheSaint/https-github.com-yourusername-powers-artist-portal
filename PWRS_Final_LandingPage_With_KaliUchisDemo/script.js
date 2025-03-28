
window.addEventListener('DOMContentLoaded', () => {
  const yearSlider = document.getElementById('yearSlider');
  const yearLabel = document.getElementById('yearLabel');
  yearSlider.addEventListener('input', () => {
    yearLabel.textContent = yearSlider.value;
    updateGlobeData(yearSlider.value);
  });

  const globe = Globe()(document.getElementById('globeViz'))
    .globeImageUrl('https://raw.githubusercontent.com/denoland/deno_website2/main/public/img/globe-dark.jpg')
    .backgroundColor('#121212')
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude(d => d.size / 100000)
    .pointColor('color')
    .pointLabel('label')
    .pointsData([]);

  function updateGlobeData(year) {
    const data = {
      2022: [
        { lat: 4.711, lng: -74.0721, size: 15000, label: 'Bogotá - $500K', color: '#FFD700' },
        { lat: 25.7617, lng: -80.1918, size: 20000, label: 'Miami - $600K', color: '#FFD700' }
      ],
      2023: [
        { lat: 40.7128, lng: -74.006, size: 30000, label: 'NYC - $1.2M', color: '#FFD700' },
        { lat: 34.0522, lng: -118.2437, size: 28000, label: 'LA - $1.1M', color: '#FFD700' }
      ],
      2024: [
        { lat: 41.8781, lng: -87.6298, size: 18000, label: 'Chicago - $700K', color: '#1DB954' },
        { lat: 48.8566, lng: 2.3522, size: 22000, label: 'Paris - $900K', color: '#1DB954' }
      ],
      2025: [
        { lat: 51.5074, lng: -0.1278, size: 30000, label: 'London - $1.4M', color: '#1DB954' },
        { lat: 35.6762, lng: 139.6503, size: 35000, label: 'Tokyo - $1.6M', color: '#1DB954' }
      ]
    };
    globe.pointsData(data[year] || []);
  }

  updateGlobeData(yearSlider.value);
});
