import { z } from 'zod'

const issueExercisePair = z.object({
  issue: z.string().describe("Describe the issue with the user's rendition."),
  exercise: z.string().describe('Describe the exercise to fix the issue.'),
})

const toneArea = issueExercisePair.describe(
  "Specify the issue and an exercise to resolve issue's with the user's rendition in regards to tone."
)

const rhythmArea = issueExercisePair.describe(
  "Specify the issue and an exercise to resolve issue's with the user's rendition in regards to rhythm."
)

const highNotesArea = issueExercisePair.describe(
  "Specify the issue and an exercise to resolve issue's with the user's rendition in regards to high notes."
)

const vibeArea = issueExercisePair.describe(
  "Specify the issue and an exercise to resolve issue's with the user's rendition in regards to vibe."
)

const analyzedSongComparisonResponseSchema = z.object({
  toneArea,
  rhythmArea,
  highNotesArea,
  vibeArea,
})

export const analyzedSongComparisonResponseJsonSchema = z.toJSONSchema(
  analyzedSongComparisonResponseSchema
)
