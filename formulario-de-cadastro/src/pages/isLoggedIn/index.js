import "./style.css";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const LoggedIn = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push("/");
  };

  return (
    //resolver o problema da imagem
    <>
      <div className="container">
        {/* <img
          className="img"
          src="../../img/undraw_High_five_re_jy71.png"
          alt=""
        /> */}
        <Button
          className="button"
          color="secondary"
          size="large"
          onClick={handleButton}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default LoggedIn;
