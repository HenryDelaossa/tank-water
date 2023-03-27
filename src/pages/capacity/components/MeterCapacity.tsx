import { FC } from 'react'
import { IInfoCalcCapacity } from '../../../core/models/capacityModels';

const MeterCapacity: FC<IMeterCapacitiComponent> = ({ info }) => {


    return (
        <div className='meter-container'>
            <div className='meter-indicator' style={{ height: info?.limite ? '100%' : `${info?.porcentaje}%` }}>
                <div
                    className='meter-arrow'
                    style={{ bottom: info?.limite ? 'calc(100% - 10px)' : `calc(${info?.porcentaje}% - 10px)` }}
                ></div>
                <p style={{ height: `calc(${info?.porcentaje}% - 10px)` }}>{info?.cantidadtotal}cm3</p>
            </div>
        </div>
    )
}

interface IMeterCapacitiComponent {
    info: IInfoCalcCapacity
}

export default MeterCapacity