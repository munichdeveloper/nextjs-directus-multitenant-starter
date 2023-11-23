
import { LoginAuthForm } from "@/components/auth/login/LoginAuthForm"

export default function IndexPage() {
  return (
    <>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome Back 😌
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and a password below to login
            </p>
          </div>
          <LoginAuthForm />
        </div>
      </div>
    </>
  )
}
