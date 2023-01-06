import express from 'express'
import { getMember, getMembers, addMember, updateMember, deleteMember } from '../controllers/members.js'
import { verifyToken } from '../middleware/auth.js';


const router = express.Router()

router.get('/', verifyToken, getMembers)
router.get('/id', verifyToken, getMember)
router.get('/', verifyToken, addMember)
router.get('/id', verifyToken, updateMember)
router.get('/id', verifyToken, deleteMember)

export default router