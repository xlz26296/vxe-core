import { VxeGlobalConfig } from './global-config'
import { VxeGlobalIcon } from './global-icon'
import { VxeGlobalThemeName } from './global-theme'
import { VxeGlobalI18nLocale } from './global-lang'
import { VxeGlobalEvents } from './global-event'
import { VxeGlobalResize } from './global-resize'
import { VxeGlobalRenderer } from './renderer'
import { VxeGlobalValidators } from './validators'
import { VxeGlobalMenus } from './menus'
import { VxeGlobalFormats } from './formats'
import { VxeGlobalCommands } from './commands'
import { VxeGlobalInterceptor } from './interceptor'
import { VxeGlobalClipboard } from './clipboard'
import { VxeGlobalHooks } from './hooks'
import { VxeGlobalLog } from './log'

/* eslint-disable no-use-before-define */

export function setTheme(name: VxeGlobalThemeName): VxeUIExport

export function getTheme(): VxeGlobalThemeName

export function setConfig(options?: VxeGlobalConfig): VxeUIExport
export function getConfig(): Required<VxeGlobalConfig>
export function getConfig(key: keyof VxeGlobalConfig, defaultValue?: any): any

export function setIcon(options?: VxeGlobalIcon): VxeUIExport
export function getIcon(): Required<VxeGlobalIcon>
export function getIcon(key: keyof VxeGlobalIcon): any

export function setLanguage(locale: VxeGlobalI18nLocale): VxeUIExport
export function setI18n(locale: VxeGlobalI18nLocale, data: Record<string, any>): VxeUIExport
export function getI18n(key: string, args?: any): string

export const version: string

export const renderer: VxeGlobalRenderer

export const validators: VxeGlobalValidators

export const menus: VxeGlobalMenus

export const formats: VxeGlobalFormats

export const commands: VxeGlobalCommands

export const interceptor: VxeGlobalInterceptor

export const clipboard: VxeGlobalClipboard

export const globalEvents: VxeGlobalEvents

export const globalResize: VxeGlobalResize

export const log: VxeGlobalLog

export const hooks: VxeGlobalHooks

export interface VxeUIExport {
  /**
   * 版本号
   */
  coreVersion: string
  /**
   * 设置全局主题
   */
  setTheme: typeof setTheme
  /**
   * 获取全局主题
   */
  getTheme: typeof getTheme
  /**
   * 设置全局参数
   */
  setConfig: typeof setConfig
  /**
   * 获取全局参数
   */
  getConfig: typeof getConfig
  /**
   * 设置全局图标
   */
  setIcon: typeof setIcon
  /**
   * 设置组件当前语言
   */
  setLanguage: typeof setLanguage
  /**
   * 设置组件语言数据
   */
  setI18n: typeof setI18n
  /**
   * 获取组件语言值
   */
  getI18n: typeof getI18n

  /**
   * 获取全局图标
   */
  getIcon: typeof getIcon,

  /**
   * 全局渲染器
   */
  renderer: VxeGlobalRenderer
  /**
   * 全局校验扩展
   */
  validators: VxeGlobalValidators
  /**
   * 全局右键菜单扩展
   */
  menus: VxeGlobalMenus
  /**
   * 全局格式化对象
   */
  formats: VxeGlobalFormats
  /**
   * 全局操作指令
   */
  commands: VxeGlobalCommands
  /**
   * 全局事件拦截处理对象
   */
  interceptor: VxeGlobalInterceptor
  /**
   * 全局剪贴板
   */
  clipboard: VxeGlobalClipboard
  /**
   * 全局事件管理
   */
  globalEvents: VxeGlobalEvents
  /**
   * 全局观察者事件
   */
  globalResize: VxeGlobalResize

  /**
   * 全局日志
   */
  log: VxeGlobalLog

  // 扩展插件
  hooks: VxeGlobalHooks
}

export const VxeUI: VxeUIExport

export * from './global-config'
export * from './global-icon'
export * from './global-theme'
export * from './global-lang'
export * from './global-event'
export * from './global-resize'

export * from './renderer'
export * from './validators'
export * from './menus'
export * from './formats'
export * from './commands'
export * from './interceptor'
export * from './clipboard'
export * from './log'

export * from './hooks'

export default VxeUI
