let model, webcam, labelContainer, maxPredictions;

async function init() {
  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/DO477GJ3YJ/"; // Replace!

  // Load the model
  const modelURL = MODEL_URL + "model.json";
  const metadataURL = MODEL_URL + "metadata.json";

  try {
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const flip = true;
    webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
    await webcam.setup(); // Ask for camera permission
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam").srcObject = webcam.webcam;
  } catch (error) {
    console.error("Failed to load model or webcam", error);
    document.getElementById("result").innerHTML = "Error loading model/webcam.";
  }
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  prediction.sort((a, b) => b.probability - a.probability);
  document.getElementById("result").innerHTML = `🌿 Detected: ${prediction[0].className} (${(prediction[0].probability * 100).toFixed(2)}%)`;
}
