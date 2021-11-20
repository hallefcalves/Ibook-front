import { EnderecoUsuario } from "./enderecoUsuario";

export interface User {
    email: string,
    senha?: string,
    enderecoUsuario: EnderecoUsuario[],
    nome:  string,
    dataDeAniversario: Date,
    telefone1:  string,
    telefone2: string,
    _id: string,
    token: string
}
