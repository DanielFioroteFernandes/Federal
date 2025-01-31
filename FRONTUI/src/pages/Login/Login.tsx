//imagens
import logoGrande from "@/assets/federal_logo.grande.png";

import { LoginForm } from "@/components/Login/login";
function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs select-none">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted lg:flex justify-center items-center select-none">
        <img src={logoGrande} alt="Image" className="max-w-96 max-h-96" />
      </div>
    </div>
  );
}

// className="relative hidden bg-muted lg:block"
// className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"

export default Login;
