
# 🎬 Documenter l’API CineClub avec Swagger

## 🎯 Objectif pédagogique

Apprendre à :
- Documenter une API REST avec Swagger (OpenAPI 3.x)
- Définir les routes, les paramètres, les corps de requête et les réponses
- Structurer un fichier `swagger.yaml` ou `swagger.json`
- Visualiser une documentation API à l’aide d’un outil comme Swagger Editor

---

## 📘 Contexte

Vous avez développé une API CineClub permettant de gérer une collection de films. Vous allez maintenant rédiger une **documentation technique** complète au format Swagger.

---

## ✅ À produire

Un fichier `swagger.yaml` (ou `swagger.json`) décrivant toute l’API CineClub.

---

## 📚 Spécifications à documenter

### 1. `GET /`
> Retourne la **liste complète des films**

### 2. `GET /:id`
> Récupère un **film par son ID**

### 3. `POST /`
> Ajoute un **nouveau film** (vérifie `id` et `titre`)

### 4. `PATCH /:id`
> Modifie le **titre** d’un film existant

### 5. `DELETE /:id`
> Supprime un film par son ID

---

## 💡 Suggestions techniques

- Utilisez des exemples pour les requêtes et réponses
- Ajoutez une description globale (`info`) à l’API

---

## 🚀 Bonus (facultatif)

- Ajouter une route `GET /ping` qui renvoie `{ message: "pong" }`
- Documenter les erreurs (400, 404…)

---

## 👀 Comment visualiser votre Swagger

> Vous n’avez **pas besoin d’un serveur Node** pour voir votre documentation Swagger.

### ✅ Méthode 1 : [https://editor.swagger.io](https://editor.swagger.io)
1. Allez sur : https://editor.swagger.io
2. Supprimez le contenu de l’éditeur
3. Copiez-collez votre fichier `swagger.yaml` dedans
4. Le rendu de votre documentation apparaît en direct à droite

### ✅ Méthode 2 : fichier local + Swagger UI (optionnel)
1. Installez Swagger UI en local (si vous avez Node)
2. Ou utilisez une extension VS Code comme **Swagger Viewer**
