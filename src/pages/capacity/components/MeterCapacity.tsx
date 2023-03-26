import { FC } from 'react'
import { useCapacityContext } from '../../../shared/contexts/capacityContext';

const MeterCapacity: FC<IMeterCapacitiComponent> = ({ }) => {
    // context
    const { info } = useCapacityContext();

    return (
        <div className='meter-container'>
            <div className='meter-indicator' style={{ height: info?.limite ? '100%' : `${info?.porcentaje}%` }}>
                <div
                    className='meter-arrow'
                    style={{ bottom: info?.limite ? 'calc(100% - 10px)' : `calc(${info?.porcentaje}% - 10px)` }}
                ></div>
                <p style={{ height: `calc(${info?.porcentaje}% - 10px)`}}>{info?.cantidadtotal}cm3</p>
            </div>
        </div>
    )
}

interface IMeterCapacitiComponent {

}

export default MeterCapacity