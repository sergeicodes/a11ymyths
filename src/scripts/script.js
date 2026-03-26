function getSystemTheme() {
  return (!globalThis.matchMedia || globalThis.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
}

function applyPreference(pref) {
  const resolved = pref === 'system' ? getSystemTheme() : pref;
  document.documentElement.dataset.theme = resolved;
  const select = document.getElementById('theme-select');
  if (select) {
    select.value = pref;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('skip-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('main-content').focus();
  });

  const pref = localStorage.getItem('theme') || 'system';
  applyPreference(pref);

  const select = document.getElementById('theme-select');
  if (select) {
    select.addEventListener('change', () => {
      localStorage.setItem('theme', select.value);
      applyPreference(select.value);
    });
  }

  globalThis.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const current = localStorage.getItem('theme') || 'system';
    if (current === 'system') {
      applyPreference('system');
    }
  });
});
