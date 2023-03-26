import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';
import { ICapacityContext, ICapacityData } from '../../core/models/capacityModels';
import { EValores } from '../helpers/enums';
import { transformDataTocm3 } from '../helpers/utilitis';
import { capacityShowService } from '../../core/services/capacityServices';

const initialState: ICapacityContext = {
    capacityState: { lts: 0, mlts: 0, cm3: 0, capacidadtotal: 0, id: null, disponible: 0 },
    setCapacityState: () => { },
    getCapacityData: () => { },
    info: { porcentaje: 0, limite: false, cantidadtotal: 0, disponible: 0 }
};
export const capacityContext = createContext<ICapacityContext>(initialState);

export const CapacityProvider = ({ children }: PropsWithChildren) => {

    // states
    const [capacity, setCapacity] = useState<ICapacityData>(initialState?.capacityState);
    // Memo

    /**calculos necesarios */
    const info = useMemo(() => {

        const cantidadtotal = transformDataTocm3(capacity?.lts, capacity?.mlts, capacity?.cm3);
        const porcentaje = (cantidadtotal / capacity?.capacidadtotal) * (EValores.PERCENT_100) || 0;
        const limite = porcentaje > EValores.PERCENT_100;
        const disponible = capacity?.capacidadtotal - cantidadtotal;

        return {
            porcentaje,
            limite,
            cantidadtotal,
            disponible
        }

    }, [capacity]);


    /**fucion para obtener data por id segun params */
    const getCapacityData = async (id: number | string) => {
        const resp = await capacityShowService(id);
        setCapacity(resp?.data)
    }



    useEffect(() => {
        setCapacity(capacity);
    }, [capacity]);

    return (
        <capacityContext.Provider
            value={{
                capacityState: capacity,
                setCapacityState: setCapacity,
                getCapacityData,
                info
            }}
        >
            {children}
        </capacityContext.Provider>
    );
};

export const useCapacityContext = () => {
    const context = useContext(capacityContext)
    if (context === undefined) {
        throw new Error('useCapacityContext must be used within a CapacityProvider')
    }
    return context
};
