import { Dispatch, SetStateAction } from "react"
import * as Yup from 'yup';
import { FormValidation } from "../../shared/helpers/enums";

export interface ICapacityData {
    lts: number,
    mlts: number,
    cm3: number,
    capacidadtotal: number,
    id: number | null,
    disponible: number
};
export interface ICapacityInformation {
    porcentaje: number,
    limite: boolean,
    cantidadtotal: number,
    disponible: number
}

export interface ICapacityContext {
    capacityState: ICapacityData
    setCapacityState: Dispatch<SetStateAction<ICapacityData>>
    getCapacityData: (id: number | string) => void
    info: ICapacityInformation
}



export const initialValuesCapacityForm = (data?: ICapacityData): ICapacityData => ({
    id: data?.id || null,
    capacidadtotal: data?.capacidadtotal || 0,
    lts: data?.lts || 0,
    mlts: data?.mlts || 0,
    cm3: data?.cm3 || 0,
    disponible: data?.disponible || 0
})

export const validatioSchemaCapacityForm = Yup.lazy((values: ICapacityData) => Yup.object().shape({
    id: Yup.number().nullable(),
    capacidadtotal: Yup.number().required(FormValidation.required).min(1, FormValidation.required),
    lts: Yup.number(),
    mlts: Yup.number(),
    cm3: Yup.number(),
    disponible: Yup.number()
}));



