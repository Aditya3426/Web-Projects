
const searchBar = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');

// Sample data for demonstration
const data = [
  'My Fault',
  'openhimer ',
  'Cherry',
  'Date',
  'Grape',
  'Lemon',
  'Orange',
  'Peach',
  'Pear'
];

searchBar.addEventListener('input', function () {
  const searchText = searchBar.value.toLowerCase();
  searchResults.innerHTML = ''; // Clear previous results

  const filteredResults = data.filter(item => item.toLowerCase().includes(searchText));

  filteredResults.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
});