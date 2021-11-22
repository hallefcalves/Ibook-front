import { User } from "./user";
import { Token } from "./token";
import { Biblioteca } from "./biblioteca";
export interface Session {
    usuario: User,
    token: Token,
    biblioteca: Biblioteca, 
    //bibliotecaid: string
}