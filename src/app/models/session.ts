import { User } from "./user";
import { Token } from "./token";
export interface Session {
    usuario: User,
    token: Token
}