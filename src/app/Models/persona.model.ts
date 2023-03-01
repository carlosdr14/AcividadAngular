export interface PersonaM
{
    id?: number;
    name: string;
    email?: string;
    phone: string;
    password?: string;
    role: number;
    active: boolean;
    activation_code?: string;
}