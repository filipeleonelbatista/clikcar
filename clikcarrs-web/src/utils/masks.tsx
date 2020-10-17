export function cep(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
    return e;
}

export function moeda(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value;
    return e;
}

export function telefone(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
    return e;
}
export function celular(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
    return e;
}

export function telefoneCelular(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    e.currentTarget.value = value;
    return e;
}

export function rg(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 12;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{3}).(\d{3})-(\d{1})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1})$/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
}

export function cnpj(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 18;
    let value = e.currentTarget.value;
    if (!value.match(/^(\d{2}).(\d{3}).(\d{3})\\(\d{4})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }
    e.currentTarget.value = value;
    return e;
}

export function cpfCnpj(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 17;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");  
    if (value.length < 14) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    } else {        
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }    
    e.currentTarget.value = value; 
    return e;
}

export function data(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.maxLength = 10;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");      
    value = value.replace(/(\d{2})(\d)/, "$1/$2");
    value = value.replace(/(\d{2})(\d{4})$/, "$1/$2");
    e.currentTarget.value = value; 
    return e;
}