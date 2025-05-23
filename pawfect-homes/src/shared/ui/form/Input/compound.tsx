import Group from './group'
import Input from './input'
import LeftAddon from './left-addon'
import RightAddon from './right-addon'

const InputCompound = Object.assign(Input, {
  LeftAddon,
  RightAddon,
  Group,
})

export { InputCompound }