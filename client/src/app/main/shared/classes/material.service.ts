import { ElementRef } from '@angular/core'

export interface MaterialInstance {
  open?(): void

  close?(): void

  destroy?(): void
}

declare var M

export class MaterialService {

  static totals(message: string) {
    M.toast({html: message})
  }

  static initModal(ref: ElementRef, options?: Object): MaterialInstance {
    return M.Modal.init(ref.nativeElement, options)
  }

  static initSidenav(ref: ElementRef): MaterialInstance {
    return M.Sidenav.init(ref.nativeElement)
  }

  static initCollapsible(ref: ElementRef): MaterialInstance {
    return M.Collapsible.init(ref.nativeElement)
  }

  static initSelect(ref: ElementRef, options?: Object) {
    return M.FormSelect.init(ref.nativeElement, options)
  }

}
