export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString('pt-BR');
  return time.substr(0, 3) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}
