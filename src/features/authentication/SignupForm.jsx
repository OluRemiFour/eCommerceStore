import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { Link } from "react-router-dom";

function SignupForm() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { signup, isLoading } = useSignup();

  const { errors, isSubmitting } = formState;
  function onSubmit(data) {
    const { email, password, fullName } = data;

    signup(
      { fullName, password, email },
      {
        onSettled: () => {
          reset();
        },
      }
    );
    console.log(fullName, password, email);
    console.log(isSubmitting);
  }
  return (
    <div className="md:flex lg:gap-24 md:gap-12 items-center md:justify-between min-h-screen">
      <img src="img/signup.png" alt="signup" className="md:w-[50%]" />
      <div className="m-6">
        <div>
          <h1 className="text-4xl py-3 font-semibold">Create an account</h1>
          <p className="font-semibold">Enter your details below</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="w-[80%] px-2 py-4 border-b-2 outline-none"
              required
              {...register("fullName", {
                required: "This is field is require",
              })}
            />
            {errors?.fullName?.message ? (
              <span>{errors.fullName.message}</span>
            ) : null}
            <input
              type="text"
              placeholder="Email or Phone Number"
              name="email"
              id="email"
              className="w-[80%] px-2 py-4 border-b-2 outline-none"
              required
              {...register("email", {
                required: "This field is required ",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            {errors?.email?.message ? (
              <span>{errors.email.message}</span>
            ) : null}
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              name=""
              id="password"
              className="w-[80%] py-4 px-2 border-b-2 outline-none"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be at most 20 characters",
                },
              })}
            />
            {errors?.password?.message ? (
              <span>{errors.password.message}</span>
            ) : null}
          </div>
          <div className="flex flex-col space-y-4 mr-24">
            <button className="bg-[#db4444] py-3 px-4 text-white font-semibold">
              Create Account
            </button>
            <button className=" border text-black py-3 px-4 font-semibold">
              Sign up with Google
            </button>
          </div>
        </form>

        <span className="flex space-x-3 py-2">
          <p>Already have account?</p>
          <Link to="/login" className="underline">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignupForm;
