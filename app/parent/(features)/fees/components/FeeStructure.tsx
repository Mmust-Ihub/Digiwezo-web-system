'use client'

import { FC } from 'react'
import { BANK_ACCOUNTS, FEE_STRUCTURE_DATA, PAYMENT_TERMS } from '../data/fee-structure'

export const FeeStructure: FC = () => {
  return (
    <div className="border border-custom-grey/20 rounded-lg p-4 sm:p-6 max-w-[742px]">
      <div className="mb-6">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2 flex-1 max-w-[400px]">
            <h3 className="text-base font-semibold text-foreground">Grade</h3>
            <div className="relative">
              <select 
                className="w-full border border-[#E7EA33] rounded-lg py-2 px-4 pr-10 text-sm text-foreground appearance-none focus:outline-none focus:border-[#E7EA33] focus:ring-1 focus:ring-[#E7EA33] bg-white"
              >
                <option value="">Select Grade</option>
                {FEE_STRUCTURE_DATA.map((item, index) => (
                  <option key={index} value={item.grade}>{item.grade}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <button className="bg-[#FFE500] text-black px-8 py-2 rounded-lg text-sm font-medium ml-4">
            Generate
          </button>
        </div>

        {/* Fee Structure Table */}
        <div className="border-2 border-custom-grey/20 rounded overflow-x-auto mb-6">
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20"></th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">MANDATORY</th>
                <th className="py-2 px-4 text-center text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50" colSpan={4}>OPTIONAL</th>
              </tr>
              <tr>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20"></th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">TUITION</th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">LUNCH</th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">SWIMMING</th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">TRANSPORT</th>
                <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-2 border-custom-grey/20 bg-gray-50">BOARDING</th>
              </tr>
            </thead>
            <tbody>
              {FEE_STRUCTURE_DATA.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{item.grade}</td>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{item.mandatory.tuition.toLocaleString()}.00</td>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{item.optional.lunch.toLocaleString()}.00</td>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{typeof item.optional.swimming === 'number' ? `${item.optional.swimming.toLocaleString()}.00` : item.optional.swimming}</td>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{item.optional.transport}</td>
                  <td className="py-2 px-4 text-sm text-foreground border-2 border-custom-grey/20">{item.optional.boarding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms of Payment */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-foreground">TERMS OF PAYMENT:</h3>
          <div className="space-y-2">
            {PAYMENT_TERMS.map((term, index) => (
              <p key={index} className="text-sm text-foreground">{term}</p>
            ))}
            <div className="pl-6 space-y-2 mt-2">
              {BANK_ACCOUNTS.map((account, index) => (
                <p key={index} className="text-sm text-foreground">
                  <span className="font-semibold">{account.bank}</span>
                  {account.branch && <span> {account.branch}</span>}
                  <span className="ml-8">A/C NO. {account.accountNumber}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-[#FFE500] text-black px-8 py-2.5 rounded-lg text-sm font-medium">
          Download
        </button>
      </div>
    </div>
  )
}