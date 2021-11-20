import { EnderecoUsuario } from "./enderecoUsuario";

export interface Biblioteca {
    email: string,
    senha?: string,
    endereco: EnderecoUsuario[],
}