import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PrivateHeader from "@/components/ui/PrivateHeader";
import { Link } from "react-router-dom";
// import { LoginProp } from "@/lib/types";


const Login = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <PrivateHeader />

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        {/* Login Card */}
        <Card className="w-[350px] h-[320px] shadow-md">
          <CardHeader>
            <CardTitle className="text-center font-thin ">
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-6 mt-5">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button>Next</Button>
              <div className="flex flex-col space-y-2">
                <Link to="/forgot-password" className="text-sm hover:underline font-thin text-gray-600">
                  I forgot my username or password
                </Link>
                <Link to="/register" className="text-sm hover:underline font-thin text-gray-600">
                  Create a new account
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-10 text-gray-500 text-sm text-center">
          <p>Terms of Use | Privacy Notice</p>
          <p>
            © {new Date().getFullYear()} New Wine Church. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
