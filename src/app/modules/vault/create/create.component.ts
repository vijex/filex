import { Component, OnInit } from '@angular/core';
import { VaultService } from '../vault.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  selectedFile: File = null;
  filePath: any;
  fileData: any;
  fileName: any;
  constructor(private _vaultService: VaultService) {}

  ngOnInit() {}

  onFileSelected(event) {
    console.log('event: ', event);
    const reader = new FileReader();
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.fileData = event.target.files;
    this.filePath = event.target.value;
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log(event);
  }

  onUpload(event) {
    console.log('this.selectedFile: ', this.selectedFile);
    this._vaultService.uploadFile(event.target.files[0]).subscribe(
      response => {
        console.log('response: ', response);
      },
      error => {
        console.log('error::', error);
      }
    );
  }
}
