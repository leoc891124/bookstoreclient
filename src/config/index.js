const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-web-frontend.herokuapp.com','https://book-store-demo12.herokuapp.com');

export default environmentUrls.get(window.location.hostname);