
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
      2023: [
        { lat: 34.05, lng: -118.25, size: 15000, label: 'LA - $1.8M', color: '#FFD700' }
      ],
      2024: [
        { lat: 40.71, lng: -74.00, size: 20000, label: 'NYC - $2.5M', color: '#FFD700' }
      ],
      2025: [
        { lat: 51.50, lng: -0.12, size: 18000, label: 'London - $2.2M', color: '#FFD700' },
        { lat: 35.68, lng: 139.69, size: 50000, label: 'Tokyo - $6M', color: '#1DB954' }
      ],
      2026: [
        { lat: -33.87, lng: 151.21, size: 25000, label: 'Sydney - $2.9M', color: '#1DB954' }
      ]
    };
    globe.pointsData(data[year] || []);
  }

  updateGlobeData(yearSlider.value);
});
