import React from 'react'

const ProfileInfo = () => {
  return (
    <div className='flex items-center gap-3'>
      <div className=''>AD</div>

        <div>
            <p className='text-sm font-medium'>Avadhoot</p>
            <button className='' onClick={onLogout}>
                Logout
            </button>
        </div>

    </div>
  )
}

export default ProfileInfo
