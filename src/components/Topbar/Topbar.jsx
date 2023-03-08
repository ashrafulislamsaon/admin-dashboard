import './Topbar.css';
import { NotificationsNone} from '@mui/icons-material';
import ash from '../../images/ashraful.jpg';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="topLeft">
            <span className="logo">Admin.</span>
        </div>
        <div className="topRight">
            <div className="topRightIconContainer">
            <NotificationsNone/>
            <span className="topBedge">3</span>
            </div>
            <img className='avatarImg' src={ash} alt='man'/>
        </div>
      </div>
    </div>
  )
}

export default Topbar;