import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import pl from "@/locales/pl.json";

const savedLocale = localStorage.getItem("appLanguage") || "pl";

const i18n = createI18n({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: "en",
    messages: { en, pl },
});

export default i18n;
