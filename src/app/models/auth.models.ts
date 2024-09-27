export interface AuthenticationRequest {
    email: string;
    password: string;
  }
  
  export interface AuthenticationResponse {
    jwt: string;
    userId: number;
    userRole: string;
  }
  
  export interface SignupRequest {
    name: string;
    email: string;
    password: string;
  }
  