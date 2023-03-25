import { Component } from '@angular/core';

@Component({
  selector: 'app-worksPhotos',
  templateUrl: './worksPhotos.component.html',
  styleUrls: ['./worksPhotos.component.less']
})
export class WorksPhotosComponent {


 readonly galleryImg: Array<{ id: number, img: string }> = [


    {

      id: 1,
      img: './assets/images/gallery/v5.jpg'


    }

    ,
    {

      id: 2,
      img: './assets/images/gallery/v4.jpg'


    }

    ,

    {

      id: 3,
      img: './assets/images/gallery/v3.jpg'


    }






  ]

}
