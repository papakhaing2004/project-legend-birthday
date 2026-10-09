// PERSONALIZE THESE VALUES before sharing the website.
const STREAMER_NAME = "Ebrahim Moton";
const BIRTHDAY_MESSAGE = "Happy birthday. May Allah bless you with happiness, good health, and success in everything you do. May He protect you, guide you, and put barakah in your life and your streaming journey. Never give up on your dreams because every great streamer starts somewhere. InshaAllah, this is just the beginning of something beautiful for you.";

const nameElement = document.getElementById('profileName');
const photo = document.getElementById('streamerPhoto');
const fallback = document.getElementById('photoFallback');
const modal = document.getElementById('surpriseModal');

nameElement.textContent = STREAMER_NAME;
document.title = `Project LEGEND | ${STREAMER_NAME} Birthday Edition`;
document.getElementById('customMessage').textContent = BIRTHDAY_MESSAGE;

// If the photo hasn't been added yet, show the designed fallback instead of a broken image.
photo.addEventListener('load', () => { fallback.style.display = 'none'; });
photo.addEventListener('error', () => { photo.style.display = 'none'; fallback.style.display = 'flex'; });

function openModal() {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

document.getElementById('unlockBtn').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });
document.getElementById('goMessageBtn').addEventListener('click', () => {
  closeModal();
  document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
  window.setTimeout(() => document.getElementById('personalMessage').classList.remove('hidden'), 350);
});
document.getElementById('messageBtn').addEventListener('click', () => {
  const message = document.getElementById('personalMessage');
  message.classList.toggle('hidden');
  document.getElementById('messageBtn').innerHTML = message.classList.contains('hidden')
    ? 'OPEN YOUR MESSAGE <span>✦</span>'
    : 'HIDE YOUR MESSAGE <span>↑</span>';
});
document.getElementById('replayBtn').addEventListener('click', () => {
  closeModal();
  document.getElementById('personalMessage').classList.add('hidden');
  document.getElementById('messageBtn').innerHTML = 'OPEN YOUR MESSAGE <span>✦</span>';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  window.setTimeout(openModal, 500);
});
