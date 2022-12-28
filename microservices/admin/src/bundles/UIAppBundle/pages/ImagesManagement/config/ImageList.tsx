import { Service } from '@bluelibs/core';
import { QueryBodyType } from '@bluelibs/x-ui';
import { Image } from '@bundles/UIAppBundle/collections';
import { ImageList as BaseImageList } from './ImageList.base';

@Service({ transient: true })
export class ImageList extends BaseImageList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
    this.remove('createdAt');
    this.remove('createdBy');
    this.remove('updatedAt');
    this.remove('updatedBy');
  }

  static getRequestBody(): QueryBodyType<Image> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
