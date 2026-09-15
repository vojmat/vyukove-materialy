const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const yearElement = document.querySelector('#year');
const answerButtons = document.querySelectorAll('.answer-option');
const quizFeedback = document.querySelector('.quiz-feedback');
const topicToggles = document.querySelectorAll('.topic-toggle');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navToggle.setAttribute(
      'aria-label',
      isExpanded ? 'Otevřít navigaci' : 'Zavřít navigaci'
    );
    sidebar.classList.toggle('is-open');
  });
}

if (topicToggles.length > 0) {
  topicToggles.forEach((toggle) => {
    const topicGroup = toggle.closest('.topic-group');

    if (topicGroup && topicGroup.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      if (topicGroup) {
        topicGroup.classList.toggle('is-open', !isExpanded);
      }
    });
  });
}

if (answerButtons.length > 0 && quizFeedback) {
  answerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isCorrect = button.dataset.correct === 'true';

      answerButtons.forEach((option) => {
        option.disabled = true;

        if (option.dataset.correct === 'true') {
          option.classList.add('is-correct');
        }

        if (option === button && !isCorrect) {
          option.classList.add('is-wrong');
        }
      });

      if (isCorrect) {
        quizFeedback.textContent = 'Správně! Procesor zpracovává instrukce a provádí výpočty.';
        quizFeedback.style.color = '#4f8a70';
      } else {
        quizFeedback.textContent = 'Nesprávně. Zkus to znova nebo si přečti výklad.';
        quizFeedback.style.color = '#c9823b';
      }
    });
  });
}
