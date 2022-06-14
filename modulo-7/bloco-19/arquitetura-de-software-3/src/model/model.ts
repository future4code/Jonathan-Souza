export interface createUserDTO {
  name: string,
  email: string,
  password: string
}

export interface createUserBaseDTO {
  id: string,
  name: string,
  email: string,
  password: string
}

export interface userOutputDTO {
  id: string,
  name: string,
  email: string
}

export interface createMovieDataDTO {
  id: string,
  title: string,
  description: string,
  durationMinutes: number,
  yearRelease: number
}

export interface createMovieDTO {
  title: string,
  description: string,
  durationMinutes: number,
  yearRelease: number
}