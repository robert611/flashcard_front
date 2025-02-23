<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
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
                        <router-link to="/" class="nav-link" :class="{ active: route.path === '/' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/the-welcome" class="nav-link" :class="{ active: route.path === '/the-welcome' }">Welcome</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" :class="{ active: route.path === '/login' }">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" :class="{ active: route.path === '/register' }">Register</router-link>
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
</style>
