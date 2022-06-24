export interface recipeDTO{
    id: string,
    title: string,
    description: string,
    userId: string
}

export interface recipeInput{
    title: string,
    description: string,
    token: string
}

export interface recipeOutput{
    id: string,
    title: string,
    description: string,
    createAt: Date
}