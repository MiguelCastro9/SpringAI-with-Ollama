import { createApp } from 'vue';
import { create, NButton, NCard, NInput, NSpin } from 'naive-ui';
import App from './App.vue';

const naive = create({ components: 
    [
        NInput,
        NCard,
        NButton,
        NSpin
    ]
});

createApp(App).use(naive).mount('#app');
