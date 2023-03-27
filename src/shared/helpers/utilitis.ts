import { EValores } from "./enums"

export const transformDataTocm3 = (litros: number | string, mililitros: number | string, centCubicos: number | string): number => {
    return (Number(litros) * EValores.CENTIMETRO_CUBICO) + (Number(mililitros)) + (Number(centCubicos))
}