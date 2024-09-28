import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users.models'; // Definirás el modelo de usuario basado en tu backend
import { AuthenticationRequest, AuthenticationResponse, SignupRequest } from '../models/auth.models'; // Definirás los modelos según el backend

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "https://backendmood-5.onrender.com" + '/api/auth'; // URL base de la API
  //private apiUrl = "http://localhost:8080" + '/api/auth';

  constructor(private http: HttpClient) { }

  // Registro de usuarios
  signup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, signupRequest);
  }

  // Inicio de sesión
  login(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/login`, authRequest);
  }

  // Obtener todos los usuarios
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  // Obtener usuario por ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Crear usuario (solo si lo necesitas para un rol admin, por ejemplo)
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  // Actualizar usuario
  updateUser(id: number, userDetails: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, userDetails);
  }

  // Eliminar usuario
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }




    // Cierre de sesión
    logout(): void {
      localStorage.removeItem('token'); // Eliminar el token del localStorage
      localStorage.removeItem('userId'); // Eliminar cualquier otro dato de sesión (opcional)
      localStorage.removeItem('userRole'); // Eliminar cualquier otro dato de sesión (opcional)
    }
}
