import { EnderecoUsuario } from "./enderecoUsuario";

export interface Biblioteca {
    email: string,
    senha?: string,
    enderecoBiblioteca: EnderecoUsuario[],
    nome:  string,
    nomeResponsavel: string,
    emailResponsavel: string,
    telefone1:  string,
    telefone2: string,
    token: string,
    _id: string,	
}