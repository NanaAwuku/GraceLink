import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PrivateHeader from "@/components/ui/PrivateHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ✅ Define Zod Schema for validation
const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

// ✅ Define TypeScript Interface from Zod Schema
type UserData = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <div>
      <PrivateHeader />
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-[350px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center font-thin">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 mt-5">
              {/* Username Field */}
              <Input type="text" placeholder="Username" {...register("username")} />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

              {/* Email Field */}
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              {/* Password Field */}
              <Input type="password" placeholder="Password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

              {/* Submit Button */}
              <Button type="submit">Sign Up</Button>

              <Link to="/" className="text-sm hover:underline font-thin text-gray-600">
                Already have an account? Sign In
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
