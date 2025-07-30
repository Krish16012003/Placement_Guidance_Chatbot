function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const BOT_ID = "RAT5TAWT1F";
const BOT_ALIAS_ID = "TSTALIASID";
const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:3546b072-e127-445e-88f7-52f3d7dccfd4";

const SESSION_ID = uuidv4();

AWS.config.region = REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: IDENTITY_POOL_ID
});

const lexClient = new AWS.LexRuntimeV2();

// ---------------- DOM-Ready Section ----------------
window.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const input = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const logoutBtn = document.getElementById("logout-btn");

  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");
  const authOverlay = document.getElementById("auth-overlay");
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");
  const loginBtn = document.getElementById("login-btn");
  const registerBtn = document.getElementById("register-btn");

  // Event Listeners
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  showRegister.addEventListener("click", () => {
    loginModal.classList.add("hidden");
    registerModal.classList.remove("hidden");
  });

  showLogin.addEventListener("click", () => {
    registerModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
  });

  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (!email.endsWith("@hyderabad.bits-pilani.ac.in")) {
      alert("Registration allowed only with your institute email.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    const hashedPassword = await hashPassword(password);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", hashedPassword);
    alert("Registration successful! Please log in.");
    registerModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
  });

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const hashedPassword = await hashPassword(password);

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && hashedPassword === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      authOverlay.style.display = "none";
      logoutBtn.classList.remove("hidden");
    } else {
      alert("Invalid email or password.");
    }
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    authOverlay.style.display = "flex";
    logoutBtn.classList.add("hidden");
  });

  // Session check on load
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    authOverlay.style.display = "none";
    logoutBtn.classList.remove("hidden");
  } else {
    authOverlay.style.display = "flex";
  }

  // Bot message functions (moved inside DOMContentLoaded so chatBox is in scope)
  async function sendMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    appendMessage(userText, "user");
    input.value = "";

    const params = {
      botAliasId: BOT_ALIAS_ID,
      botId: BOT_ID,
      localeId: "en_US",
      sessionId: SESSION_ID,
      text: userText,
    };

    try {
      const response = await lexClient.recognizeText(params).promise();
      const message = response.messages?.[0]?.content || "🤖 Sorry, I didn’t catch that.";
      appendMessage(message, "bot");
    } catch (error) {
      console.error("Lex error:", error);
      appendMessage("❌ Failed to connect to Lex.", "bot");
    }
  }

  function appendMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

// ---------------- Password Hashing ----------------
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
