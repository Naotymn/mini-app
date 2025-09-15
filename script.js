console.log("🚀 App démarrée");
// --- ACTUALITÉS avec NewsAPI et proxy ---
// --- ACTUALITÉS FR via NewsAPI + proxy (avec logs + garde-fous) ---
const proxy = "https://cors-anywhere.herokuapp.com/";
const newsBase = "https://newsapi.org/v2/everything?q=France&language=fr&pageSize=5";

fetch(proxy + newsBase, {
  headers: { "X-Api-Key": "c284b5181cae438e86c048f821da7643" } // <-- mets ta clé ici
})
  .then(async (res) => {
    // Pour bien comprendre ce qu'on reçoit:
    const text = await res.text();
    console.log("Réponse brute NewsAPI:", text);
    try { return JSON.parse(text); } catch (e) {
      throw new Error("Réponse non JSON (proxy non activé ?)");
    }
  })
  .then((data) => {
    console.log("JSON NewsAPI:", data);
    const div = document.getElementById("news-data");

    if (data.status !== "ok") {
      div.innerHTML = `⚠️ Erreur NewsAPI: ${data.code || ""} ${data.message || ""}`;
      return;
    }
    if (!data.articles || data.articles.length === 0) {
      div.innerHTML = "Pas d'articles trouvés.";
      return;
    }

    div.innerHTML = data.articles.map((article) => `
      <div class="card">
        <h3>${article.title || "Sans titre"}</h3>
        <p>${article.description || ""}</p>
        <a href="${article.url}" target="_blank" rel="noopener">Voir l'article</a>
      </div>
    `).join("");
  })
  .catch((err) => {
    console.error("Erreur fetch NewsAPI:", err);
    document.getElementById("news-data").innerText =
      "Erreur lors du chargement des actualités.";
  });


// --- MUSIQUE depuis JSON ---
fetch("music.json")
  .then(res => res.json())
  .then(tracks => {
    const div = document.getElementById("music-data");
    div.innerHTML = tracks.map(track => `
      <div class="card">
        <h3>${track.title}</h3>
        <p>Artiste: ${track.artist}</p>
        <a href="${track.link}" target="_blank">Écouter</a>
      </div>
    `).join("");
  })
  .catch(err => {
    document.getElementById("music-data").innerText = "Erreur lors du chargement des musiques.";
    console.error(err);
  });
