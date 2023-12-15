export interface IOnibus {
    id?: number;
    motorista: string;
    destino: string;
    origem: string;
    assentos: number;
}

export interface IAssento {
    id?: number;
    fullname: string;
    passageiro: string;
    numero: number;
}