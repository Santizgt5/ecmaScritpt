const button = document.getElementById('btn');

button.addEventListener('click', async () => {
  const module = await import('./modules.js');
  console.log(module);
  module.hello();
});