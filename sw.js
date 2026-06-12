// Service worker mínimo - necessário apenas para habilitar a opção
// "Instalar app" / "Adicionar à área de trabalho" no navegador.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('fetch', () => {});
