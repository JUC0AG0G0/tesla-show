---
sidebar_position: 3
---
# Architecture Overview

Ce projet est un monorepo structuré autour d’un noyau logique central, de renderers spécialisés et d’une couche UI multi-applications.

Objectif : séparer strictement la logique métier du rendu et de l’environnement d’exécution.

---

## 🧠 Structure globale

apps/ → interfaces utilisateur (desktop + Tauri)
packages/ → logique métier + moteurs + renderers
docs-site/ → documentation technique (Docusaurus)
scripts/ → tooling interne (build, export, dev)
tests/ → tests unitaires, intégration, e2e


---

## 🖥️ Apps (UI Layer)

### apps/desktop

Application frontend principale (Vite + React + TypeScript)

Responsabilités :
- Interface utilisateur
- Navigation (pages)
- State management
- Organisation des features

Structure :
- components/ → UI réutilisable
- features/ → modules fonctionnels
- pages/ → routing
- services/ → logique externe / API
- store(s)/ → état global
- hooks/ → logique React réutilisable
- styles/ → styling global

---

### apps/tauri

Wrapper desktop natif (Rust + Tauri)

Responsabilités :
- Intégration système
- Permissions (capabilities)
- Bridge frontend ↔ backend
- Packaging desktop

Structure Rust :
- src-tauri/
  - main.rs → entrypoint
  - lib.rs → logique interne
  - build.rs → hooks de build
  - tauri.conf.json → configuration

---

## ⚙️ Core Engine (packages/core)

Le cœur logique du système.

Responsabilités :
- Timeline engine
- Playback
- Gestion des projets
- Validation métier
- Keyframes & tracks

Modules :

- timeline/
  - engine.ts → moteur principal
  - evaluator.ts → calcul d’état à t
  - frame-converter.ts → conversion temporelle

- project/
  - loader.ts → chargement projet
  - saver.ts → export projet

- validation/
  - tesla-validator.ts → contraintes spécifiques

---

## 🎨 Renderers (stateless)

Principe fondamental :
> Les renderers ne contiennent aucune logique métier. Ils affichent uniquement un état.

---

### packages/renderer-2d

Renderer canvas 2D

Responsabilités :
- Rendu 2D (canvas)
- Layers
- Visualisation rapide
- Simulation simplifiée

Modules :
- canvas/
- scene.ts
- lights/
- layers/
- car.ts
- grid.ts

---

### packages/renderer-3d

Renderer 3D (WebGL)

Responsabilités :
- Scène 3D
- Animation
- Lighting system
- Véhicules
- Loaders de modèles

Modules :
- scene/
- lights/
- vehicles/
- animations/
- loaders/

---

## 🚗 Vehicle Models (packages/vehicle-models)

Bibliothèque de données véhicules.

Responsabilités :
- Modèles (Model 3, Y, X, Cybertruck)
- Géométrie
- Configurations lumineuses
- Schémas de validation

Structure :
- models/
- geometry/
- lights-config/
- schemas/
- model3/
  - model.json
  - shape2d.ts

---

## 🔗 Shared (packages/shared)

Lib commune partagée.

Contient :
- types globaux
- constantes
- utilitaires mathématiques
- helpers

---

## 🧪 Tooling

### scripts/

- dev.ts → environnement de dev
- build.ts → build monorepo
- clean.ts → nettoyage des artefacts
- export.ts → export final

---

### tests/

- unit/ → tests unitaires
- integration/ → tests inter-modules
- e2e/ → tests complets

---

## 🧩 Philosophie d’architecture

- Core = vérité métier
- Renderers = exécution pure
- UI = interaction utilisateur
- Models = données statiques
- Shared = couche commune contrôlée

---

## 🔁 Flux de données
UI → Core → State → Renderers → Output visuel


Principe :
- aucune logique métier dans les renderers
- tout passe par le core
- rendu strictement déterministe

---

## 🧠 Résumé

Architecture monorepo orientée séparation stricte des responsabilités :

- UI indépendante
- moteur central unique
- renderers stateless
- données isolées
- tooling centralisé