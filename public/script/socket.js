const socket = io();

window.addEventListener("beforeunload", function (e) {
  socket.emit("disconnect");
});
