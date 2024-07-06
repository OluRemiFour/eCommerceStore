import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      alert("A verification link was sent to email. Please verify ");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { signup, isLoading };
}
