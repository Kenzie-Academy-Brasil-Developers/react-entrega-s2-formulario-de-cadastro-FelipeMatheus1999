import "./style.css";
import { Container, DivImage } from "./style.js";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const LoggedIn = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push("/");
  };

  return (
      <Container>
        <h2>Cadastro concluído</h2>
      <DivImage />
        <Button
          className="button"
          color="secondary"
          size="large"
          onClick={handleButton}
        >
          Back
        </Button>
      </Container>
  );
};

export default LoggedIn;
