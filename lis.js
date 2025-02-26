function calculateEmissions() {
    const appliance = parseFloat(document.getElementById('appliance').value);
    const hours = parseFloat(document.getElementById('hours').value) || 0;

    // Faktor emisi karbon (dalam kg CO2 per kWh)
    const emissionFactor = 0.92;
    
    const totalUsage = appliance * hours;
    const totalEmissions = totalUsage * emissionFactor;

    document.getElementById('result').innerHTML = `<h2>Total Emisi Karbon Harian: ${totalEmissions.toFixed(2)} kg CO2</h2>`;
}