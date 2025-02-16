/* eslint-disable no-use-before-define */

export namespace VxeGlobalMenusHandles {
  export type MenusOption = {
    menuMethod?: (params: MenuMethodParams, event: Event) => any
  }
  export interface MenuMethodParams {
    $event: MouseEvent
    menu: any
  }
}

/**
 * 全局快捷菜单
 */
export interface VxeGlobalMenus {
  mixin(opts: {
    [code: string]: VxeGlobalMenusHandles.MenusOption | ((params: VxeGlobalMenusHandles.MenuMethodParams, event: Event) => any)
  }): VxeGlobalMenus
  has(code: string): boolean
  get(code: string): VxeGlobalMenusHandles.MenusOption
  add(code: string, options: VxeGlobalMenusHandles.MenusOption | ((params: VxeGlobalMenusHandles.MenuMethodParams, event: Event) => any)): VxeGlobalMenus
  delete(code: string): void
  forEach(callback: (options: VxeGlobalMenusHandles.MenusOption, code: string) => void): void
}
