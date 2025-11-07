'use client'

import { FC } from 'react'
import type { FeeReceipt } from '../types/fees'
import { useFeesStatement } from '../hooks/useFeesStatement'

interface FeeStatementProps {
  receipt: FeeReceipt
}

export const FeeStatement: FC<FeeStatementProps> = ({ receipt }) => {
  const { isDownloading, downloadStatement } = useFeesStatement(receipt)
  return (
    <div className="flex items-end gap-6">
      <div className="relative border border-custom-grey/20 rounded-lg p-4 sm:p-6 max-w-[742px]">
        <button 
          onClick={downloadStatement}
          disabled={isDownloading}
          className="absolute right-6 top-6 bg-secondary hover:bg-secondary/90 text-foreground px-8 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isDownloading ? 'Downloading...' : 'Download'}
        </button>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground text-center mb-3">Secondary School Fee Receipt</h2>
        <div className="flex flex-wrap gap-x-8 text-sm justify-end">
          <span className="text-foreground font-semibold">Date:</span>
          <span className="text-foreground">{receipt.date}</span>
          <span className="text-foreground font-semibold">Receipt Number:</span>
          <span className="text-foreground">{receipt.receiptNumber}</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="text-sm">
          <span className="text-foreground font-semibold">Student Name:</span>
          <span className="text-foreground ml-1">{receipt.studentName}</span>
        </div>
        <div className="text-sm">
          <span className="text-foreground font-semibold">Class:</span>
          <span className="text-foreground ml-1">{receipt.class}</span>
        </div>
        <div className="text-sm">
          <span className="text-foreground font-semibold">Academic Year:</span>
          <span className="text-foreground ml-1">{receipt.academicYear}</span>
        </div>
      </div>

      <div className="border border-custom-grey/20 rounded overflow-x-auto">
        <table className="w-full border-collapse min-w-[680px]">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-b border-r border-custom-grey/20 bg-gray-50">Fee Description</th>
              <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-b border-r border-custom-grey/20 bg-gray-50">Amount</th>
              <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-b border-r border-custom-grey/20 bg-gray-50">Paid Date</th>
              <th className="py-2 px-4 text-left text-sm font-bold text-foreground border-b border-custom-grey/20 bg-gray-50">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {receipt.feeItems.map((item, index) => (
              <tr key={index} className={index !== receipt.feeItems.length - 1 ? "border-b border-custom-grey/20" : ""}>
                <td className="py-2 px-4 text-sm text-foreground border-r border-custom-grey/20">{item.feeDescription}</td>
                <td className="py-2 px-4 text-sm font-semibold text-foreground border-r border-custom-grey/20">${item.amount.toFixed(2)}</td>
                <td className="py-2 px-4 text-sm text-foreground border-r border-custom-grey/20">{item.paidDate}</td>
                <td className="py-2 px-4 text-sm text-foreground">{item.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm">
          <span className="text-foreground font-bold">Total Amount Paid:</span>
          <span className="text-foreground font-semibold ml-1">${receipt.totalAmount.toFixed(2)}</span>
        </p>
        <p className="text-sm">
          <span className="text-foreground font-bold">Payment Status:</span>
          <span className="text-foreground ml-1">{receipt.paymentStatus}</span>
        </p>
      </div>

      </div>
      <button 
        onClick={downloadStatement}
        disabled={isDownloading}
        className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isDownloading ? 'Downloading...' : 'Download'}
      </button>
    </div>
  )
}