'use client'

import { useBlock2Win } from '@/app/common/useBlock2Win/useBlock2Win'
import React, { FC } from 'react'

export const ProgramData:FC = () => {
  const  { program } = useBlock2Win()

  console.log(program)
  return (
  <div>
    <div>Program ID</div>
  </div>
  )
}
