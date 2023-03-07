const btnModalOpen = document.querySelector('.form-button');

const getName = () => {
  var inputNames = document.getElementById('names');

  inputNames.oninput = function() {
    document.getElementById('result-names').innerHTML = inputNames.value;
  };
};

getName();