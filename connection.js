function createConnection() {
  dataChannelSend.placeholder = '';
  let servers = null;
  pcConstraint = null;
  dataConstraint = null;

  window.localConnection = localConnection = new RTCPeerConnection(servers, pcConstraint);

  sendChannel = localConnection.createDataChannel('sendDataChannel', dataConstraint);

  localConnection.onicecandidate = function(e) {
    onIceCandidate(localConnection, e);
  };
  sendChannel.onopen = onSendChannelStateChange;
  sendChannel.onclose = onSendChannelStateChange;

  window.remoteConnection = remoteConnection = new RTCPeerConnection(servers, pcConstraint);

  remoteConnection.onicecandidate = e => onIceCandidate(remoteConnection, e);
  remoteConnection.ondatachannel = receiveChannelCallback;

  localConnection.createOffer().then(gotDescription1, onCreateSessionDescriptionError);
  startButton.disabled = true;
  closeButton.disabled = false;
}
