document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("langSwitcher");

    const isDefaultHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    const getLang = () => isDefaultHost ? "en" : localStorage.getItem("lang") || "en";

    const setLang = (lang) => {
        if (!isDefaultHost) localStorage.setItem("lang", lang);
    };

    let translations = {};

    const t = (key) => {
        return key.split('.').reduce((obj, i) => (obj && obj[i]) ? obj[i] : key, translations);
    };

    const applyTranslations = () => {
        document.querySelectorAll("[data-t]").forEach(el => {
            const key = el.getAttribute("data-t");
            el.innerText = t(key);
        });

        const title = document.querySelector("title");
        if (title && title.hasAttribute("data-t")) {
            title.innerText = t(title.getAttribute("data-t"));
        }
    };

    const loadLang = (lang) => {
        fetch(`/lang/${lang}.json`)
            .then(res => res.json())
            .then(data => {
                translations = data;
                applyTranslations();
            });
    };

    const currentLang = getLang();
    select.value = currentLang;
    loadLang(currentLang);

    select.addEventListener("change", () => {
        const lang = select.value;
        setLang(lang);
        loadLang(lang);
    });
});
