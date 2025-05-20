class FakeRepo{
    constructor(){
        this.socios = new Map();
    }

    store(socio){
        this.socios.set(socio.id,socio);
    }

    show(id){
        return this.socios.get(id)
    }
}

class RegisterSocio{
    constructor(repo){
        this.repo=repo;
    }

    registerSocio(socio){
        this.repo.store(socio);
        return true;
    }

    showSocio(id){
        return this.repo.show(id);
    }
}

module.exports = {RegisterSocio : RegisterSocio, FakeRepo  :FakeRepo}