
// Type for user registration data
export interface UserData {
    username: string;
    email: string;
    password: string;
  }
  export interface LoginData {
    username: string
  }
  
  // Type for input change event handler
  export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
  