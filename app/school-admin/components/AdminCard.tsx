"use client"

import Image from "next/image"
import { getUserInfo } from "@school-admin/data/adminData"
export function GreetingCard() {
  const user = getUserInfo()

  return (
    <div className="bg-brand-gradient text-primary t-end rounded-lg p-6 flex items-center gap-6 mb-6">
      <div className="w-24 h-24 rounded-full bg- bg-custom-white flex items-center justify-center shrink-0">
        <Image src="/professional-man-with-arms-crossed.jpg" alt={user.name} width={100} height={100} className="rounded-full" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-custom-grey-700 ">Hello {user.name},</h2>
        <p className="text-custom-grey-600 text-lg">Manage the school's running from your comfort</p>
      </div>
    </div>
  )
}
