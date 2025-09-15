# 🎶📰 Mini App News & Music

Ceci est une petite application web que j’ai réalisée dans le cadre d’un test technique.  
Elle permet d’afficher des **actualités en français** (via NewsAPI) ainsi qu’une **liste de musiques** issue d’un fichier JSON local.  

---

## 🚀 Fonctionnalités
- Récupération d’articles via **NewsAPI** (titres, descriptions, liens).  
- Affichage d’une liste de musiques simulées à partir d’un fichier **music.json**.  
- Interface simple et responsive, avec un design moderne (cartes, hover, header fixe).  
- Code écrit en **JavaScript ** (sans framework), HTML et CSS.  

---

## 📂 Organisation du projet
mini-app/
│── index.html # Structure principale
│── style.css # Styles (design responsive)
│── script.js # Logique (API, affichage dynamique)
│── music.json # Données simulées pour la partie musique
│── README.md # Documentation du projet

---

## 🛠️ Comment lancer l’application

1. **Cloner le projet**  
   ```bash
   git clone https://github.com/Naotymn/mini-app
   cd mini-app
   
Démarrer un serveur local
Avec Python par exemple :
py -m http.server 5500

Puis ouvrir http://localhost:5500/index.html                     
(On peut aussi utiliser Node.js http-server ou l’extension VS Code Live Server)

Configurer NewsAPI:
- J’ai déjà intégré ma clé API dans `script.js` pour ce rendu.  
- Si vous souhaitez tester avec votre propre clé :  
  1. Créez un compte gratuit sur [https://newsapi.org](https://newsapi.org)  
  2. Récupérez votre clé API  
  3. Remplacez la valeur dans `script.js` à l’endroit prévu.


✨ Aperçu

L’application affiche :

Une section Actualités avec des cartes pour chaque article (titre + description + lien).

Une section Musique avec une liste de morceaux issus du fichier JSON local.

Le tout est responsive et reste lisible sur mobile.

👩‍💻 Technologies utilisées:

HTML5 / CSS3 pour la structure et le design
JavaScript pour la logique et les appels API
Git + GitHub pour le versionnement et le partage du projet

📌 Remarques: 

J’ai utilisé un proxy CORS pour pouvoir interroger NewsAPI depuis le navigateur.
Pour une mise en production, il faudrait gérer ces appels via un petit backend pour plus de fiabilité.

✍️ Auteur:

Projet réalisé par Naomy dans le cadre d’un test technique.
