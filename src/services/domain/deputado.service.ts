import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { DeputadoDTO } from "../../models/deputado.dto";
import { DeputadoDetalheDTO } from "../../models/deputadoDetalhe.dto";

@Injectable()
export class DeputadoService {



    constructor(public http: HttpClient
        //, idDep: String, 
        //idLeg: String
    ) {
        //this.idLeg = idLeg;
        // this.idDep = idDep;
    }

    findAll(): Observable<DeputadoDTO[]> {
        return this.http.get<DeputadoDTO[]>(`${API_CONFIG.depUrl}/listarDeputados`)
    }

    findDep(idDep: String, idLeg: String): Observable<DeputadoDetalheDTO> {
        return this.http.get<DeputadoDetalheDTO>(`${API_CONFIG.depUrl}/deputado/${idDep}/${idLeg}`)
    }

    findByUf(uf: String) {
        return this.http.get<DeputadoDTO[]>(`${API_CONFIG.depUrl}/listarDeputados?UF=${uf}`)
    }



}