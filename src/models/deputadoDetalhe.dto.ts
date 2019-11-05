export interface DeputadoDetalheDTO{
     
    id: string,
    uri: string,
    nomeCivil: string,
    ultimoStatus: {
      id: string,
      uri: string,
      nome: string,
      siglaPartido: string,
      idLegislatura: 0,
      urlFoto: string,
      email: string,
      data: string,
      nomeEleitoral: string,
      gabinete: {
        nome: string,
        predio: string,
        sala: string,
        andar: string,
        telefone: string,
        email: string
      },
      situacao: string,
      condicaoEleitoral: string,
      descricaoStatus: string
    },
    cpf: string,
    sexo: string,
    urlWebsite: string,
    redeSocial: {},
    dataNascimento: string,
    dataFalecimento: string,
    ufNascimento: string,
    municipioNascimento: string,
    escolaridade: string,
    dados: {}

}