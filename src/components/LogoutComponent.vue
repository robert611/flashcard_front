<script setup>
import { useRouter } from "vue-router";
import { logout } from "@/services/authService.js";
import {onMounted} from "vue";

const router = useRouter();

const logoutUser = async () => {
    try {
        const response = await logout();
        console.log(response);
        await router.push("/login");
    } catch (error) {
        console.error(error);
    }
};

onMounted(logoutUser);

</script>
