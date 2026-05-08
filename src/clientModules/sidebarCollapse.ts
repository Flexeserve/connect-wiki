const STORAGE_KEY = 'connect-wiki-sidebar-collapsed';
const COLLAPSED_CLASS = 'connect-sidebar-collapsed';
const TOGGLE_ID = 'connect-sidebar-toggle';
const DOCS_MEDIA_QUERY = '(min-width: 997px)';

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

function isDesktop(): boolean {
  return window.matchMedia(DOCS_MEDIA_QUERY).matches;
}

function getSidebar(): HTMLElement | null {
  return document.querySelector('.theme-doc-sidebar-container');
}

function getToggle(): HTMLButtonElement | null {
  return document.getElementById(TOGGLE_ID) as HTMLButtonElement | null;
}

function isCollapsed(): boolean {
  return document.documentElement.classList.contains(COLLAPSED_CLASS);
}

function applyCollapsedState(collapsed: boolean): void {
  document.documentElement.classList.toggle(COLLAPSED_CLASS, collapsed);
  localStorage.setItem(STORAGE_KEY, String(collapsed));

  const toggle = getToggle();
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(collapsed));
    toggle.setAttribute('aria-label', collapsed ? 'Expand navigation pane' : 'Collapse navigation pane');
    toggle.innerHTML = collapsed ? CHEVRON_RIGHT : CHEVRON_LEFT;
  }
}

function ensureToggle(): void {
  const sidebar = getSidebar();
  const existing = getToggle();

  if (!isDesktop() || !sidebar) {
    if (existing) {
      existing.remove();
    }
    document.documentElement.classList.remove(COLLAPSED_CLASS);
    return;
  }

  if (!existing) {
    const button = document.createElement('button');
    button.id = TOGGLE_ID;
    button.type = 'button';
    button.className = 'connect-sidebar-toggle';
    button.title = 'Toggle navigation pane';
    button.addEventListener('click', () => {
      applyCollapsedState(!isCollapsed());
    });
    document.body.appendChild(button);
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  applyCollapsedState(saved === 'true');
}

function wireNavigationHooks(): void {
  const emit = () => window.dispatchEvent(new Event('connect-route-change'));

  const originalPush = history.pushState;
  history.pushState = function pushState(...args) {
    originalPush.apply(this, args);
    emit();
  };

  const originalReplace = history.replaceState;
  history.replaceState = function replaceState(...args) {
    originalReplace.apply(this, args);
    emit();
  };

  window.addEventListener('popstate', emit);
}

function sidebarCollapseModule(): void {
  wireNavigationHooks();

  let scheduled = false;
  const sync = () => {
    if (scheduled) {
      return;
    }

    scheduled = true;
    window.requestAnimationFrame(() => {
      ensureToggle();
      scheduled = false;
    });
  };

  window.addEventListener('load', sync);
  window.addEventListener('resize', sync);
  window.addEventListener('connect-route-change', sync);

  sync();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  sidebarCollapseModule();
}
