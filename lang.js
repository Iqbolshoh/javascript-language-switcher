document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("langSwitcher");

    // Check if host is local
    const isDefaultHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    // Get current language
    const getLang = () => isDefaultHost ? "en" : localStorage.getItem("lang") || "en";

    // Save language
    const setLang = (lang) => {
        if (!isDefaultHost) localStorage.setItem("lang", lang);
    };

    let translations = {};

    // Translate by key (e.g. card.title)
    const t = (key) => {
        return key.split('.').reduce((obj, i) => (obj && obj[i]) ? obj[i] : key, translations);
    };

    // Apply translations to all elements
    const applyTranslations = () => {
        document.querySelectorAll("[data-t]").forEach(el => {
            el.innerText = t(el.getAttribute("data-t"));
        });

        const title = document.querySelector("title");
        if (title?.hasAttribute("data-t")) {
            title.innerText = t(title.getAttribute("data-t"));
        }
    };

    // Load language file and apply
    const loadLang = (lang) => {
        fetch(`/lang/${lang}.json`)
            .then(res => res.json())
            .then(data => {
                translations = data;
                applyTranslations();
            });
    };

    // Init language
    const currentLang = getLang();
    select.value = currentLang;
    loadLang(currentLang);

    // On language change
    select.addEventListener("change", () => {
        const lang = select.value;
        setLang(lang);
        loadLang(lang);
    });
});
