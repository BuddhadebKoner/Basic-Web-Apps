document.getElementById('copyNumber').addEventListener('click', function () {
  // Select the text
  var numberText = document.getElementById('copyNumber');
  var range = document.createRange();
  range.selectNode(numberText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  // Copy to clipboard
  document.execCommand('copy');

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Alert or provide feedback (optional)
  alert('Number copied to clipboard: ' + numberText.innerText);
});

 // Get the elements
 const searchBtn = document.getElementById('searchBtn');
 const searchInput = document.querySelector('.search-input');

 // Initially hide the search input
 searchInput.style.display = 'none';

 // Add event listener for button click
 searchBtn.addEventListener('click', function() {
     // Toggle the visibility of the search input
     searchInput.style.display = (searchInput.style.display === 'none') ? 'block' : 'none';
 });


/*item dropdown*/

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("active");
}

function selectOption(option, mainSectionId) {
  var mainSection = document.getElementById(mainSectionId);
  mainSection.innerHTML = option + `<div class="dropdownIconHr">
    <hr>
    <img src="icons/icons8-arrow-24.png" alt="">
  </div>`;
  toggleDropdown(mainSectionId);
}
