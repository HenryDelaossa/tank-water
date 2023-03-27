import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import FormCapacity from './components/FormCapacity'
import MeterCapacity from './components/MeterCapacity'
import TankCapacity from './components/TankCapacity'
import { useCapacityContext } from '../../shared/contexts/capacityContext';

const Capacity: FC = () => {

  // hooks
  const params = useParams();
  // contexts
  const {
    capacityState,
    info,
    getCapacityData,
    setCapacityState,
    createSaveCapacityData
  } = useCapacityContext();

  
  useEffect(() => {
    (params && params?.id) && getCapacityData(params?.id);
  }, [params])


  return (
    <Col md={12} sm={12} xl={12}>
      <Row>
        <Col md={1} sm={1} className='d-flex justify-content-end col-meter'>
          <MeterCapacity info={info} />
        </Col>
        <Col md={11} className='d-flex justify-content-start'>
          <TankCapacity info={info} />
        </Col>
      </Row>
      <Row>
        <FormCapacity data={capacityState} setCapacityState={setCapacityState} onSubmit={createSaveCapacityData} />
      </Row>
    </Col>
  )
}

export default Capacity