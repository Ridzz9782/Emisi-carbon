function calculateEmissions() {
    const fuelType = document.getElementById('fuel-type').value;
    const fuelAmount = document.getElementById('fuel-amount').value;

    const emissionFactors = {
        bensin: 2.31, // Faktor emisi untuk bensin (kg CO2 per liter)
        diesel: 2.68, // Faktor emisi untuk diesel (kg CO2 per liter)
        solar: 2.67  // Faktor emisi untuk solar (kg CO2 per liter)
    };

    if (fuelAmount) {
        const emissionFactor = emissionFactors[fuelType];
        const emissions = fuelAmount * emissionFactor; // Emisi karbon dalam kg CO2

        document.getElementById('result').innerHTML = `
            <h2>Hasil Perhitungan</h2>
            <p>Emisi Karbon: ${emissions.toFixed(2)} kg CO2</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Mohon masukkan jumlah bahan bakar.</p>';
    }
}