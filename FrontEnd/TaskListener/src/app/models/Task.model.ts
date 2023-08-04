export interface Task {
  id: number;
  nombre: string;
  fechaCreacion: string;
  fechaLimite: string;
  prioridad: string;
  estado: 'pendiente' | 'en progreso' | 'completada';
  categorias: string[];
  etiquetas: string[];
}
