/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
  const result = {
    agents: {},
    Sitemap: []
  };

  const lines = text.split("\n");
  let currentAgent = "*";

  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith("#")) continue;

    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();

    const k = key.trim().toLowerCase();


    if (k === "user-agent") {
      currentAgent = value.toLowerCase();

      if (!result.agents[currentAgent]) {
        result.agents[currentAgent] = {
          Allow: [],
          Disallow: []
        };
      }
    }

    if (!result.agents[currentAgent]) {
      result.agents[currentAgent] = {
        Allow: [],
        Disallow: []
      };
    }

    if (k === "allow") {
      if (!result.agents[currentAgent].Allow.includes(value)) {
        result.agents[currentAgent].Allow.push(value);
      }
    }

    if (k === "disallow") {
  if (value !== "" && !result.agents[currentAgent].Disallow.includes(value)) {
    result.agents[currentAgent].Disallow.push(value);
  }
}

    if (k === "sitemap") {
      if (!result.Sitemap.includes(value)) {
        result.Sitemap.push(value);
      }
    }
  }

  return result;
}

module.exports = parseRobots;