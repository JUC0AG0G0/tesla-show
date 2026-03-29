export type VehicleModelId = "model3" | "modely" | "models" | "modelx" | "cybertruck";

export interface CarInstance {
  id: number;
  model: VehicleModelId;
  x: number;
  y: number;
  rotation: number;
  timeline: TimelineTrack[];
}

export interface Project {
  version: number;
  audio: string;
  frameInterval: number;
  cars: CarInstance[];
}
