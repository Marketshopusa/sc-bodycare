(function() {
  // ==========================================
  // 1. Transparent LocalStorage Encryption Layer
  // ==========================================
  const originalGetItem = localStorage.getItem;
  const originalSetItem = localStorage.setItem;
  const sensitiveKeys = ['sc_user', 'sc_db_users', 'sc_db_emails', 'currentUser'];

  function encryptData(str) {
    if (!str) return str;
    try {
      // Custom XOR rotation cipher to make the data completely unreadable in plain text
      let binary = '';
      for (let i = 0; i < str.length; i++) {
        binary += String.fromCharCode(str.charCodeAt(i) ^ 42);
      }
      return btoa(unescape(encodeURIComponent(binary)));
    } catch (e) {
      return str;
    }
  }

  function decryptData(str) {
    if (!str) return str;
    const trimmed = str.trim();
    // Fallback/Safety: If it starts with JSON syntax, it's not encrypted yet.
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      return str;
    }
    try {
      let binary = decodeURIComponent(escape(atob(str)));
      let dec = '';
      for (let i = 0; i < binary.length; i++) {
        dec += String.fromCharCode(binary.charCodeAt(i) ^ 42);
      }
      return dec;
    } catch (e) {
      return str;
    }
  }

  localStorage.getItem = function(key) {
    const val = originalGetItem.call(localStorage, key);
    if (sensitiveKeys.includes(key) && val) {
      return decryptData(val);
    }
    return val;
  };

  localStorage.setItem = function(key, value) {
    if (sensitiveKeys.includes(key) && value) {
      originalSetItem.call(localStorage, key, encryptData(String(value)));
    } else {
      originalSetItem.call(localStorage, key, value);
    }
  };

  // ==========================================
  // 2. Disable Keyboard Shortcuts & Context Menu
  // ==========================================
  window.addEventListener('keydown', function(e) {
    // F12 (123)
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I (73) - Inspect
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+J (74) - Console
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+C (67) - Inspect Element
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U (85) - View Source
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S (83) - Save Page
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
  }, true);

  // Disable Right-Click Context Menu
  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  }, true);

  // ==========================================
  // 3. Active Anti-Debugging loop (Debugger Breakpoints)
  // ==========================================
  function startAntiDebug() {
    function debugLoop() {
      try {
        (function() {
          (function a() {
            (function() {
              return function(content) {
                return Function('err', 'debugger')(content);
              };
            })()('bug');
          })();
        })();
      } catch (e) {}
      setTimeout(debugLoop, 150);
    }
    debugLoop();
  }
  
  // Start execution of anti-debug loop
  startAntiDebug();
})();
