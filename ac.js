function calculateEmissions() {
    const power = document.getElementById('power').value;
    const hours = document.getElementById('hours').value;
    const emissionFactor = 0.0007; // Faktor emisi karbon (kg CO2 per Watt-jam)

    if (power && hours) {
        const dailyConsumption = power * hours; // Konsumsi harian dalam Watt-jam
        const dailyEmissions = dailyConsumption * emissionFactor; // Emisi harian dalam kg CO2
        const yearlyEmissions = dailyEmissions * 365; // Emisi tahunan dalam kg CO2

        document.getElementById('result').innerHTML = `
            <h2>Hasil Perhitungan</h2>
            <p>Emisi Karbon Harian: ${dailyEmissions.toFixed(2)} kg CO2</p>
            <p>Emisi Karbon Tahunan: ${yearlyEmissions.toFixed(2)} kg CO2</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Mohon masukkan semua data yang diperlukan.</p>';
    }
}