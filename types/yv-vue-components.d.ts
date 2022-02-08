/*
 * @path        : \yv-vue-components\types\yv-vue-components.d.ts
 * @message     : 
 * @Author      : YvanGuo
 */
import Vue, { PluginObject } from 'vue'
import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

import { YvScrollTabs } from './scroll-tabs'
import { YvDialogLayout } from './dialog-layout'
import { YvFormFactory } from './form-factory'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(ElementUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = ElementUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = ElementUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = ElementUIHorizontalAlignment

/** ScrollTabs Component */
export class ScrollTabs extends YvScrollTabs {}

/** DialogLayout Component */
export class DialogLayout extends YvDialogLayout {}

/** FormFactory Component */
export class FormFactory extends YvFormFactory {}

