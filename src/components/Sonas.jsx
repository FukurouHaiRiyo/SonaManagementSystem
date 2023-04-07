import Sona from './Sona.jsx';
import '../styles.scss';

const Sonas = ({ sonas, onDelete, onEdit }) => {
  return (
    <>
      {sonas.map((sona) => (
        <Sona key={sona.id} sona={sona} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  )
}

export default Sonas;