# 🌐 JavaScript Language Switcher

A lightweight JavaScript project to dynamically switch website language using JSON files.  
Perfect for static websites and multilingual UI 🔁

![Preview](preview.png)

---

## 🚀 Features

✅ Supports `English`, `O‘zbekcha`, `Русский`, `Тоҷикӣ`  
✅ Pure Vanilla JavaScript — no frameworks  
✅ Responsive design using **Bootstrap 5**  
✅ Uses `data-t="key"` in HTML for translation  
✅ Language preference saved in `localStorage`  
✅ Super easy to extend — just edit JSON files!

---

## 📁 Folder Structure

```

📦 javascript-language-switcher/
┣ 📁 lang/
┃ ┣ en.json
┃ ┣ uz.json
┃ ┣ ru.json
┃ ┗ tj.json
┣ 📁 js/
┃ ┗ change.js
┣ 📁 css/
┃ ┗ style.css
┣ 🟦 index.html
┗ 📄 README.md

````

---

## 📥 How to Use

1. Clone the repo:

```bash
git clone https://github.com/Iqbolshoh/javascript-language-switcher.git
````

2. Run with live server or open `index.html` directly.

3. Language dropdown is at top-right:
   Select → auto translate without reload 🎯

---

## 📌 How It Works

* HTML uses `data-t="key"` attributes (e.g. `<h1 data-t="hero.title"></h1>`)
* JS fetches language JSON (e.g. `lang/en.json`)
* Text content replaced automatically with matching values
* `localStorage` remembers selected language

---

## 📄 Example JSON (`lang/en.json`)

```json
{
  "navbar": {
    "home": "Home",
    "about": "About"
  },
  "hero": {
    "title": "Welcome!",
    "subtitle": "We create modern multilingual websites."
  }
}
```

---

## 🧩 Add New Language

1. Create `lang/fr.json` or any new file
2. Add it to the `<select>` in HTML
3. Done ✅

---

## 📜 License

MIT © [Iqbolshoh Ilhomjonov](https://github.com/Iqbolshoh)

---

## 🤝 Support

If you like this project, give it a ⭐ on GitHub!
Follow [@iqbolshoh](https://github.com/Iqbolshoh) for more frontend ideas 🎯