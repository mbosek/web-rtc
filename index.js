const video = document.querySelector('video');

const constraints = window.constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  let videoTracks = stream.getVideoTracks();
  window.stream = stream;
  video.srcObject = stream;
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
