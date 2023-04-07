import {FaPencilAlt, FaTimes} from 'react-icons/fa';
import '../styles.scss';

const Sona = ({sona, onDelete, onEdit}) => {
      return(
            <div>
                  <div className="name">
                        <div>
                              <p className="sonaName">
                                    <span className="textBold">Sona Name:</span> {sona.name}
                              </p>
                              
                              <p className="sonaDescription">
                                    <span className="textBold">Sona description:</span> {sona.description}
                              </p>
                        </div>
                        
                        <div>
                              <p><FaTimes onClick={() => onDelete(sona.id)} className="delIcon" /></p>
                              <p><FaPencilAlt onClick={() => onEdit(sona.id)} className="editIcon" /></p>
                        </div>
                  </div>
            </div>      
      )
}

export default Sona;