<script setup>
import { ref } from "vue";
import { login } from "@/services/authService";
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref("");
const password = ref("");
const message = ref("");
const loading = ref(false);

const handleLogin = async () => {
    message.value = "";
    loading.value = true;

    try {
        const response = await login({
            email: email.value,
            password: password.value,
        });
        console.log(response);
        message.value = "✅ Login successful!";

        await router.push({path: "/"});
    } catch (error) {
        console.log(error);
        message.value = "❌ Login failed! Check your credentials.";
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow-lg p-4" style="width: 400px">
            <h2 class="text-center text-success">{{ $t('login.login') }}</h2>
            <p v-if="message" class="text-center mt-2" :class="message.includes('✅') ? 'text-success' : 'text-danger'">
                {{ message }}
            </p>

            <div class="mb-3">
                <label for="email" class="form-label">{{ $t('login.email') }}</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    :placeholder="$t('login.email_placeholder')"
                    required
                />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">{{ $t('login.password') }}</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control"
                    :placeholder="$t('login.password_placeholder')"
                    required
                />
            </div>

            <button
                @click="handleLogin"
                class="btn btn-success w-100"
                :disabled="loading"
            >
                <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                {{ $t('login.login') }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 12px;
}
button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
</style>
