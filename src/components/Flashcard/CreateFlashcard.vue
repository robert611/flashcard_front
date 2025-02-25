<template>
    <div class="container mt-4">
        <h2 class="mb-3">Dodawanie fiszek</h2>
        <div v-for="(fiszka, index) in fiszki" :key="index" class="mb-3 p-3 border rounded">
            <div class="mb-2">
                <label class="form-label">Nazwa fiszki</label>
                <input type="text" class="form-control" v-model="fiszka.nazwa" placeholder="Wpisz nazwę" />
            </div>
            <div class="mb-2">
                <label class="form-label">Wartość fiszki</label>
                <input type="text" class="form-control" v-model="fiszka.wartosc" placeholder="Wpisz wartość" />
            </div>
            <button class="btn btn-danger" @click="removeFlashcard(index)">Usuń</button>
        </div>
        <button class="btn btn-primary" @click="addFlashcard">Dodaj nową fiszkę</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fiszki: [{ nazwa: '', wartosc: '' }]
        };
    },
    methods: {
        addFlashcard() {
            this.fiszki.push({ nazwa: '', wartosc: '' });
        },
        removeFlashcard(index) {
            this.fiszki.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
