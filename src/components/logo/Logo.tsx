import stylesVariables from "../../constants/stylesVariables";
import "./Logo.css"

interface LogoProps {
  primaryColor?: string,
  secondaryColor?: string,
  fontSize?: string
}

const Logo = ({ primaryColor, secondaryColor, fontSize }: LogoProps): JSX.Element => {
  const color1 = primaryColor || stylesVariables.secondary;
  const color2 = secondaryColor || stylesVariables.textPrimary;
  
  return (
    <div className="logo">
      <h3 className="logo__text" style={{ color: color1, fontSize }}>Distan</h3>
      <h3 className="logo__text" style={{ color: color2, fontSize }}>city</h3>
    </div>
  );
};

export default Logo;