import { Service } from '@bluelibs/core';
import { QueryBodyType } from '@bluelibs/x-ui';
import { Education } from '@bundles/UIAppBundle/collections';
import { EducationList as BaseEducationList } from './EducationList.base';

@Service({ transient: true })
export class EducationList extends BaseEducationList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
    this.remove('createdAt');
    this.remove('createdBy');
    this.remove('updatedAt');
    this.remove('updatedBy');
  }

  static getRequestBody(): QueryBodyType<Education> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
