import { Component, OnInit } from '@angular/core';
import { VaultService } from '../vault.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
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
  // navigateTo(albumName, albumId) {
  //   this.router.navigateByUrl('photos/list/' + albumName + '/' + albumId);
  // }

  onUpload() {
    console.log('this.selectedFile: ', this.selectedFile);
    // if (
    //   this.selectedFile !== null &&
    // ) {
    //   console.log(this.fileData);
    this._vaultService.uploadFile(this.selectedFile).subscribe(
      response => {
        console.log('response: ', response);
      },
      error => {
        console.log('error::', error);
      }
    );
    // } else {
    //   alert('please fill all the required fields to upload');
    // }
    // this.selectedFile = null;
  }
}
