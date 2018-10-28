import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryAnimation } from 'ngx-gallery';

export class GalleryEntry{
	name: String;
	galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

	constructor(name: String, folderPath: String, imagePaths: String[]) {
		this.name = name;
		this.galleryOptions = this.getGalleryOptions();
		this.galleryImages = this.getGalleryImages(folderPath, imagePaths);
	}

	private getGalleryOptions(): NgxGalleryOptions[] {
		return [
            {
                width: '768px',
                height: '576px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            }
        ];
	}

	private getGalleryImages(folderPath: String, imagePaths: String[]): NgxGalleryImage[] {
		var images = new Array();
		var basePath = "https://www.tanyixiong.com/" + folderPath.replace("/usr/site/", "") + "/";
		var sortedImagePaths = imagePaths.sort();
		for (var index = 0; index < sortedImagePaths.length; index++) {
			images.push({
				small: basePath + "small/" + sortedImagePaths[index],
                medium: basePath + "medium/" + sortedImagePaths[index],
                big: basePath + "large/" + sortedImagePaths[index],
			});
			
		}
		return images;
	}
}