var Window = {
  accept: null,
  number: 0,
  getAccept: function() {
    return document.getElementById('Accept');
  },
  getNumber: function() {
    return document.getElementById('cellnumber').value;
  },
  HideMainWindow: function() {
    document.getElementsByClassName('mainwindow')[0].style.display = 'none';
  },
  InputFocus: function() {
    var input = document.getElementById('cellnumber');
    input.onfocus = Window.hideValidation;
  },
  Accept: function() {
    Window.accept = Window.getAccept();
    Window.accept.onclick = Window.setStructure;
  },
  setStructure: function() {
    Window.number = Window.getNumber();
    var onlyNumbers = Validation.onlyNumbers(Window.number);
    var includedNumber = Validation.includedNumber(5, 25, Window.number);
    if (onlyNumbers && includedNumber) {
      Window.HideMainWindow();
      Board.rows = Window.number;
      Board.columns = Window.number;
      Game.init();
      Game.start();
    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) {
        alert('Ingrese un Numero entre 5 y 25');
      }
    }
  }
}
