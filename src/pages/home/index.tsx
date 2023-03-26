import  { FC } from 'react'
import Capacity from '../capacity';

const Home: FC<IHomeComponent> = () => {

  return (
    <div className='home'>
      <Capacity />
    </div>
  )
}
interface IHomeComponent {

}

export default Home