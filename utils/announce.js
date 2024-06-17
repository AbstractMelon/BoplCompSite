let announceCache = "";
let eventCache = "";

generateCache();
export function getCache() {
  return [announceCache, eventCache];
}
export function generateCache() {
  generateEventCache();
  generateAnnounceCache();

  return getCache();
}
function generateAnnounceCache() {
  let html = "Placeholder announcement!";

  announceCache = html;
  return html;
}
function generateEventCache() {
  let html = "";

  eventCache = html;
  return html;
}
