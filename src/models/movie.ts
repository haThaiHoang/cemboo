export type TMovie = {
  id: number
  title: string
  releaseYear: number
  genre: string[]
  director: string
  cast: {name: string, role: string}[]
  rating: number
  durationMinutes: number
  synopsis: string
  thumbnailHorizontal: string
  thumbnailVertical: string
}
