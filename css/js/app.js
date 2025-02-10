// The base URL for the Tropical Tidbits model images
const modelBaseURL = "https://www.tropicaltidbits.com/analysis/models/?model=gfs&region=eu&pkg=mslp_pcpn_frzn";

// Forecast hours array (you can adjust it as needed)
const forecastHours = [6, 12, 18, 24, 30]; // Forecast hours (6, 12, 18, 24, 30)
let currentForecastIndex = 0;  // To track the current forecast hour

// Function to load a new model
function loadModel() {
    // Get the forecast hour for the model image
    const forecastHour = forecastHours[currentForecastIndex];

    // Construct the URL for the model
    const modelURL = `${modelBaseURL}&runtime=2025021012&fh=${forecastHour}`;

    // Set the source of the image to the new model URL
    const modelImage = document.getElementById("storm-model");
    modelImage.src = modelURL;

    // Increment the forecast index for the next button click
    currentForecastIndex = (currentForecastIndex + 1) % forecastHours.length;  // Loop through forecast hours
}

// Initial model load
loadModel();

// Button to load the next model in sequence
document.getElementById("load-next-model-btn").addEventListener("click", loadModel);
