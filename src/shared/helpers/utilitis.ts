import { EValores } from "./enums"

export const transformDataTocm3 = (litros: number, mililitros: number, centCubicos: number): number => {
    return (litros * EValores.CENTIMETRO_CUBICO) + (mililitros) + (centCubicos)
}