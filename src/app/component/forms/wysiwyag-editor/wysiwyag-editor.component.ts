import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor, Toolbar, Validators } from 'ngx-editor';

@Component({
  selector: 'app-wysiwyag-editor',
  templateUrl: './wysiwyag-editor.component.html',
  styleUrls: ['./wysiwyag-editor.component.scss'],
})
export class WYSIWYAGEDITORComponent {
  constructor(private modalService: NgbModal) {}
  form: any = new FormGroup({
    editorContent: new FormControl(
      { value: '', disabled: false },
      Validators.required()
    ),
  });

  get doc(): AbstractControl {
    return this.form('editorContent');
  }

  OpenEditor(editormodal: any) {
    this.modalService.open(editormodal, { centered: true, size: 'lg' });
  }

  // ngx-editor
  editordoc = '';

  editor!: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
}
