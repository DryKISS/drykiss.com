---
author      : DryKISS
category    : optimisation
description : "Investigation into how to optimise and compress images for deployment though a JQuery mobile Phongeap application"
image       : ""
published   : true
subcategory : image
tags        : [image, jpg, png]
title       : "Image Optimisation"
---

For a photo heavy JQuery Mobile, PhoneGap application there was a vital
need to optimise and compress the JPG and PNG images within the app.

READMORE

This sent me on a journey to discover the available tools and methods to
achieve the best file size to image quality ouput.

Successful deployment on the iPhone was the main goal, so this post is
swayed towards making the user experience in iOS as good as it can be.
Hopefully in future iterations of the application we will address the
wider handheld market.

## Immediate Decisions

There are several options also regarding how the user consumes these images in
the first place.

* Images can be bundled within the initial download; bonus here is that we can
  then achieve offline usage easier. However the initial IPA could be huge.
* User is asked to download packages of images; before proceeding
* Images are download from a server on-demand

## Image Quantity

Outside of the usual icons, splash screens and template images that are required
the actual number of photos the app could have is:

1200 JPGs and 200 PNGs

Each time we add a location to the application add another similar amount of images.
So with 10 locations we could possibly have 12,000 photos.

## Image Dimensions

For the sake of speed of development and acruing these photos a set image
size of 640x430 JPGs was decided upon [iPhone Resolution][] for the images carousels,
adn 80x80 PNGs for the logos.

## Image Resolution

With the introduction of Retina devices; resolution, PPI and DPI got a little more complicated!
Designing effective UI and photo assets for the iOS devices takes more time and thought.

For the UI it is not unreasonable to develop two sets of graphics, exported at 72 and 144 DPI.

For clarity The DPI in the PSD does not matter. What matters is that you have the appropriate
pixel dimensions in the exported image.

For instance the photos we require could be exported at 320x214 (important to keep numbers even),
export these out at 72 DPI and call it 1.png, and then at 144 DPI and call it 1@2x.png.

The @2x suffix is recognized by iOS and the file is used in retina screens instead of the
low resolution file. However this does not extend to applications built with HTML and PhoneGap

## JPGs vs PNGs

Bascially these are the best two formats in which to save all image artifcats.

From the articles we have scoured through, the consensus seems to be that PNGs are
favourable when used for smaller UI dependant images; and JPGs for photos.

Reference
[Design for Retina Part 1][]
[Design for Retina Part 2][]

### PNGs

* Supports transparency
* Supports lossless data compression
* Usually higher initial storage file size than JPG
* XCode will compress PNGs at build time using [PNGCrush][]

### JPGs

* No Transparency
* Lossy, depends on the compression level used - usually saved at 60%
* Often much smaller footprint for large photos than PNG

When rendering an image on a device it consumes memory and cpu. This is basically
split into three sections. init, decompress and draw. In [benchmarks][] a PNG usually
takes longer to render a photo image than JPG.

## Compression Tools

Below are some of the more widely used image compression tools, most of these
are command line and can be installed through Homebrew.

Please add a comment if there are others that should be included here.

There are a lot of [online only tools][SmushIt] that compress images too, probably most
of these use the below libraries anyway on the server.

### GUI Software

* [JPEGmini][]
    * Release - 1.6.2
    * Claims to reduce the size of JPEGs by up to 5x whilst keeping quality.
* [ImageOptim][]
    * Release - Version 1.4.0
    * Can compress both PNGs and JPGs
    * Utlises many of the command line tools in the list below:
    * You have command line access to these internal tools here:
        * $ cd /Applications/ImageOptim.app/Contents/MacOS
        * ./advpng --help
        * In all cases these are not be the latest versions
            * advpng 1.15, gifsicle 1.63, jpegoptim 1.2.3, jpegtran 2010-01-10, optipng 0.6.5, pngcrush 1.7.22, pngout 2011-07-22

### Command Line Tools

* [ADVPng][]
    * Release - 1.17
    * The  main purpose of this utility is to recompress png files to get the smallest possible size.
    * brew install advancecomp
* [GIFsicle][]
    * Release - 1.70
    * brew install gifsicle
    * gifsicle require [XQuartz][]
* [ImageMagik][]
    * Release - 6.8.5-4
    * The big daddy of the command line tools
    * brew install imagemagick
* [JPEGOptim][]
    * Release - 1.3.0
    * brew install jpegoptim
* [JPEGTran][]
    * Release - 2012-10-05
    * See the [NPM Library][JPEGTranNPM]
    * Huffman table optimisation is lossless
* [OptiPNG][]
    * Release - 0.7.4
    * brew install optipng
* [PNGOut][]
    * Release - 21 February 2013
    * OSX Port [PNGOutMac][]
    * Example - $ pngout duke3d.png -c2 -f3 -b128 -kbKGD -v <- writes duke3d.png if smaller
* [PNGCrush][]
    * Release - 1.7.57
    * brew install pngcrush

### NPM also provides tools we can utilise

~~~ ruby
def my_cool_method(message)
    puts message
end
~~~

* [ImageMin][]
    * Can optimise PNG and JPEG
    * Uses JPEGTran and OptiPNG libraries for this
* [ImageOptmizer Brunch][]
    * Optimize PNG and JPG images with optipng & jpegtran on --optimize

### Image Information

* [ImageInfo][]
    * NPM Package
    * Supports PNG and Jpeg
* [MediaTags][]
    * NPM Package
* [JPEGInfo][]
    * brew install jpeginfo

More information on some of the tools can be found [here][image_optim]

### Installation

To replicate the libraries that imageOptim uses the following commands should install them

    $ brew update
    $ brew upgrade
    $ brew install advancecomp gifsicle jpegoptim jpeg optipng pngcrush
    $ brew doctor

    $ cd ~/Desktop && curl http://static.jonof.id.au/dl/kenutils/pngout-20130221-darwin.tar.gz > pngout-20130221-darwin.tar.gz

GIFSicle requires XQuartz, as our project did not require GIF images it was not installed.

## Test

I took the largest JPEG image we have this has an initial file size of 201,517 bytes

* JPEG Mini
    * 163,191
* ImageOptim
    * Set for 80%
    * 120,346
* JPEGMini and ImageOptim
    * 154,456
* ImageOptim and JPEGMini
    * 156,501
* JPEGOptim
    * jpegoptim -ptm80 --strip-all ~/Desktop/jpegoptim.jpg
    * 120,621
* JPEGTran
    * jpegtran -optimize -copy none ~/Desktop/jpegtran.jpg > ~/Desktop/jpegtran1.jpg
    * 186,541
* JPEGOptim and JPEGTran
    * 120,621
    * jpegtran -optimize -copy all ~/Desktop/jpeg.jpg > ~/Desktop/jpeg1.jpg
    * jpegoptim -ptm80 --strip-all ~/Desktop/jpeg1.jpg

[XQuartz]:http://xquartz.macosforge.org/landing/
[GIFsicle]:http://www.lcdf.org/gifsicle/
[image_optim]:https://github.com/toy/image_optim
[JPEGInfo]:http://www.kokkonen.net/tjko/projects.html
[ImageOptmizer Brunch]:https://npmjs.org/package/imageoptmizer-brunch
[ImageMagik]:http://www.imagemagick.org/
[MediaTags]:https://npmjs.org/package/mediatags
[ImageInfo]:https://npmjs.org/package/imageinfo
[ImageMin]:https://npmjs.org/package/grunt-contrib-imagemin
[SmushIT]:http://www.smushit.com/ysmush.it/
[JPEGmini]:http://www.jpegmini.com/
[JPEGTran]:http://jpegclub.org/jpegtran/
[JPEGTranNPM]:https://npmjs.org/package/jpegtran
[PNGOut]:http://advsys.net/ken/utils.htm
[PNGOutMac]:http://www.jonof.id.au/kenutils
[JPEGOptim]:https://github.com/tjko/jpegoptim
[OptiPNG]:http://optipng.sourceforge.net/
[ADVPng]:http://advancemame.sourceforge.net/doc-advpng.html
[iPhone Resolution]:http://www.iphoneresolution.com/
[ImageOptim]:http://imageoptim.com/
[PNGCrush]:http://pmt.sourceforge.net/pngcrush/
[benchmarks]:http://www.cocoanetics.com/2011/10/avoiding-image-decompression-sickness/
[Design for Retina Part 1]:http://bjango.com/articles/designingforretina/
[Design for Retina Part 2]:http://bjango.com/articles/designingforretina2/

<!--
http://fireworks.smashingmagazine.com/2012/12/03/design-ios-apps-with-adobe-fireworks/
http://i.stack.imgur.com/U5Rw3.jpg
http://mobile.tutsplus.com/tutorials/iphone/preparing-your-iphone-app-for-higher-resolutions/
https://github.com/pornel/ImageOptim
 -->