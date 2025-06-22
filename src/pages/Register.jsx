// src/pages/Register.jsx
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Header from '../components/Header'

const Register = () => {
  const { userType } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    officeName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    phone: '',
    panCard: ''
  })

  const formatUserType = (type) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    // Handle registration logic here
    console.log('Registration attempt:', { userType, ...formData })
    alert(`Registration attempt for ${formatUserType(userType)} with email: ${formData.email}`)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[480px] flex-1">
            <h2 className="text-[#101419] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {formatUserType(userType)} Registration
            </h2>
            <p className="text-[#101419] text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
              Create your account to get started
            </p>

            <form onSubmit={handleSubmit} className="px-4">
              <div className="mb-4">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {userType === 'auditor' && (
                <div className="mb-4">
                  <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="officeName">
                    Office Name
                  </label>
                  <input
                    type="text"
                    id="officeName"
                    name="officeName"
                    value={formData.officeName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                    placeholder="Enter your office name"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="phone">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {userType === 'auditor' && (
                <div className="mb-4">
                  <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="panCard">
                    PAN Card
                  </label>
                  <input
                    type="text"
                    id="panCard"
                    name="panCard"
                    value={formData.panCard}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                    placeholder="Enter your PAN card number"
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    maxLength="10"
                    style={{ textTransform: 'uppercase' }}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: ABCDE1234F</p>
                </div>
              )}

              {(userType === 'contractor' || userType === 'principal-employee') && (
                <div className="mb-4">
                  <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="password">
                  Create Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white text-sm font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors mb-4"
              >
                Register
              </button>

              <div className="text-center">
                <p className="text-[#101419] text-sm">
                  Already have an account?{' '}
                  <Link 
                    to={`/login/${userType}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Login here
                  </Link>
                </p>
              </div>

              <div className="text-center mt-4">
                <Link 
                  to="/"
                  className="text-[#101419] text-sm hover:underline"
                >
                  ← Back to Welcome
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register