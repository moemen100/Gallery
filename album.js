    /* defining the Gallery object
     *
     *@param the gallery configurations
     *
     *Object  configs: the configuration options
     *Object  thisObj: the name of this object which declared by the user
     *
     */
    function Gallery(configs) {
        Gallery.prototype.configs = configs;
        Gallery.prototype.thisObj = this.configs.objName;
        Gallery.prototype.start();
    }

    /* start the gallery by appending the images given to the declared container
     *
     */
    Gallery.prototype.start = function () {
        var imagesArray = this.configs.imagesArray;
        // get the image container
        var imagesContainer = $(this.configs.imagesContainer);
        // set the image path
        var imagesPath = this.configs.imagesPath;
        imagesContainer.empty();
        for (var image in imagesArray) {
            var imageName = imagesArray[image];
            // on clicking the image call the function pop image with @param image number
            imagesContainer.append('<div class="imageWrap" onclick="' + this.thisObj + '.popImage(\'' + image + '\')"><img src=' + imagesPath + imageName + '></div>');
        }
    };


    /* pop the full screen image
     * make the next image call the same function with the number of the next image
     * make the previous image call the same function with the number of the previous image
     *
     * @param the clicked image number in the images array
     *
     *
     *
     */

    Gallery.prototype.popImage = function (imageNumber) {
        var imagesPath = this.configs.fullImagesPath;

        var imageArrayLength = this.configs.imagesArray.length;

        var currentImageNumber = parseInt(imageNumber);

        var nextImageNumber;
        currentImageNumber + 1 != imageArrayLength ? nextImageNumber = currentImageNumber + 1 : nextImageNumber = 0;

        var previousImageNumber;
        currentImageNumber - 1 != -1 ? previousImageNumber = currentImageNumber - 1 : previousImageNumber = imageArrayLength - 1;

        var currentImage = this.configs.imagesArray[currentImageNumber];

        $('#popFullImage').remove();

        $(this.configs.imagesContainer).after('<div id=\"popFullImage\" class=\"popImage\">' +
                '<div class="arrow-left" onclick="' + this.thisObj + '.popImage(\'' + previousImageNumber + '\')"><span></span></div>' +
                '<div class=\"popImageWrap\"> ' +
                '<div class=\"closeBtn\" onclick=\"$(\'#popFullImage\').remove()\">X</div>' +
                '<img src=\"' + imagesPath + currentImage + '\">' +
                '</div>' +
                '<div class="arrow-right" onclick="' + this.thisObj + '.popImage(\'' + nextImageNumber + '\')"><span></span></div>' +
                '</div>')

    };


