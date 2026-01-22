import React, { useState } from 'react'
import { Button } from '@element/react-button'
import { Textfield } from '@element/react-textfield'
import { Card } from '@element/react-card'
import { Typography } from '@element/react-typography'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password, rememberMe })
    // Add your login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="text-center mb-8">
          <Typography type="heading-1" className="mb-2">
            Welcome Back
          </Typography>
          <Typography type="body-1" className="text-gray-600">
            Sign in to your account to continue
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Textfield
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Textfield
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-gray-300"
              />
              <Typography type="body-2">Remember me</Typography>
            </label>

            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full"
            raised
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Typography type="body-2" className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign up
            </a>
          </Typography>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Typography type="body-2" className="text-center text-gray-500 mb-4">
            Or continue with
          </Typography>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              outlined
              className="w-full"
              onClick={() => console.log('Google login')}
            >
              Google
            </Button>
            <Button
              outlined
              className="w-full"
              onClick={() => console.log('Microsoft login')}
            >
              Microsoft
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default App