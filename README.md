# Gallery
A JavaScript plugin made by using JavaScript Object Prototypes shows images in full screen and normal view.
Use Case
<link rel="stylesheet" href="{{asset("css/album.css")}}">
    <link rel="stylesheet" href="{{asset("css/normalize.css")}}">
    <script>
        $(document).ready(function () {
            myGallery = new Gallery({
                objName: "myGallery",
                imagesContainer: "#gallery",
                imagesPath: "{{asset("images/small/")}}" + "/",
                fullImagesPath: "{{asset("images/large/")}}" + "/",
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

