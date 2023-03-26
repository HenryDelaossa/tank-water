import React, { FC, useEffect } from 'react'
import TankCapacity from '../capacity/components/TankCapacity'
import { useCapacityContext } from '../../shared/contexts/capacityContext';
import FormCapacity from '../capacity/components/FormCapacity';
import { Row, Col } from 'reactstrap';
import MeterCapacity from '../capacity/components/MeterCapacity';
import Capacity from '../capacity';

const Home: FC<IHomeComponent> = () => {

  // context
  const { capacityState, setCapacityState } = useCapacityContext();



  return (
    <div className='home'>
      <Capacity />
    </div>
  )
}
interface IHomeComponent {

}

export default Home