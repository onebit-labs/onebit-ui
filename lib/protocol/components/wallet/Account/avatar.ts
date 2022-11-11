import * as localStorage from 'app/utils/cache/localStorage'
import { DEFAULT_AVATARS } from 'app/constant'

let i = Math.floor(Math.random() * 100) % 9
export const getDefaultAvatar = (name: string) => {
  const key = `profile_avatar_${name}`
  let avatar = localStorage.getItem(key)
  if (!avatar) {
    if (i === DEFAULT_AVATARS.length) i = 0
    avatar = DEFAULT_AVATARS[i++]
    localStorage.setItem(key, avatar)
  }

  return avatar
}
