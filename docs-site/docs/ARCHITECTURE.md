# Architecture Overview

Monorepo with strict separation:

- UI (React)
- Logic (core)
- Rendering (2D/3D)
- Data (vehicle-models)

Renderers are passive: they receive state → render only.
