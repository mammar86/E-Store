import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { toast } from "react-toastify";
import agent from "../agent";

const AboutPage = () => {
  return (
    <Container>
      <Typography variant="h2">Error for testing purposes</Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get400Error().catch((error) => {
              console.log(error);
              toast.error(error.response.statusText);
            })
          }
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get401Error().catch((error) => {
              console.log(error);
              toast.error(error.response.statusText);
            })
          }
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get404Error().catch((error) => {
              console.log(error);
              toast.error(error.response.statusText);
            })
          }
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.get500Error().catch((error) => {
              console.log(error);
              toast.error(error.response.statusText);
            })
          }
        >
          Test 500 error
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            agent.TestErrors.getValidationError().catch((error) => {
              console.log(error);
              toast.error(error.response.statusText);
            })
          }
        >
          Test Validation error
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default AboutPage;
