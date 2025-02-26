function calculateEmissions() {
    const consumption = document.getElementById('consumption').value;
    const emissionFactor = 0.92; // Faktor emisi karbon (kg CO2 per kWh)

    if (consumption) {
        const monthlyEmissions = consumption * emissionFactor; // Emisi bulanan dalam kg CO2
        const yearlyEmissions = monthlyEmissions * 12; // Emisi tahunan dalam kg CO2

        document.getElementById('result').innerHTML = `
            <h2>Hasil Perhitungan</h2>
            <p>Emisi Karbon Bulanan: ${monthlyEmissions.toFixed(2)} kg CO2</p>
            <p>Emisi Karbon Tahunan: ${yearlyEmissions.toFixed(2)} kg CO2</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Mohon masukkan data konsumsi listrik.</p>';
    }
}