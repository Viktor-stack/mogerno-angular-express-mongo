import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core'
import {AdminService} from '../../services/admin.service'
import {ProfileUser, RoleName} from '../../../main/shared/interface'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {MaterialService} from '../../../main/shared/classes/material.service'
import {NgModel} from '@angular/forms'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
  message: string
  user: ProfileUser
  RoleList: RoleName[]
  @ViewChild('select') selectRef: ElementRef
  @ViewChild('role') role: NgModel
  ngModel: string


  constructor(private adminService: AdminService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              return this.adminService.getUserById(params['id'])
            }
            return of(null)
          }
        )
      )
      .subscribe((user: ProfileUser) => {
        this.user = user
      })
  }

  ngAfterViewInit(): void {
    this.adminService.getRolesList().subscribe((RoleList: RoleName[]) => {
      this.RoleList = RoleList
    })
    setTimeout(() => {
      MaterialService.initSelect(this.selectRef, {})
    }, 500)
  }


  submit() {
    const obj = {
      roleID: this.ngModel
    }
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              return this.adminService.updateRole(params['id'], obj)
            }
            return of(null)
          }
        )
      ).subscribe(user => {
      this.user = user
    })
  }

  deleteUser() {
    debugger
    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              return this.adminService.deleteUser(params['id'])
            }
            return of(null)
          }
        )
      ).subscribe((res) => {
      this.message = res.message
      this.router.navigate(['/admin/users'])
    })
  }
}
