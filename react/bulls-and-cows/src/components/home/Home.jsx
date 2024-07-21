import './Home.scss';
import Header from '../header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {

  const show = [];
  for (let i=0; i<100; i++) show.push(<FontAwesomeIcon icon="fa-solid fa-cow"
                                       className='text-info'/>); 
   
  return (
    <div>
        <Header title="Welcome to the Best Game Portal Ever" />
        <h1>The Best Game Portal Ever</h1>
        <div>
            { show }
        </div>
    </div>
  )
}
