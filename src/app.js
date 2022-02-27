let api_url = "http://localhost:3001/api/server.php";
let imageDataUrl = "";
let start_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let take_photo_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let click_upload = document.querySelector("#click-upload");

let request = {
  type: 'POST',
  url: api_url,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: null,
  contentType: 'application/json; charset=utf-8',
  dataType: 'json'
};

start_button.addEventListener("click", async function () {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;
});

take_photo_button.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  imageDataUrl = canvas.toDataURL("image/png");
});

click_upload.addEventListener("click", async function () {
  if (imageDataUrl !== "") submit();
});

let showSuccessMessage = () => {
  $("#result").text("Saved!");
  $("#result").removeClass("d-none");
}

let showError = () => {
  $("#result").text("Something went wrong. Try again!");
  $("#result").removeClass("d-none alert alert-primary");
  $("#result").addClass("alert alert-danger");
}

let submit = () => {
  request.data = { image: imageDataUrl };
  $.ajax(request)
    .done(showSuccessMessage)
    .fail(showError)
    .always(() => imageDataUrl = "");
}
