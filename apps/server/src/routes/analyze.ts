import { Router } from 'express'
import { analyzeSongComparison, analyzeVoice } from '../controllers/analyze.js'
import multer from 'multer'

const router = Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

router.post('/audio', upload.single('audio'), analyzeVoice)

router.post('/song-comparison', upload.single('audio'), analyzeSongComparison)

export default router
