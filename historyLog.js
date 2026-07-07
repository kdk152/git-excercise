// Ups - ovo je trebalo biti razvijano na feature/history-log, a ne na main!
const log = [];

function record(operation, a, b, result) {
  log.push({ operation, a, b, result, at: Date.now() });
}

function getHistory() {
  return log;
}

module.exports = { record, getHistory };
