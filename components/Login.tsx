"use client";
import { handleFormLogin } from "@/serverActions";
import { useState, useTransition } from "react";
import MyButton from "@/components/daisyui/MyButton";
import Card from "./daisyui/card";
const Login = ({
  expired = false,
  title,
}: {
  expired?: boolean;
  title?: string;
}) => {
  const [showError, setShowError] = useState(false);
  const errorMessage = showError && (
    <div className="text-sm text-error">{`L'email n'existe pas. Demandez votre email à Eric.`}</div>
  );

  const [showSuccess, setShowSuccess] = useState(false);
  const successMessage = showSuccess && (
    <div className="text-sm text-success">{`Veuillez cliquer sur le lien contenu dans l'email pour vous connecter de manière sécurisée.`}</div>
  );

  let [isPending, startTransition] = useTransition();

  return (
    <Card>
      <h2 className="font-serif text-3xl md:text-6xl">
        {title || "Espace invité"}
      </h2>
      {expired && (
        <div className="alert alert-error my-4 text-sm italic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Votre lien a expiré. Saisissez votre email pour recevoir un nouveau
            lien.
          </span>
        </div>
      )}
      <div>
        Saisissez votre email pour recevoir votre lien de connexion sécurisé.
      </div>
      {errorMessage}
      {successMessage}
      <form
        action={async (formData: FormData) => {
          startTransition(async () => {
            let response = await handleFormLogin(formData);
            console.log("response", response);
            if (response.error) {
              setShowError(true);
              setShowSuccess(false);
              return;
            } else {
              setShowError(false);
              setShowSuccess(true);
              return;
            }
          });
        }}
        className="flex gap-3 flex-col"
      >
        <div className="form-control col-span-3">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered input-accent"
          />
        </div>
        <MyButton title="Se connecter" isPending={isPending} />
      </form>
    </Card>
  );
};
export default Login;
