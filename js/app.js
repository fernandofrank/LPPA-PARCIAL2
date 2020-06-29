var play = function() {
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}
var init = function() {
  Window.Accept();
  Window.InputFocus();
}
window.onload = init;
