'use client'

import React from 'react'

import Link from 'next/link'

import useNavigation from '@/hooks/use-navigation'
import useScrollingEffect from '@/hooks/use-scroll'
import { Icon } from '@iconify/react'

const BottomNav = () => {
  const scrollDirection = useScrollingEffect()
  const navClass = scrollDirection === 'up' ? '' : ' opacity-25 duration-500'

  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  } = useNavigation()

  return (
    <div
      className={`fixed bottom-0 z-10 w-full border-t bg-black py-4 text-white shadow-lg sm:hidden ${navClass}`}
    >
      <div className='flex w-full flex-row items-center justify-around bg-transparent'>
        <Link href='/' className='relative flex items-center'>
          {isHomeActive ? (
            <Icon icon='mingcute:home-5-fill' width='32' height='32' />
          ) : (
            <Icon icon='mingcute:home-5-line' width='32' height='32' />
          )}
          {/* <span className="h-2 w-2 rounded-full bg-sky-500 absolute -top-0.5 right-[3px]"></span> */}
        </Link>
        <Link href='/explore' className='flex items-center'>
          {isExploreActive ? (
            <Icon
              icon='uil:search'
              width='32'
              height='32'
              className='stroke-current stroke-5'
            />
          ) : (
            <Icon icon='uil:search' width='32' height='32' />
          )}
        </Link>
        <Link href='/notifications' className='flex items-center'>
          {isNotificationsActive ? (
            <Icon icon='mingcute:notification-fill' width='32' height='32' />
          ) : (
            <Icon icon='mingcute:notification-line' width='32' height='32' />
          )}
        </Link>
        <Link href='/messages' className='flex items-center'>
          {isMessagesActive ? (
            <Icon icon='ic:baseline-email' width='32' height='32' />
          ) : (
            <Icon icon='ic:outline-email' width='32' height='32' />
          )}
        </Link>
      </div>
    </div>
  )
}

export default BottomNav
