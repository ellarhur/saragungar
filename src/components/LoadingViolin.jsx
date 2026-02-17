import React from 'react'

export default function LoadingViolin() {
  return (
    <div>
      <div className='LoadingOverlay'>
        <div className='LoadingBox'>
            <div className='LoadingViolin'>
                <img src={violin} alt='Loading Violin' />
                <div className='LoadingViolinText'>Laddar...</div>
            </div>
        </div>
      </div>
    </div>
  )
}
