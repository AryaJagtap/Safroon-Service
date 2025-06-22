// src/pages/Welcome.jsx
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Welcome = () => {
  const navigate = useNavigate()

  const handleLogin = (userType) => {
    navigate(`/login/${userType.toLowerCase().replace(' ', '-')}`)
  }

  const handleRegister = (userType) => {
    navigate(`/register/${userType.toLowerCase().replace(' ', '-')}`)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#101419] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Welcome to Safroon Service
            </h2>
            <p className="text-[#101419] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Please select your login type or register if you are a new user.
            </p>

            {/* Auditor Section */}
            <h3 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Auditor
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button
                  onClick={() => handleLogin('auditor')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#c2d2e3] transition-colors"
                >
                  <span className="truncate">Auditor Login</span>
                </button>
                <button
                  onClick={() => handleRegister('auditor')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#d9dde1] transition-colors"
                >
                  <span className="truncate">Auditor Register</span>
                </button>
              </div>
            </div>

            {/* Principal Employee Section */}
            <h3 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Principal Employee
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button
                  onClick={() => handleLogin('principal employee')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#c2d2e3] transition-colors"
                >
                  <span className="truncate">Principal Employee Login</span>
                </button>
                <button
                  onClick={() => handleRegister('principal employee')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#d9dde1] transition-colors"
                >
                  <span className="truncate">Principal Employee Register</span>
                </button>
              </div>
            </div>

            {/* Contractor Section */}
            <h3 className="text-[#101419] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Contractor
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button
                  onClick={() => handleLogin('contractor')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d2e2f3] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#c2d2e3] transition-colors"
                >
                  <span className="truncate">Contractor Login</span>
                </button>
                <button
                  onClick={() => handleRegister('contractor')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e9edf1] text-[#101419] text-sm font-bold leading-normal tracking-[0.015em] grow hover:bg-[#d9dde1] transition-colors"
                >
                  <span className="truncate">Contractor Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome