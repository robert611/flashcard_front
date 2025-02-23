<script setup>
import { ref } from "vue";
import { register } from "@/services/authService";

const name = ref("");
const email = ref("");
const password = ref("");
const message = ref("");
const loading = ref(false);

const handleRegister = async () => {
    message.value = "";
    loading.value = true;

    try {
        const response = await register({
            name: name.value,
            email: email.value,
            password: password.value,
        });

        console.log(response);
        message.value = "✅ Registration successful!";
    } catch (error) {
        console.log(error);
        message.value = "❌ Registration failed! Check your details.";
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow-lg p-4" style="width: 400px">
            <h2 class="text-center text-success">Register</h2>
            <p v-if="message" class="text-center mt-2" :class="message.includes('✅') ? 'text-success' : 'text-danger'">
                {{ message }}
            </p>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                />
            </div>

            <button
                @click="handleRegister"
                class="btn btn-success w-100"
                :disabled="loading"
            >
                <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                Register
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
