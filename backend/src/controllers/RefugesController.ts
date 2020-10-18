import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import * as Yup from 'yup';
import Refuge from '../models/Refuge';
import refugeView from '../views/refuges_view';

export default {
  async index(request: Request, response: Response) {
    const refugesRepository = getRepository(Refuge);

    const refuges = await refugesRepository.find({
      relations: ['images'],
    });

    return response.json(refugeView.renderMany(refuges));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const refugesRepository = getRepository(Refuge);

    const refuge = await refugesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(refugeView.render(refuge));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const refugesRepository = getRepository(Refuge);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const refuge = refugesRepository.create(data);

    await refugesRepository.save(refuge);

    return response.status(201).json(refuge);
  },
};
