import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import PrivateHeader from "@/components/ui/PrivateHeader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="">

    <PrivateHeader/>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center font-thin ">Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6 mt-5">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>Reset Password</Button>
            <Link to="/" className="text-sm hover:underline font-thin text-gray-600">
              Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default ForgotPassword;
