import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {
  constructor(private httpCliente: HttpClient) {}

  buscar(cep: string) {
    console.log(this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`));
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}

