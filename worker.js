// worker.js

// O Worker começa a escutar a mensagem vinda da thread principal
self.onmessage = function(e) {
  console.log("Mensagem recebida do thread principal:", e.data);

  // Simulação de um processamento pesado (exemplo simples)
  let result = 0;
  for (let i = 0; i < e.data.length; i++) {
    result += e.data[i];
  }

  // Enviar o resultado de volta para o thread principal
  self.postMessage(result);
};

