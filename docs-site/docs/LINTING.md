# 🛠 Charte de Qualité Code (TS / TSX / Rust)

Ce projet utilise une configuration **ESLint 9+ (Flat Config)** et **Rust Clippy** pour garantir un code maintenable, performant et exempt de "code mort".

## 📜 Règles TypeScript & React

### 📏 Taille des Fichiers
| Règle | Limite | Action | Pourquoi ? |
| :--- | :--- | :--- | :--- |
| `max-lines` | **> 300 lignes** | ⚠️ `Warn` | Un fichier trop long est difficile à tester et à comprendre. |
| `max-lines` | **> 400 lignes** | ❌ `Error` | **Bloquant.** Le fichier doit être découpé en sous-composants ou modules. |

### 🗑 Code Mort & Imports
* **`no-unused-vars`** : Interdit les variables, fonctions ou arguments non utilisés.
    * *Exception* : Les variables commençant par un underscore (ex: `_index`) sont tolérées.
* **`no-duplicate-imports`** : Interdit d'importer plusieurs fois le même module.
* **`sort-imports`** : Force l'ordre alphabétique des imports pour éviter les conflits de merge et faciliter la lecture.

### 🛡 Sécurité du Typage (Anti-Any)
Le linter est configuré en mode **"Strict"** pour éviter que TypeScript ne devienne du JavaScript classique :
* **`no-explicit-any`** : Interdiction totale du mot-clé `any`. Utilisez des interfaces précises ou `unknown`.
* **`no-unsafe-*` (Assignment, Call, Member)** : Interdit d'assigner ou d'appeler des propriétés provenant de sources non typées.
* **`no-floating-promises`** : Interdit de lancer une promesse sans gérer son retour (via `await` ou `.catch()`).

### ⚛️ Bonnes Pratiques React
* **`react/self-closing-comp`** : Force l'auto-fermeture des composants sans enfants (`<div />` au lieu de `<div></div>`).
* **`react-hooks/rules-of-hooks`** : Sécurité absolue sur l'ordre d'appel des Hooks.
* **`react/react-in-jsx-scope`** : Désactivé (inutile avec les versions modernes de React).

### 💅 Rigueur Globale
* **`eqeqeq`** : Utilisation obligatoire de l'égalité stricte (`===` et `!==`).
* **`curly`** : Accolades obligatoires pour tous les blocs (`if`, `else`, `for`), même sur une seule ligne.
* **`no-console`** : Autorise `console.warn` et `error`, mais bloque les `console.log` de debug qui polluent la production.

---


## 🚀 Commandes Utiles

| Commande | Description |
| :--- | :--- |
| `npm run lint` | Analyse tout le projet (JS/TS/TSX). |
| `npm run lint:fix` | Tente de corriger automatiquement les erreurs de style. |



> **Note :** Si vous estimez qu'une règle est trop restrictive pour un cas très spécifique, discutez-en avant d'ajouter un commentaire `// eslint-disable-next-line`.

