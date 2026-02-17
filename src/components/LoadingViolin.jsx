import React from 'react'

export default function LoadingViolin() {
  return (
    <div>
      <div className='LoadingOverlay'>
        <div className='LoadingBox'>
            <div className='LoadingViolin'>
                <img src="/images/violin.svg" alt='Loading Violin' className='LoadingViolin__icon' />
                <div className='LoadingViolinText'>Laddar...</div>
            </div>
        </div>
      </div>
    </div>
  )
}
