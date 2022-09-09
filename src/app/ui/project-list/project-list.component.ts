import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectService} from "../../services/project.service";
import { ProjectModel} from "../../model/project.model";
import {Observable} from "rxjs";

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  constructor(private _projectService: ProjectService) {}

  data$ : Observable<ProjectModel[] | null> = this._projectService.getAll()

}
