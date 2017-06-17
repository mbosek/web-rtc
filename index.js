const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
const button = document.querySelector('button');

canvas.width = 480;
canvas.height = 360;

const constraints = window.constraints = {
  audio: false,
  video: true
};

button.onclick = () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};

function handleSuccess(stream) {
  let videoTracks = stream.getVideoTracks();
  window.stream = stream;
  video.srcObject = stream;
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
