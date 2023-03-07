var input = document.getElementById('names');

  input.oninput = function() {
    document.getElementById('result-names').innerHTML = input.value;
  };
