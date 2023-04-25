import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'First Name',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
        required: true,
      },
    },
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        type: 'email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        required: true,
      },
    },
    {
      key: 'lastLoginDate',
      type: 'input',
      templateOptions: {
        label: 'Last Login Date',
        type: 'datetime-local',
      },
    },
    {
      key: 'lastIPAddress',
      type: 'input',
      templateOptions: {
        label: 'Last IP Address',
      },
    },
    {
      key: 'batchId',
      type: 'input',
      templateOptions: {
        label: 'Batch ID',
        type: 'text',
      },
    },
    {
      key: 'userType',
      type: 'input',
      templateOptions: {
        label: 'User Type',
        type: 'number',
      },
    },
    {
      key: 'customers',
      type: 'input',
      templateOptions: {
        label: 'Customers',
      },
    },
    {
      key: 'employees',
      type: 'input',
      templateOptions: {
        label: 'Employees',
      },
    },
    {
      key: 'isActive',
      type: 'checkbox',
      templateOptions: {
        label: 'Is Active',
      },
    },
    {
      key: 'isDeleted',
      type: 'checkbox',
      templateOptions: {
        label: 'Is Deleted',
      },
    },
    {
      key: 'tenantId',
      type: 'input',
      templateOptions: {
        label: 'Tenant ID',
        type: 'number',
      },
    },
    {
      key: 'tenant',
      type: 'input',
      templateOptions: {
        label: 'Tenant',
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
