import "./styles/normalize.css";
import "./styles/main.scss";
import "./static/logo.svg";
import App from './components/App.svelte';

const app = new App({
    target: document.getElementById('main'),
    data: {
      quotes: []
    },
});