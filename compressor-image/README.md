---
id: compressor-image
title: Compressor Image
tags:
  - cordova
  - capacitor
  - ionic
  - javascript
  - typescript
  - plugin
  - mobile
  - image
  - compressor
---

# Compressor Image

An efficient JavaScript library that utilizes canvas to compress images by adjusting their quality or size. Ideal for optimizing images for better performance and faster loading times.

[Online documentation](https://awesomecordovalibrary.com)

[Online demo](https://awesomecordovalibrary.com/compressor-image)

## Instruction

_This plugin is especially effective for large images that haven't been previously compressed by another software. To optimize compression further, consider resizing the image beforehand._

## Installation

```bash
npm install @awesome-cordova-library/compressor-image
```

## Vanilla

### Declaration

```typescript
export type FileExtension = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif' | 'bmp' | 'heic';
export type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif' | 'image/bmp' | 'image/heic';
export type CompressOptions = {
    src: string;
    targetLength: number;
    quality?: number;
    outputFormat?: OutputFormat;
    minQuality?: number;
    maxWidth?: number;
    maxHeight?: number;
};
export type CompressorImageReturn = {
    base64: string;
    outputFormat?: OutputFormat;
    width: number;
    height: number;
    quality: number;
    length: number;
};
/**
 * @author AZOULAY Jordan<jazoulay@joazco.com>
 *
 * compressor-image is a lightweight and efficient Node.js module designed to compress images using the power of the HTML Canvas API. Whether you're dealing with JPEG, PNG, or other image formats, compressor-image aims to reduce the file size while maintaining good visual quality. Ideal for web applications, content management systems, or any scenario where bandwidth and storage optimizations are crucial.
 */
export default class CompressorImage {
    /**
     * Determines the optimal image format based on a given file extension.
     * @params extension {FileExtension}
     */
    static determineOutputFormat(extension: FileExtension): OutputFormat;
    /**
     * Converts the size of a base64 string to megabytes (Mo).
     * @params base64 {string}
     */
    static sizeBase64ToMo(base64: string): number;
    /**
     * Compresses and optimizes an image.
     * @params options {Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight'>}
     */
    static compress(options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>): Promise<CompressorImageReturn>;
    /**
     * Compresses the image to approximate a desired file size in MB.
     * @params options {Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight'>}
     */
    static compressTargetLength(options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>): Promise<CompressorImageReturn>;
}
```

## React

### Declaration

```typescript
declare const useCompressorImage: () => {
    compress: (options: Pick<CompressOptions, 'src' | 'quality' | 'maxWidth' | 'maxHeight' | 'outputFormat'>) => Promise<import("../").CompressorImageReturn>;
    compressTargetLength: (options: Pick<CompressOptions, 'src' | 'minQuality' | 'targetLength' | 'maxWidth' | 'maxHeight' | 'outputFormat'>) => Promise<import("../").CompressorImageReturn>;
    determineOutputFormat: (extension: FileExtension) => import("../").OutputFormat;
    sizeBase64ToMo: (base64: string) => number;
};
export default useCompressorImage;
```

## CompressOptions

| Parameter      | Type     | Description                                                                                                |
| :------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| `src`          | `string` | Source of image or base 64 (need to set outputFormat value)                                                |
| `targetLength` | `number` | Target length in MB to which the image should be approximated.                                             |
| `quality`      | `number` | **Default: 0.8** Quality given as Number for the quality of the new image beetween 0 and 1                 |
| `outputFormat` | `number` | **Optional** This option is useful if your src is a base64 to determine the type of file to compress.      |
| `minQuality`   | `number` | **Default: 0.2**. Compression halts if this quality is reached while trying to approach the target length. |
| `maxWidth`     | `number` | Resizes the image for optimal compression if image width exceeds this value.                               |
| `maxHeight`    | `number` | Resizes the image for optimal compression if image height exceeds this value.                              |

## Usage

### Compress by quality

I wish to compress an image with a quality of 60%.

```typescript
import CompressorImage from "@awesome-cordova-library/compressor-image";
...

CompressorImage.compress({
  src: "https://mydomain.com/my-image.jpg",
  quality: 0.6,
  maxWidth: 1920,
  maxHeight: 1080
}).then((result) => {
  img.src = `data:${result.outputFormat || ''};base64,${result.base64}`;
})
```

OR REACT

```typescript
import React, {useState} from "react";
import useCompressorImage from "@awesome-cordova-library/compressor-image/lib/react";
...

function App(){
  const [src, setSrc] = useState("");
  const {compress} = useCompressorImage();
  return  (<div>
    <img src={src} />
    <button onClick={() => {
      compress({
        src: "https://mydomain.com/my-image.jpg",
        quality: 0.6,
        maxWidth: 1920,
        maxHeight: 1080
      }).then((base64) => {
      setSrc(`data:${result.outputFormat || ''};base64,${result.base64}`)
      })
    }}>Load src compress</button>
  </div>)
}
```

### Compresses to the maximum desired image length

I have a 5MB image and I would like it to come as close as possible to 2MB without going below 60% quality.

```typescript
import CompressorImage from "@awesome-cordova-library/compressor-image";
...

CompressorImage.compressTargetLength({
  src: "https://mydomain.com/my-image.jpg",
  targetLength: 2,
  minQuality: 0.6,
  maxWidth: 1920,
  maxHeight: 1080
}).then((base64) => {
   img.src = `data:${result.outputFormat || ''};base64,${result.base64}`;
})
```

OR REACT

```typescript
import React, {useState} from "react";
import useCompressorImage from "@awesome-cordova-library/compressor-image/lib/react";
...

function App(){
  const [src, setSrc] = useState("");
  const {compressTargetLength} = useCompressorImage();
  return  (<div>
    <img src={src} />
    <button onClick={() => {
      compressTargetLength({
        src: "https://mydomain.com/my-image.jpg",
        targetLength: 2,
        minQuality: 0.6,
        maxWidth: 1920,
        maxHeight: 1080
      }).then((base64) => {
      setSrc(`data:${result.outputFormat || ''};base64,${result.base64}`)
      })
    }}>Load src compress</button>
  </div>)
}
```

### Compresses a base64 value

```typescript
import CompressorImage from "@awesome-cordova-library/compressor-image";
...

CompressorImage.compress({
  src: "/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRX........",
  quality: 0.6,
  outputFormat: "image/jpeg",
  maxWidth: 1920,
  maxHeight: 1080
}).then((base64) => {
   img.src = `data:${result.outputFormat || ''};base64,${result.base64}`;
})
```

OR REACT

```typescript
import React, {useState} from "react";
import useCompressorImage from "@awesome-cordova-library/compressor-image/lib/react";
...

function App(){
  const [src, setSrc] = useState("");
  const {compress} = useCompressorImage();
  return  (<div>
    <img src={src} />
    <button onClick={() => {
      compress({
        src: "/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRX........",
        quality: 0.6,
        outputFormat: "image/jpeg",
        maxWidth: 1920,
        maxHeight: 1080
      }).then((base64) => {
        setSrc(`data:${result.outputFormat || ''};base64,${result.base64}`);
      })
    }}>Load src compress</button>
  </div>)
}
```
