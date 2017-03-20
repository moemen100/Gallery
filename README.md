# Gallery
A JavaScript plugin made by using JavaScript Object Prototypes shows images in full screen and normal view.
Use Case
 <script src="js/album.js"></script>
    <link rel="stylesheet" href="css/album.css">
    <link rel="stylesheet" href="css/normalize.css">
    <script>
        $(document).ready(function () {
            myGallery = new Gallery({
                objName: "myGallery",
                imagesContainer: "#gallery",
                imagesPath: "images/small/",
                fullImagesPath:"images/large/",
                imagesArray: [
                    "img1.jpg",
                    "img2.jpg",
                    "img3.jpg",
                    "img4.jpg",
                    "img5.jpg",
                    "img6.jpg",
                    "img7.jpg",
                    "img8.jpg",
                    "img9.jpg"

                ]
            })
        })
    </script>


</head>
<body style="background-color: silver">
<div id="gallery" class="galleryWrapper"></div>
</body>
