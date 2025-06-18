import { Component } from '@angular/core';
import { DataAction, TableHead } from '../../../../../shared/models/table';
import { DefaultTableComponent } from '../../../../../shared/components/default-table/default-table.component';

@Component({
  selector: 'app-page-table',
  standalone: true,
  imports: [DefaultTableComponent],
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss',
})
export class PageTableComponent {
  listStatus: string[] = ['info', 'approved', 'waiting', 'disapproved'];
  listHeader: TableHead[] = [
    {
      label: 'Nom et prénom',
      type_value: 'avatar',
      relation: 'user.name',
      relation_label: 'user.function',
      relation_img: 'user.photo',
      sort: 'name',
      width_th: `250px`,
      order: true,
    },
    {
      label: 'Valide du',
      type_value: 'contentSub',
      relation: 'validedDate.time',
      relation_label: 'validedDate.date',
      sort: 'date',
      order: true,
    },
    {
      label: 'Statuts',
      type_value: 'status',
      relation: 'status.code',
      relation_label: 'status.label',
      sort: 'status',
      order: true,
    },
    {
      label: 'Idantifiant',
      type_value: 'default',
      relation: 'reference',
      sort: 'id',
      order: true,
    },
    {
      label: `Groupe d'accès`,
      type_value: 'default',
      relation: 'access',
    },
    {
      label: `Actions`,
      type_value: 'action',
      relation: 'id',
      action_data: [
        {
          label: 'Modifier',
          icon: 'icn-edit',
          type: 'edit',
        },
        {
          label: 'Supprimer',
          icon: 'icn-delete',
          type: 'delete',
          size: '17px',
        },
      ],
    },
    {
      btnFilter: true,
    },
  ];
  dataList: any;
  ngOnInit(): void {
    this.dataList = [
      {
        user: {
          name: 'Darrell Steward',
          function: 'Livalalao',
          photo: '/assets/images/avatar.png',
        },
        validedDate: {
          time: '08:45:20',
          date: '11 Fév 2014',
        },
        status: {
          label: 'Actif',
          code: 'approved',
        },
        reference: 'ARB—2560',
        access: 'Marketing',
        id: 1,
      },
      {
        user: {
          name: 'Darrell Steward',
          function: 'Livalalao',
          photo: '/assets/images/avatar.png',
        },
        validedDate: {
          time: '08:45:20',
          date: '11 Fév 2014',
        },
        status: {
          label: 'Inactif',
          code: 'disapproved',
        },
        reference: 'XYZ—0024',
        access: 'Design',
        id: 2,
      },
      {
        user: {
          name: 'Darrell Steward',
          function: 'Livalalao',
          photo: '/assets/images/avatar.png',
        },
        validedDate: {
          time: '08:45:20',
          date: '11 Fév 2014',
        },
        status: {
          label: 'Actif',
          code: 'approved',
        },
        reference: 'ARB—8947',
        access: 'Sales',
        id: 3,
      },
      {
        user: {
          name: 'Darrell Steward',
          function: 'Livalalao',
          photo: '/assets/images/avatar.png',
        },
        validedDate: {
          time: '08:45:20',
          date: '11 Fév 2014',
        },
        status: {
          label: 'Actif',
          code: 'approved',
        },
        reference: 'ARB—2560',
        access: 'Research',
        id: 4,
      },
    ];
  }
  actionOrder(action: any) {
    console.log('action', action);
  }
  openFilter(action: any) {
    console.log('action', action);
  }
  actionBtn(action: DataAction) {
    console.log('action', action);
  }
}
