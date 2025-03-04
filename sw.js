self.addEventListener('install', (event) => {
    console.log('Service Worker installé');
    self.skipWaiting();  // Force l’installation immédiate
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activé');
    return self.clients.claim();  // Prend en charge toutes les pages ouvertes
});
