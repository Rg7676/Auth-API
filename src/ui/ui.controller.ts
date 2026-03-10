import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class UiController {
  @Get()
  @Header('Content-Type', 'text/html; charset=utf-8')
  getAuthUi(): string {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auth</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');

      :root {
        --bg-1: #0b1622;
        --bg-2: #153754;
        --panel: rgba(8, 20, 34, 0.82);
        --line: rgba(125, 190, 242, 0.24);
        --text: #edf5ff;
        --muted: #aac2db;
        --accent: #4fd8ff;
        --accent-2: #67ffc7;
        --ok: #99ffc7;
        --err: #ffaaa9;
        --note: #ffd4a8;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        font-family: 'Sora', 'Trebuchet MS', sans-serif;
        color: var(--text);
        background:
          radial-gradient(900px 600px at 8% 5%, #285987 0%, transparent 56%),
          radial-gradient(700px 500px at 92% 90%, #1a3d62 0%, transparent 60%),
          linear-gradient(145deg, var(--bg-1), var(--bg-2));
        display: grid;
        place-items: center;
        padding: 20px;
      }

      .shell {
        width: min(900px, 100%);
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        border: 1px solid var(--line);
        border-radius: 24px;
        overflow: hidden;
        background: var(--panel);
        box-shadow: 0 24px 90px rgba(1, 10, 21, 0.58);
        backdrop-filter: blur(7px);
      }

      .left {
        padding: 28px;
        border-right: 1px solid var(--line);
        background:
          linear-gradient(160deg, rgba(79, 216, 255, 0.13), rgba(103, 255, 199, 0.09)),
          repeating-linear-gradient(
            -38deg,
            rgba(103, 255, 199, 0.1) 0,
            rgba(103, 255, 199, 0.1) 1px,
            transparent 1px,
            transparent 15px
          );
      }

      .badge {
        display: inline-flex;
        align-items: center;
        border: 1px solid rgba(103, 255, 199, 0.45);
        border-radius: 999px;
        padding: 6px 11px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--accent-2);
      }

      h1 {
        margin: 16px 0 10px;
        font-size: clamp(28px, 4vw, 44px);
        line-height: 1.06;
      }

      .sub {
        margin: 0;
        color: var(--muted);
        line-height: 1.5;
      }

      .left a {
        color: var(--accent-2);
        text-decoration: none;
      }

      .right {
        padding: 24px;
        display: grid;
        gap: 14px;
      }

      .tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      .tab {
        border: 1px solid rgba(125, 190, 242, 0.32);
        border-radius: 12px;
        padding: 10px;
        color: #d7e8fc;
        background: rgba(7, 24, 40, 0.85);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }

      .tab.active {
        border-color: rgba(103, 255, 199, 0.52);
        color: #041222;
        background: linear-gradient(125deg, rgba(79, 216, 255, 0.28), rgba(103, 255, 199, 0.3));
      }

      .card {
        border: 1px solid rgba(125, 190, 242, 0.24);
        border-radius: 16px;
        background: rgba(3, 15, 27, 0.78);
        padding: 14px;
        display: grid;
        gap: 12px;
      }

      .card h2 {
        margin: 0;
        font-size: 18px;
      }

      .group {
        display: grid;
        gap: 10px;
      }

      label {
        display: grid;
        gap: 6px;
        font-size: 13px;
        color: var(--muted);
      }

      input {
        width: 100%;
        border: 1px solid rgba(125, 190, 242, 0.32);
        border-radius: 12px;
        padding: 11px 12px;
        font: inherit;
        color: var(--text);
        background: rgba(7, 24, 40, 0.9);
      }

      input:focus {
        outline: none;
        border-color: rgba(103, 255, 199, 0.7);
        box-shadow: 0 0 0 4px rgba(103, 255, 199, 0.14);
      }

      .hidden {
        display: none;
      }

      .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }

      button {
        border: 1px solid transparent;
        border-radius: 12px;
        padding: 11px 12px;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }

      .primary {
        background: linear-gradient(125deg, var(--accent), var(--accent-2));
        color: #051521;
      }

      .secondary {
        border-color: rgba(125, 190, 242, 0.34);
        background: rgba(8, 28, 47, 0.88);
        color: #d9ecff;
      }

      button[disabled] {
        opacity: 0.72;
        cursor: not-allowed;
      }

      .status {
        min-height: 22px;
        font-size: 14px;
      }

      .status.ok {
        color: var(--ok);
      }

      .status.err {
        color: var(--err);
      }

      .status.note {
        color: var(--note);
      }

      pre {
        margin: 0;
        min-height: 130px;
        max-height: 220px;
        overflow: auto;
        border-radius: 12px;
        border: 1px solid rgba(125, 190, 242, 0.22);
        background: rgba(1, 11, 20, 0.95);
        padding: 10px;
        color: #d7ebff;
        font-size: 12px;
        line-height: 1.44;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }

      @media (max-width: 860px) {
        .shell {
          grid-template-columns: 1fr;
        }

        .left {
          border-right: none;
          border-bottom: 1px solid var(--line);
        }
      }

      @media (max-width: 520px) {
        .actions {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <main class="shell">
      <section class="left">
        <span class="badge">auth ui</span>
        <h1>Simple Auth Frontend</h1>
        <p class="sub">
          Minimal forms without extra fields.
          <br />
          Login: <b>email + password</b>.
          <br />
          Register: <b>email + password</b>.
          <br />
          API docs: <a href="/docs" target="_blank" rel="noreferrer">/docs</a>
        </p>
      </section>

      <section class="right">
        <div class="tabs">
          <button id="tabLogin" class="tab active" type="button">Login</button>
          <button id="tabRegister" class="tab" type="button">Register</button>
        </div>

        <form id="authForm" class="card">
          <h2 id="formTitle">Login</h2>

          <div id="loginGroup" class="group">
            <label>
              Email
              <input id="loginInput" type="email" autocomplete="email" placeholder="john@example.com" required />
            </label>
            <label>
              Password
              <input id="loginPassword" type="password" autocomplete="current-password" minlength="6" required />
            </label>
          </div>

          <div id="registerGroup" class="group hidden">
            <label>
              Email
              <input id="registerEmail" type="email" autocomplete="email" placeholder="john@example.com" />
            </label>
            <label>
              Password
              <input id="registerPassword" type="password" autocomplete="new-password" minlength="6" />
            </label>
          </div>

          <div class="actions">
            <button id="submitBtn" class="primary" type="submit">Login</button>
            <button id="clearBtn" class="secondary" type="button">Clear</button>
          </div>

          <div id="status" class="status"></div>
        </form>

        <section class="card">
          <h2>Response</h2>
          <pre id="output">Ready</pre>
        </section>
      </section>
    </main>

    <script>
      (function () {
        var state = { mode: 'login', busy: false };

        var tabLogin = document.getElementById('tabLogin');
        var tabRegister = document.getElementById('tabRegister');
        var form = document.getElementById('authForm');
        var formTitle = document.getElementById('formTitle');
        var submitBtn = document.getElementById('submitBtn');
        var clearBtn = document.getElementById('clearBtn');
        var statusEl = document.getElementById('status');
        var outputEl = document.getElementById('output');

        var loginGroup = document.getElementById('loginGroup');
        var registerGroup = document.getElementById('registerGroup');

        var loginInput = document.getElementById('loginInput');
        var loginPassword = document.getElementById('loginPassword');

        var registerEmail = document.getElementById('registerEmail');
        var registerPassword = document.getElementById('registerPassword');

        function setStatus(text, kind) {
          statusEl.textContent = text;
          statusEl.className = 'status';
          if (kind) {
            statusEl.classList.add(kind);
          }
        }

        function setOutput(payload) {
          outputEl.textContent = JSON.stringify(payload, null, 2);
        }

        function setBusy(flag, text) {
          state.busy = flag;
          submitBtn.disabled = flag;
          clearBtn.disabled = flag;
          if (flag) {
            submitBtn.textContent = text || 'Please wait...';
            return;
          }
          submitBtn.textContent = state.mode === 'login' ? 'Login' : 'Register';
        }

        function setMode(mode) {
          state.mode = mode;
          var isLogin = mode === 'login';

          tabLogin.classList.toggle('active', isLogin);
          tabRegister.classList.toggle('active', !isLogin);

          loginGroup.classList.toggle('hidden', !isLogin);
          registerGroup.classList.toggle('hidden', isLogin);

          formTitle.textContent = isLogin ? 'Login' : 'Register';
          submitBtn.textContent = isLogin ? 'Login' : 'Register';

          loginInput.required = isLogin;
          loginPassword.required = isLogin;

          registerEmail.required = !isLogin;
          registerPassword.required = !isLogin;

          setStatus('', '');
        }

        function normalizeError(error) {
          if (error && error.payload) {
            return error.payload;
          }

          return {
            success: false,
            message: error && error.message ? error.message : 'Unexpected error'
          };
        }

        function extractMessage(payload, fallback) {
          if (!payload) {
            return fallback;
          }

          if (typeof payload === 'string') {
            return payload;
          }

          if (typeof payload.message === 'string') {
            return payload.message;
          }

          if (Array.isArray(payload.message) && payload.message.length > 0) {
            return String(payload.message[0]);
          }

          return fallback;
        }

        async function request(path, init) {
          var response = await fetch(path, init);
          var text = await response.text();
          var payload = null;

          try {
            payload = text ? JSON.parse(text) : null;
          } catch {
            payload = text;
          }

          if (!response.ok) {
            throw {
              status: response.status,
              payload: payload
            };
          }

          return payload;
        }

        function validateLogin() {
          if (!loginInput.value.trim()) {
            return { ok: false, message: 'Email is required.' };
          }

          if (loginPassword.value.length < 6) {
            return { ok: false, message: 'Password must be at least 6 characters.' };
          }

          return {
            ok: true,
            payload: {
              email: loginInput.value.trim(),
              password: loginPassword.value
            }
          };
        }

        function validateRegister() {
          if (!registerEmail.value.trim()) {
            return { ok: false, message: 'Email is required.' };
          }

          if (registerPassword.value.length < 6) {
            return { ok: false, message: 'Password must be at least 6 characters.' };
          }

          return {
            ok: true,
            payload: {
              email: registerEmail.value.trim(),
              password: registerPassword.value
            }
          };
        }

        async function onSubmit(event) {
          event.preventDefault();

          if (state.busy) {
            return;
          }

          var endpoint = state.mode === 'login' ? '/auth/login' : '/auth/register';
          var validation = state.mode === 'login' ? validateLogin() : validateRegister();

          if (!validation.ok) {
            setStatus(validation.message, 'err');
            return;
          }

          try {
            setBusy(true, state.mode === 'login' ? 'Logging in...' : 'Registering...');
            setStatus('Sending request...', 'note');

            var result = await request(endpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(validation.payload)
            });

            if (result && result.accessToken) {
              window.localStorage.setItem('auth_ui_access_token', result.accessToken);
            }
            if (result && result.refreshToken) {
              window.localStorage.setItem('auth_ui_refresh_token', result.refreshToken);
            }

            setOutput(result);
            setStatus(state.mode === 'login' ? 'Login successful.' : 'Registration successful.', 'ok');
          } catch (error) {
            var normalized = normalizeError(error);
            setOutput(normalized);
            setStatus(extractMessage(normalized, 'Request failed.'), 'err');
          } finally {
            setBusy(false);
          }
        }

        function clearForm() {
          form.reset();
          setStatus('Form cleared.', 'note');
        }

        form.addEventListener('submit', onSubmit);
        clearBtn.addEventListener('click', clearForm);
        tabLogin.addEventListener('click', function () {
          setMode('login');
        });
        tabRegister.addEventListener('click', function () {
          setMode('register');
        });

        setMode('login');
      })();
    </script>
  </body>
</html>`;
  }
}
