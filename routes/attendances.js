import express from 'express'
import { getAttendance, getAttendances, addAttendance, updateAttendance, deleteAttendance } from '../controllers/attendances.js'
import { verifyToken } from '../middleware/auth.js';


const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getAttendances)
router.get('/id', verifyToken, getAttendance)
router.get('/', verifyToken, addAttendance)
router.get('/id', verifyToken, updateAttendance)
router.get('/id', verifyToken, deleteAttendance)

export default router