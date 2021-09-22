import "./style.css";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Button } from "@material-ui/core";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      .oneOf([yup.ref("password")]),
  });

  const history = useHistory();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registe = (data) => {
    console.log(data);
    history.push("/loggedIn");
  };

  return (
    <form className="form" onSubmit={handleSubmit(registe)}>
      <Input
        className="form__input"
        color="secondary"
        type="text"
        placeholder="Name"
        {...register("name")}
      />
      {errors.name?.message && <div className="error">Name required</div>}
      <Input
        className="form__input"
        color="secondary"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      {errors.email?.message && <div className="error">Email required</div>}
      <Input
        className="form__input"
        color="secondary"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password?.message && (
        <div className="error">Password required</div>
      )}
      <Input
        className="form__input"
        color="secondary"
        type="password"
        placeholder="Confirm password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <div className="error">Passwords not equals</div>
      )}
      <Button color="secondary" size="medium" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
