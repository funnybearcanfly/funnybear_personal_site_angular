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
                imageAnimation: NgxGalleryAnimation.Slide,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 4,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '350px',
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 6,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            },
            // max-width 400
            {
                breakpoint: 400,
                height: '270px',
                preview: false,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 4,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            }
        ];
	}

	private getGalleryImages(folderPath: String, imagePaths: String[]): NgxGalleryImage[] {
		var images = new Array();
		var basePath = "https://www.tanyixiong.com:3333/" + folderPath.replace("/usr/site/", "") + "/";
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