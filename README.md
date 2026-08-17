[# **Gemini URL Prompt - Auto Prefill**

A simple but powerful Chrome extension (Manifest V3) that automatically pre-fills **and sends** your prompt to [Google Gemini](https://gemini.google.com/) using URL parameters.

Gemini currently does not natively support passing prompts via the URL (like ?prompt=Hello). This extension bridges that gap, enabling seamless integration with productivity tools like Alfred, Raycast, Shortcuts, or simple browser bookmarks.

## **🚀 Features**

* **URL Parameter Support**: Use ?prompt= or ?q= to send text to Gemini.
* **Auto-Fill & Auto-Send**: Fills the input box and automatically presses Enter to submit your prompt.
* **Smart Detection**: Retries every 500 ms (up to ~10 seconds) until the input box is ready, so it works even if Gemini takes a while to load (SPA support).
* **Localized**: Ships with English and Traditional Chinese (zh_TW) descriptions.
* **Privacy First**: Runs entirely locally. No data is collected or sent to third-party servers.

## **📸 Demo / Tutorial**

<video src="https://files.catbox.moe/v8fy80.webm" controls width="100%"></video>

## **📥 Installation**

### **Manual Installation (Developer Mode)**

1. Clone or download this repository.
2. Open Chrome and navigate to chrome://extensions/.
3. Toggle **Developer mode** in the top right corner.
4. Click **Load unpacked**.
5. Select the folder containing the extension files.

## **💡 Usage**

Simply append ?prompt= followed by your text to the Gemini URL.

**Example:**

[https://gemini.google.com/app?prompt=Write a poem about coding](https://gemini.google.com/app?prompt=Write%20a%20poem%20about%20coding)

**Alternative parameter:**

[https://gemini.google.com/app?q=Explain quantum computing](https://gemini.google.com/app?q=Explain%20quantum%20computing)

The prompt is filled into the input box and **sent automatically** once Gemini loads.

### **Integration Examples**

#### **Alfred / Raycast / Spotlight**

Create a custom web search or workflow with the following URL pattern:

https://gemini.google.com/app?q=%s{query}

#### **Windows Run / Mac Shortcuts**

Create a shortcut that opens Chrome with the URL:
chrome.exe "https://gemini.google.com/app?prompt=Your fixed prompt"

#### **Chrome Custom Search Engine**

Turn Gemini into a search engine so you can type your prompt directly in the address bar:

1. Open Chrome **Settings** → **Search engine** → **Manage search engines and site search**.
2. Click **Add** (next to "Site search").
3. Fill in the fields:
   * **Search engine**: `Gemini`
   * **Shortcut**: `@g` or `@gem`
   * **URL with %s in place of query**: `https://gemini.google.com/app?q=%s`
4. Click **Save**, then type `@g your prompt` in the address bar and press **Enter** — the prompt is sent straight to Gemini.

## **🛠 Development**

The extension uses a Content Script (`content.js`) to inject the text. Since Gemini uses a complex framework (likely Angular/Lit), the script simulates native user input events (`InputEvent('input')`) so the application's internal state recognizes the text change, then dispatches a native `Enter` key press to submit. A retry loop (every 500 ms, up to 20 attempts) handles slow page loads.

## **🔒 Privacy**

This extension does not collect, store, or transmit any personal data. It only operates on gemini.google.com to fill the input field based on your current URL.

## **📄 License**

MIT License
](https://files.catbox.moe/v8fy80.webm)
