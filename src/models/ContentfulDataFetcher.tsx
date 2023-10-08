import {ProductInfo} from "../content/Products";
import {NewsInfo} from "../content/News";

export interface ContentfulAllProductsResponseJson {
  items: {
    fields: {
      productId: string;
      name: string;
      brand: string;
      weight: number;
      stock: number;
      description: string;
      fullDescription: string;
      price: number;
      image: {
        sys: {
          id: string;
        };
      };
      line?: string;
      discountPrice?: number;
      tags?: string[];
    };
  }[];
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        file: {
          url: string;
        };
      };
    }[];
  };
}

export interface ContentfulAllNewsResponseJson {
  items: {
    fields: {
      newsId: string;
      image: {
        sys: {
          id: string;
        };
      };
      name: string;
      description: string;
      date: string;
      fullText: string;
    };
  }[];
  includes: {
    Asset: {
      sys: {
        id: string;
      };
      fields: {
        file: {
          url: string;
        };
      };
    }[];
  };
}

export const convertContentfulAllProductsJsonToProductInfoArray = (jsonData: ContentfulAllProductsResponseJson): ProductInfo[] => {
  return jsonData.items.map((item) => {
    const { fields } = item;
    const assetId = fields.image.sys.id;
    const asset = jsonData.includes.Asset.find((a) => a.sys.id === assetId);

    return {
      productId: fields.productId,
      name: fields.name,
      brand: fields.brand,
      weight: fields.weight,
      stock: fields.stock,
      description: fields.description,
      fullDescription: fields.fullDescription,
      price: fields.price,
      image: asset ? asset.fields.file.url : '',
      line: fields.line || '',
      discountPrice: fields.discountPrice || undefined,
      tags: fields.tags || undefined,
    };
  });
}

export const convertContentfulAllNewsJsonToProductInfoArray = (jsonData: ContentfulAllNewsResponseJson): NewsInfo[] => {
  return jsonData.items.map((item) => ({
    newsId: item.fields.newsId,
    name: item.fields.name,
    description: item.fields.description,
    date: item.fields.date,
    fullText: item.fields.fullText,
    image: jsonData.includes.Asset.find((asset) => asset.sys.id === item.fields.image.sys.id)?.fields.file.url || '',
  }));
}
