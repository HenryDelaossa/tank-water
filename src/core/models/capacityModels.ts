import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom";
import * as Yup from 'yup';
import { FormValidation } from "../../shared/helpers/enums";

export interface ICapacityData {
    lts: number | string,
    mlts: number | string,
    cm3: number | string,
    capacidadtotal: number | string,
    id: number | null,
    disponible: number | string
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
    getCapacityData: (id?: string) => void
    createSaveCapacityData: (values: ICapacityData, navegate: NavigateFunction) => void
    info: ICapacityInformation
}

export interface IInfoCalcCapacity {
    porcentaje: number;
    limite: boolean;
    cantidadtotal: number;
    disponible: number;
}



export const initialValuesCapacityForm = (data?: ICapacityData): ICapacityData => {
    console.log(data)
    return {
        id: data?.id || null,
        capacidadtotal: data?.capacidadtotal || 0,
        lts: data?.lts || 0,
        mlts: data?.mlts || 0,
        cm3: data?.cm3 || 0,
        disponible: data?.disponible || 0
    }
}

export const validatioSchemaCapacityForm = Yup.lazy((values: ICapacityData) => Yup.object().shape({
    id: Yup.number().nullable(),
    capacidadtotal: Yup.number().required(FormValidation.required).min(1, FormValidation.required),
    lts: Yup.number(),
    mlts: Yup.number(),
    cm3: Yup.number(),
    disponible: Yup.number()
}));



