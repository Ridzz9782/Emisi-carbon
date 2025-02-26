function calculateEmissions() {
    const region = document.getElementById('region').value;
    const electricityUsage = document.getElementById('electricityUsage').value;
    const emissionFactors = {
        "Sumatera": 0.991,
        "Jawa": 0.822,
        "Kalimantan": 0.945,
        "Sulawesi": 0.876,
        "Papua": 0.789,
        "Bali-Nusa Tenggara": 0.812
    };

    const emissions = electricityUsage * emissionFactors[region];
    document.getElementById('result').innerText = `Emisi karbon di ${region}: ${emissions.toFixed(2)} kg CO2`;
}
