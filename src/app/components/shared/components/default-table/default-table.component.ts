import {
  Component,
  ElementRef,
  inject,
  Input,
  output,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { DataAction, OrderTable, TableHead } from '../../models/table';
import { TableService } from '../../services/table.service';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status/status.component';
import { BtnActionComponent } from './btn-action/btn-action.component';

@Component({
    selector: 'app-default-table',
    imports: [CommonModule, StatusComponent, BtnActionComponent],
    templateUrl: './default-table.component.html',
    styleUrl: './default-table.component.scss'
})
export class DefaultTableComponent {
  @Input() listStatus: string[] = [];
  @Input() listHeader: TableHead[] = [];
  @Input() dataList: any;
  @Input() darkMode: boolean = false;
  @ViewChildren('itemOrder') itemOrder!: QueryList<ElementRef>;
  actionOrder = output<OrderTable>();
  actionFilter = output<boolean>();
  actionBtn = output<DataAction>();
  notFound: string = 'Aucune information';

  renderer = inject(Renderer2);
  tableService = inject(TableService);

  heritageRelation(
    data: any,
    relation: string | undefined,
    dataArray: boolean = false,
  ) {
    // dataArray need a array data
    if (relation && data) {
      let table = relation.split('.');
      return this.recursiveData(data, table, dataArray);
    }
  }
  recursiveData(obj: any, keys: any, dataArray: boolean): any {
    if (!keys || keys.length === 0) {
      return obj;
    }
    const key = keys.shift();
    if (typeof obj[key] !== 'undefined') {
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key]) && !dataArray) {
          let result: number = 0;
          for (const element of obj[key]) {
            result = this.recursiveData(element, keys, dataArray);
          }
          return result;
        } else {
          return this.recursiveData(obj[key], keys, dataArray);
        }
      } else {
        return obj[key];
      }
    }
  }

  onOrder(sort: string, item: any) {
    if (item.getAttribute('data-order')) {
      if (item.getAttribute('data-order') !== 'ASC') {
        for (const checkItem of this.itemOrder.toArray()) {
          if (checkItem.nativeElement !== item) {
            this.renderer.removeClass(checkItem.nativeElement, 'cntOrder--asc');
            this.renderer.setAttribute(
              checkItem.nativeElement,
              'data-order',
              'DESC',
            );
          } else {
            this.renderer.addClass(item, 'cntOrder--asc');
            this.renderer.setAttribute(
              checkItem.nativeElement,
              'data-order',
              'ASC',
            );
          }
        }
      } else {
        this.renderer.removeClass(item, 'cntOrder--asc');
        this.renderer.setAttribute(item, 'data-order', 'DESC');
      }
      this.actionOrder.emit({
        order: item.getAttribute('data-order'),
        sort,
      });
    }
  }
  onFilter() {
    this.actionFilter.emit(true);
  }
  onActionBtn(action: string, type: string) {
    this.actionBtn.emit({ action, type });
  }
}
