// src/auth.js


// Cookie helpers
function setCookie(name, value, days = 1) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '');
}

function removeCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Get token from cookie
// Decode JWT and check expiry
function isTokenExpired(token) {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (!payload.exp) return false; // If no exp, treat as not expired
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch (e) {
    return true;
  }
}

export function getToken() {
  const token = getCookie('sessiontoken');
  if (!token || isTokenExpired(token)) {
    removeToken();
    return null;
  }
  return token;
}

// Save token to cookie
export function setToken(token) {
  setCookie('sessiontoken', token);
}

// Remove token from cookie
export function removeToken() {
  removeCookie('sessiontoken');
}

// Attach token to fetch requests
export async function authFetch(url, options = {}) {
  const token = getToken();
  const headers = {
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };
  return fetch(url, { ...options, headers });
}
