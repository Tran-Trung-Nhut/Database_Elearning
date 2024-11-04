import { Router } from "express";

const router = Router()

router.get('/')
router.get('/:id')
router.post('/create')
router.put('/update')
router.delete('/delete/:id')