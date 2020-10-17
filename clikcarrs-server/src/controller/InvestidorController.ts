import { Request, Response } from 'express';
import knex from '../database/connection';

export default {
    async index(request: Request, response: Response) {
        return response.json({ message: "OK" });
    },
    async show(request: Request, response: Response) {
        console.log(request.body);
        return response.json({ message: "Create" });
    },
    async create(request: Request, response: Response) {
        console.log(request.body);
        console.log(request.files );
        const {
            fotocnh,
            fotorg,
            fotocpf,
            fotocomprovanteresidencia,
            fotoinvestidor,
        } = request.files;
        // const {
        //     nome,
        //     cpfcnpj,
        //     email,
        //     rg,
        //     telefone,
        //     celular,
        //     iswhatsapp,
        //     password,
        //     passwordconfirm,
        //     logradouro,
        //     numero,
        //     bairro,
        //     cidade,
        //     uf,
        //     cep,
        //     nrcnh,
        //     validadecnh,
        //     banco,
        //     agencia,
        //     contacorrente,
        //     cpfconta,
        //     nomeconta
        // } = request.body;


        // const trx = await knex.transaction();

        // const point = {
        //     image: request.file.filename,
        //     name,
        //     email,
        //     whatsapp,
        //     latitude,
        //     longitude,
        //     city,
        //     uf
        // }

        // const insertedIds = await trx('points').insert(point);

        // const point_id = insertedIds[0];

        // const pointItems = items.split(',')
        //     .map((item: string) => Number(item.trim()))
        //     .map((item_id: number) => {
        //         return {
        //             item_id,
        //             point_id,
        //         }
        //     })

        // await trx('point_items').insert(pointItems);

        // await trx.commit()

        // return response.json({
        //     id: point_id,
        //     ...point,
        // })
        // console.log(request.body);
        // return response.json({message:"Create"});
    }
}