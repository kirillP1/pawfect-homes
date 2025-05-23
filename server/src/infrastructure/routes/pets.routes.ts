import { Router } from 'express';
import { PetsController } from '../controllers/pets.controller'
import petsServices from '../../core/services/pets.services'
const router = Router();

const petsController = new PetsController(petsServices);

router.get('/', petsController.getPets);
router.get('/:id',  petsController.getPetById);
router.post('/',  petsController.createPet);
router.put('/:id',  petsController.updatePet);
router.delete('/:id',  petsController.deletePet);

export { router as petsRouter };