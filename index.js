const video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
const button = document.querySelector('button');
const filterSelect = document.querySelector('select#filter');

canvas.width = 480;
canvas.height = 360;

const constraints = window.constraints = {
  audio: false,
  video: true
};

button.onclick = () => {
  canvas.className = filterSelect.value;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};

filterSelect.onchange = () => {
  video.className = filterSelect.value;
};

function handleSuccess(stream) {
  let videoTracks = stream.getVideoTracks();
  window.stream = stream;
  video.srcObject = stream;
}

function sendData() {
  let data = dataChannelSend.value;
  sendChannel.send(data);
}

function onIceCandidate(pc, event) {
  getOtherPc(pc)
  .addIceCandidate(event.candidate)
  .then(
    () => onAddIceCandidateSuccess(pc),
    err => onAddIceCandidateError(pc, err)
  );
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
