export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string; // Opcional si no vas a manejar la contraseña en actualizaciones
  }
  