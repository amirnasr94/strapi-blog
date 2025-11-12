import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    lable: Schema.Attribute.Enumeration<['technology', 'health']>;
    publishDate: Schema.Attribute.Date;
  };
}

export interface BlocksLatestBlogs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_latest_blogs';
  info: {
    displayName: 'latest blogs';
  };
  attributes: {};
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    disable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.Text;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.latest-blogs': BlocksLatestBlogs;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
