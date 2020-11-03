import { Request, Response } from 'express';
import knex from '../database/connection';

interface Users{
    id: number;
    name: string;
    cpf: string;
    email: string;
    rg: string;
    telefone: string;
    celular: string;
    isWhatsapp: boolean;
    isActive: boolean;
    password: string;
    dtNascimento: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    avatar: string;
}

export default {
    async index(request: Request, response: Response) {
        const users = await knex.select("*").from("users")
        .join("enderecos", "users.idEndereco", "enderecos.id");

        let usersReturn = [] as Users[]
        
        users.forEach(user => {
            return (
                usersReturn.push({
                    id: user.id,
                    name: user.name,
                    cpf: user.cpf,
                    email: user.email,
                    rg: user.rg,
                    telefone: user.telefone,
                    celular: user.celular,
                    isWhatsapp: user.isWhatsapp === 1 ? true : false,
                    isActive: user.isActive === 1 ? true : false,
                    password: user.password,
                    dtNascimento: user.dtNascimento,
                    logradouro: user.logradouro,
                    numero: user.numero,
                    bairro: user.bairro,
                    cidade: user.cidade,
                    uf: user.uf,
                    cep: user.cep,
                    avatar: `http://localhost:3333/uploads/${user.avatar}`,
                })
            );
        })

        return response.json(usersReturn);
    },
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const users = await knex.select("*")
            .from("users")
            .join("enderecos", "users.idEndereco", "enderecos.id")
            .where('id', id)

        return response.json(users);
    },
    async remove(request: Request, response: Response) {
        const { id } = request.params;

        const users = await knex.delete()
            .from("users")
            .join("enderecos", "users.idEndereco", "enderecos.id")
            .where('id', id)

        return response.json(users);
    },
    async create(request: Request, response: Response) {
        const {
            name,
            cpf,
            email,
            rg,
            telefone,
            celular,
            isWhatsapp,
            password,
            dtNascimento,
            logradouro,
            numero,
            bairro,
            cidade,
            uf,
            cep,
        } = request.body;

        const { avatar } = request.files;

        const trx = await knex.transaction();

        try {
            const insertedAddress = await trx('enderecos').insert({
                logradouro,
                numero,
                bairro,
                cidade,
                uf,
                pais: "Brasil",
                cep
            });

            const address_id = insertedAddress[0];

            await trx('users').insert({
                name,
                avatar: avatar[0].filename,
                celular,
                email,
                cpf,
                rg,
                password,
                telefone,
                isWhatsapp: isWhatsapp === "T" ? true : false,
                dtNascimento,
                idEndereco: address_id,
                isActive: true,
                createdBy: 1,
                updatedBy: 1,
                dtLastUpdate: Date.now(),
            })

            await trx.commit();

            return response.status(201).send();

        } catch (err) {
            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new user',
                error_msg: err
            })
        }

        return response.json({ message: "Create" });
    }
}