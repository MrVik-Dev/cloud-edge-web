

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Logo from "@/public/logo.svg";

import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { login } from "@/app/(asgard)/asgard/login/actions";
const LoginContainer = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />

      <Card className="relative w-full max-w-md border-border/50 bg-card/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              <Image
                src={Logo}
                alt="Asgard"
                className="relative h-auto w-auto"
                priority
              />
            </div>

            <div className="mt-6 h-1 w-12 rounded-full bg-primary" />

            <h1 className="mt-5 text-3xl font-bold tracking-tight">
              Welcome Back
            </h1>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              Sign in to continue to Asgard Admin
            </p>
          </div>

          <form action={login} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>

                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="h-11 w-full font-medium transition-all hover:scale-[1.02] cursor-pointer"
            >
              Sign In
            </Button>
          </form>

        </CardContent>
      </Card>
    </div>
  );
}

export default LoginContainer