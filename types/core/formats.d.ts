/* eslint-disable no-use-before-define */

export namespace VxeGlobalFormatsHandles {
  export interface FormatsOptions {
    cellFormatMethod?: (params: FormatMethodParams, ...args: any[]) => string | number
  }
  export interface FormatMethodParams {
  }
}

/**
 * 全局格式化
 */
export interface VxeGlobalFormats {
  mixin(opts: {
    [name: string]: VxeGlobalFormatsHandles.FormatsOptions | ((params: VxeGlobalFormatsHandles.FormatMethodParams, ...args: any[]) => string | number)
  }): VxeGlobalFormats
  has(name: string): boolean
  get(name: string): VxeGlobalFormatsHandles.FormatsOptions
  add(name: string, options: VxeGlobalFormatsHandles.FormatsOptions | ((params: VxeGlobalFormatsHandles.FormatMethodParams, ...args: any[]) => string | number)): VxeGlobalFormats
  delete(name: string): void
  forEach(callback: (options: VxeGlobalFormatsHandles.FormatsOptions, name: string) => void): void
}
