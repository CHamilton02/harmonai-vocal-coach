import { Request, Response } from 'express'
import {
  analyzeSongComparisonService,
  analyzeVoiceService,
} from '../services/analyze.js'

export async function analyzeVoice(req: Request, res: Response) {
  try {
    const analyzedVoice = await analyzeVoiceService(req)
    res.status(200).json(analyzedVoice)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export async function analyzeSongComparison(req: Request, res: Response) {
  try {
    const analyzedSongComparison = await analyzeSongComparisonService(req)
    res.status(200).json(analyzedSongComparison)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
