const searchInput = document.getElementById('searchInput');
const cards = Array.from(document.querySelectorAll('.card'));

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  cards.forEach(card => {
    const keywords = card.dataset.keywords.toLowerCase();
    const title = card.querySelector('h2').textContent.toLowerCase();
    const content = card.textContent.toLowerCase();
    const match = query === '' || keywords.includes(query) || title.includes(query) || content.includes(query);
    card.style.display = match ? 'block' : 'none';
  });
});
