import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "@/lib/auth";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { GoogleIcon, AppleIcon, FacebookIcon } from "@/components/social-icons";
import DefaultLayout from "@/layouts/default";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Login</h1>
          <h2 className={subtitle({ class: "mt-4" })}>Access your IntervU account</h2>
        </div>

        <Card className="w-full max-w-md">
          <CardBody className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-white bg-red-500 rounded">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input 
                  type="email" 
                  label="Email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input 
                  type="password" 
                  label="Password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  color="primary" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </form>
            <div className="text-center text-sm">
              <Link href="#" size="sm">Forgot password?</Link>
            </div>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            {/* Social Login Buttons */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Button 
                variant="bordered" 
                onClick={() => handleSocialLogin("github")} 
                disabled={isLoading}
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button 
                variant="bordered" 
                onClick={() => handleSocialLogin("google")} 
                disabled={isLoading}
              >
                <GoogleIcon className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button 
                variant="bordered" 
                onClick={() => handleSocialLogin("apple")} 
                disabled={isLoading}
              >
                <AppleIcon className="mr-2 h-4 w-4" />
                Apple
              </Button>
              <Button 
                variant="bordered" 
                onClick={() => handleSocialLogin("facebook")} 
                disabled={isLoading}
              >
                <FacebookIcon className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" size="sm">Sign up</Link>
            </div>