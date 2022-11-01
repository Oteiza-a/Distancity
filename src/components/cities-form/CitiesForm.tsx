import Card from '../card/Card';
import Logo from '../logo/Logo';
import './CitiesForm.css';

interface CitiesFormProps {}

const CitiesForm = ({}: CitiesFormProps): JSX.Element => {
  return (
    <Card>
      <div className="form-container">
        <Logo fontSize="30px"/>
    
      </div>
    </Card>
  );
};

export default CitiesForm;