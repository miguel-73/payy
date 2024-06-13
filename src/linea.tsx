/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  ButtonGroup,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    //   sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const steps = [
  {
    label: "Informacion general",
    description: (
      <>
        <Grid
          item
          container
          spacing={2}
        >
          <Grid
            item
            container
            spacing={2}
          >
            <Grid
              item
              sm={4}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label=" PLACA"
                name="PLACA"
              />
            </Grid>
            <Grid
              item
              sm={4}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="CONFIRMACION DE PLACA  "
                name="CONFIRMACION DE PLACA"
              />
            </Grid>
            <Grid
              item
              sm={4}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="MODELO "
                name="MODELO"
              />
            </Grid>
          </Grid>

          <Grid
            item
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                fullWidth
                size="small"
              >
                <InputLabel id="si-no-select-label">
                  {" "} TIPO DE VEHICULO{" "}
                </InputLabel>
                <Select
                  name="Nombre del la Meta "
                  label="Nombre del la Meta "
                >
                  <MenuItem value="Direccionamiento estratégico">
                    Direccionamiento estratégico{" "}
                  </MenuItem>
                  <MenuItem value="Planeción estratégica">
                    Planeción estratégica{" "}
                  </MenuItem>
                  <MenuItem value="Gestión ambiental">
                    {" "}
                    Gestión ambiental
                  </MenuItem>
                  <MenuItem value="Planificación y ordenamiento ambienta territorial">
                    {" "}
                    Planificación y ordenamiento ambienta territorial
                  </MenuItem>
                  <MenuItem value="Autoridad ambiental">
                    {" "}
                    Autoridad ambiental
                  </MenuItem>
                  <MenuItem value="Gestión humana"> Gestión humana </MenuItem>
                  <MenuItem value="Gestión logística">
                    {" "}
                    Gestión logística{" "}
                  </MenuItem>
                  <MenuItem value="Gestión jurídica">
                    {" "}
                    Gestión jurídica{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                fullWidth
                size="small"
              >
                <InputLabel id="si-no-select-label">
                  {" "}
                  TIPO DE SERVICIO{" "}
                </InputLabel>
                <Select
                  name="Nombre del la Meta "
                  label="Nombre del la Meta "
                >
                  <MenuItem value="Direccionamiento estratégico">
                    Direccionamiento estratégico{" "}
                  </MenuItem>
                  <MenuItem value="Planeción estratégica">
                    Planeción estratégica{" "}
                  </MenuItem>
                  <MenuItem value="Gestión ambiental">
                    {" "}
                    Gestión ambiental
                  </MenuItem>
                  <MenuItem value="Planificación y ordenamiento ambienta territorial">
                    {" "}
                    Planificación y ordenamiento ambienta territorial
                  </MenuItem>
                  <MenuItem value="Autoridad ambiental">
                    {" "}
                    Autoridad ambiental
                  </MenuItem>
                  <MenuItem value="Gestión humana"> Gestión humana </MenuItem>
                  <MenuItem value="Gestión logística">
                    {" "}
                    Gestión logística{" "}
                  </MenuItem>
                  <MenuItem value="Gestión jurídica">
                    {" "}
                    Gestión jurídica{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            item
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={9}
            >
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Froma de pago{" "}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Contado"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Tio paco"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </>
    ),
  },
  {
    label: "Liquidacion",
    description: (
      <>
        <Grid
          container
          rowSpacing={1}
        //   columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            xs={4}
          >
            <Grid item  sm={11}>
              <FormControl
                fullWidth
                size="small"
              >
                <InputLabel id="si-no-select-label">
                  {" "}
                  TIPO DE DOCUMENTO{" "}
                </InputLabel>
                <Select
                  name="Nombre del la Meta "
                  label="Nombre del la Meta "
                >
                  <MenuItem value="Direccionamiento estratégico">
                    Direccionamiento estratégico{" "}
                  </MenuItem>
                  <MenuItem value="Planeción estratégica">
                    Planeción estratégica{" "}
                  </MenuItem>
                  <MenuItem value="Gestión ambiental">
                    {" "}
                    Gestión ambiental
                  </MenuItem>
                  <MenuItem value="Planificación y ordenamiento ambienta territorial">
                    {" "}
                    Planificación y ordenamiento ambienta territorial
                  </MenuItem>
                  <MenuItem value="Autoridad ambiental">
                    {" "}
                    Autoridad ambiental
                  </MenuItem>
                  <MenuItem value="Gestión humana"> Gestión humana </MenuItem>
                  <MenuItem value="Gestión logística">
                    {" "}
                    Gestión logística{" "}
                  </MenuItem>
                  <MenuItem value="Gestión jurídica">
                    {" "}
                    Gestión jurídica{" "}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid
              marginTop={2}
              item
              sm={11}

            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label=" NUMERO DE DOCUMENTO "
                name=" NUMERO DE DOCUMENTO"
              >
                1
              </TextField>
            </Grid>

            <Grid
              item
              marginTop={2}
              sm={11}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="NOMBRE "
                name="NOMBRE"
              >
                1
              </TextField>
            </Grid>
            <Grid
              item
              marginTop={2}
              sm={11}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="APELLIDO "
                name="APELLIDO"
              >
                1
              </TextField>
            </Grid>
            <Grid
              item
              marginTop={2}
              sm={11}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="DIRECCION "
                name="DIRECCION"
              >
                1
              </TextField>
            </Grid>
            <Grid
              item
              marginTop={2}
              sm={11}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="TELEFONO "
                name="TELEFONO"
              >
                1
              </TextField>
            </Grid>
            <Grid
              item
              marginTop={2}
              sm={11}
            >
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                label="CORREO "
                name="CORREO"
              >
                1
              </TextField>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
          > 
            <Grid
          item
          marginTop={2}
          sm={11}
        ></Grid>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                >
                  Valor de liquidación
                </Typography>
                <Grid
                  spacing={2}
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={6}
                  >
                    ANSV
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $7000
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    RECAUDO
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $1.0591
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    SISCOV
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $99.936
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    RUNT
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $15.900
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    VALOR DEL SERVICIO
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $221.943
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    IVA DEL SERVICIO
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                    $42.169.17
                  </Grid>



                  <Grid
                    item
                    xs={6}
                  >
                    TOTAL
                  </Grid>
                  <Grid
                    item
                    xs={6}
                  >
                   $925.764,70
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          {/* <Grid
            item
            xs={6}
          >
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Consecutivo inicial"
              name="consecutivo_inicial"
            >
              1
            </TextField>
          </Grid> */}
          {/* <Grid
            item
            xs={6}
          >
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              label="Consecutivo inicial"
              name="TOTAL"
              disabled
              value="$925.764,70"
            ></TextField>
          </Grid> */}
        </Grid>
      </>
    ),
  },
  {
    label: "Pago",
    description: 
    <>
    
    <FormControl>
       <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Efectivo" />
        <FormControlLabel value="male" control={<Radio />} label="PSE" />
        <FormControlLabel value="other" control={<Radio />} label="Correspomsal" />
        <FormControlLabel value="d" control={<Radio />} label="Datafono" />

      </RadioGroup>
    </FormControl>
    
    </>,
  },
];

export default function Linea() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      marginTop={2}
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Grid
                item
                container
                marginTop={4}
                spacing={2}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          square
          elevation={0}
          sx={{ p: 3 }}
        >
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1 }}
          >
            Reset
          </Button>
        </Paper>
      )}
    </Grid>
  );
}
