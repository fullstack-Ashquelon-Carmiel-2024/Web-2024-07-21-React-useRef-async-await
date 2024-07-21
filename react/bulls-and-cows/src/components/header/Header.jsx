import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({title}) {
  return (
    <h1 className="display-1 text-primary text-center">
        <FontAwesomeIcon icon="fa-solid fa-cow"
                      />
        {' '+title+' '}
        <FontAwesomeIcon icon="fa-solid fa-cow"
             className='fa-flip-horizontal' />
    </h1>
  )
}

export default Header