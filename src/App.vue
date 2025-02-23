<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import {computed} from "vue";

const route = useRoute();

const languageMap = {
    pl: { name: "Polski", flag: "https://flagcdn.com/w40/pl.png" },
    en: { name: "English", flag: "https://flagcdn.com/w40/gb.png" }
};

const currentLanguage = computed(() => languageMap[locale.value].name);
const flag = computed(() => languageMap[locale.value].flag);

const { locale } = useI18n();

const setLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("appLanguage", lang);
};

const isAuthenticated = computed(() => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token") !== null;
});

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container">
            <router-link to="/" class="navbar-brand">Flashcard</router-link>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">{{ $t("home") }}</router-link>
                    </li>
                    <li class="nav-item" v-if="!isAuthenticated">
                        <router-link to="/login" class="nav-link" :class="{ active: route.path === '/login' }">{{ $t("login.login") }}</router-link>
                    </li>
                    <li class="nav-item" v-if="!isAuthenticated">
                        <router-link to="/register" class="nav-link" :class="{ active: route.path === '/register' }">{{ $t("register.register") }}</router-link>
                    </li>
                    <li class="nav-item" v-if="isAuthenticated">
                        <router-link to="/logout" class="nav-link" :class="{ active: route.path === '/logout' }">{{ $t("logout") }}</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown">
                            <img :src="flag" class="flag-icon" alt="flag" /> {{ currentLanguage }}
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#" @click.prevent="setLanguage('pl')">
                                    🇵🇱 Polski
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" @click.prevent="setLanguage('en')">
                                    🇬🇧 English
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<style scoped>
.navbar {
    padding: 12px 20px;
}

.nav-link {
    font-size: 1rem;
}

.nav-link.active {
    font-weight: bold;
    text-decoration: underline;
}

.flag-icon {
    width: 20px;
    height: 15px;
    margin-right: 5px;
}
</style>
