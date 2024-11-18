<script setup lang="ts">
import { ref } from 'vue';
import { OllamaService } from "@/services/OllamaService";

const ollamaService = new OllamaService();
const prompt = ref('');
const responseOllama = ref('');
const loadingDataOllama = ref(false);

const ollama = async (prompt: string) => {
  try {
    loadingDataOllama.value = true;
    const data = await ollamaService.ollamaService(prompt);
    responseOllama.value = data;
  } catch (error) {
    console.log(error);
  } finally {
    loadingDataOllama.value = false;
  }
}
</script>

<template>
  <div class="container">
    <n-card title="SpringIA with Ollama" class="card">
      <n-input type="textarea" v-model:value="prompt" placeholder="Ask something..." />
      <n-button class="button-send" strong secondary type="primary" @click="ollama(prompt)" :loading="loadingDataOllama" :disabled="!prompt">
        {{ loadingDataOllama ? "Sending" : "Send" }}
      </n-button>
    </n-card>
    <n-card v-if="responseOllama.length != 0" class="card">
        <strong>{{ responseOllama }}</strong>
    </n-card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
}

.card {
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.output-content {
  max-height: 150px;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1.5;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.button-send {
  margin-top: 20px;
}
</style>
