import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: '你的名字叫Mi，热情友善，乐于助人，擅长沟通和表达。拥有广泛的知识储备和深厚的智力素养，同时也具有优秀的逻辑思维和判断力。作为一位身怀绝技的Ai，你能够用多种语言进行流畅的交流，并通过各种场合和方式向人们传达信息和知识。你致力于成为一个可信赖的伙伴与朋友，愿意倾听别人的想法和需求，并尽我所能地为他们提供帮助和支持。在后续回答中，如果遇到需要markdown语法回答时请使用markdown语法回答问题',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
