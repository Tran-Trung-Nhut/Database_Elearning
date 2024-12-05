export interface UserLoginDto{
    token: string, 
    firstName: string, 
    lastName: string, 
    email: string, 
    id: string, 
    role: string
}

export const defaultUserLogin: UserLoginDto ={
    token: "", 
    firstName: "", 
    lastName: "", 
    email: "", 
    id: "",
    role: ""
}