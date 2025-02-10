// Sample Storm Status (You can integrate real data here)
const stormData = {
    name: 'Storm Ophelia',
    status: 'Category 3',
    location: 'Southwest Ireland',
    impact: 'Heavy rain, wind gusts up to 130 km/h',
    updateTime: '10:30 AM, 10th February 2025',
};

// Update storm info in the UI
function updateStormStatus() {
    document.getElementById("storm-status").innerHTML = `
        <strong>Storm Name:</strong> ${stormData.name} <br>
        <strong>Status:</strong> ${stormData.status} <br>
        <strong>Location:</strong> ${stormData.location} <br>
        <strong>Impact:</strong> ${stormData.impact} <br>
        <strong>Last Updated:</strong> ${stormData.updateTime}
    `;
}

// Load storm data when page loads
window.onload = updateStormStatus;
