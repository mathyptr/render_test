// Set constraints for the video stream
//MATHY const constraints = {video: {facingMode: "environment"}, audio: false, zoom: true};
const constraints = {video: {facingMode: {exact: "environment"}}, audio: false};
// Define constants
const cameraView = document.querySelector("#camera--view")

async function load_model() {
    console.error("Provaaaa.");
    let m="ok";
    return m;
  }



// Access the device camera and stream to cameraView
function cameraStart() {
    const webCamPromise = navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            window.stream = stream;
            cameraView.srcObject = stream;            
/*            track = stream.getTracks()[0];
            cameraView.srcObject = stream;

            const capabilities = track.getCapabilities();
            const settings = track.getSettings();

            const input = document.querySelector("#zoom");

            // Check whether zoom is supported or not.
            if (!('zoom' in settings)) {
                input.style.display = "None";
                return;
            }

            // Map zoom to a slider element.
            input.min = capabilities.zoom.min;
            input.max = capabilities.zoom.max;
            input.step = capabilities.zoom.step;
            input.value = settings.zoom;

            input.oninput = function (event) {
                track.applyConstraints({advanced: [{zoom: event.target.value}]});
            }
            input.hidden = false;
*/


            return new Promise((resolve, reject) => {
                webcam.onloadedmetadata = () => {
                  resolve();
                };
              });
        })
        .catch(function (error) {
            console.error("Oops. Something is broken.", error);
        });
        
        let camera_box = document.getElementById('camera');
        camera_box.classList.add('loaded');

        objectDetector = load_model();

        Promise.all([objectDetector])
            .then(values => {
              console.error("OK");
            })
            .catch(error => {
              console.error(error);
        });
          

}



// Take a picture when cameraTrigger is tapped

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);
