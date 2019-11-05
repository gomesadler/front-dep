import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { PesquisaDTO } from "../../models/pesquisa.dto";

@Injectable()
export class PesquisaService {


    constructor(public http: HttpClient) {

    }

    findAll(): Observable<PesquisaDTO[]> {
        return this.http.get<PesquisaDTO[]>(`${API_CONFIG.depUrl}/listarPesquisas`)
    }

}