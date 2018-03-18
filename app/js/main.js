function canvas() {
    $('.canvas-container').each(function(index) {
      var canvasContainer = $(this)[0];
      var canvasObjects = $("canvas", this)[0];
      var canvasImages = [
        "images/hockey-full.svg",
        "images/hockey-half.svg",
        "images/hockey-half.png",
        "images/soccer-full.svg",
        "images/soccer-half.svg"
      ];
      var canvas = window._canvas = new fabric.Canvas(canvasObjects, { selection: false, hoverCursor:'pointer', borderSize: 3, borderColor: 'red' });

      var _$ = function(id){return document.getElementById(id)};

      var line,
          dashLine,
          isEnable,
          mode;

      var draw = _$('freeDrawing');
          dash = _$('draw-dashed-line');
          drawLine = _$('draw-line');
          clearEl = _$('clear-canvas');
          hockeyFull = _$('hockey-full');
          hockeyHalf = _$('hockey-half');
          soccerFull = _$('soccer-full');
          soccerHalf = _$('soccer-half');
          deleteObjects = _$('delete');

      // Controls for lines, not images
      var controlsVisibility = ({
          mt: false,
          mb: false,
          ml: true,
          mr: true,
          bl: false,
          br: false,
          tl: false,
          tr: false,
          mtr: true, })


      canvas.setWidth(1024);
      canvas.setHeight(520);
      canvas.setBackgroundImage(canvasImages[0], canvas.renderAll.bind(canvas));

      hockeyFull.onclick = () => {
        if (canvasContainer.offsetWidth <= 375 ) {
            canvas.setWidth(375);
            canvas.setHeight(190);
            canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth <= 414) {
          canvas.setWidth(414);
          canvas.setHeight(210);
          canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight >= 210 && canvasContainer.offsetWidth < 736 ) {
          canvas.setWidth(736);
          canvas.setHeight(350);
          canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight < 375) {
          canvas.setWidth(736);
          canvas.setHeight(380);
          canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        }  else if (canvasContainer.offsetWidth >= 768 && canvasContainer.offsetWidth < 1024) {
          canvas.setWidth(768);
          canvas.setHeight(390);
          canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        } else {
          canvas.setWidth(1024);
          canvas.setHeight(520);
          canvas.setBackgroundImage(canvasImages[0],
            canvas.renderAll.bind(canvas));
        }
      }

      hockeyHalf.onclick = () => {
        if (canvasContainer.offsetWidth <= 375 ) {
            canvas.setWidth(375);
            canvas.setHeight(290);
            canvas.setBackgroundImage(canvasImages[1],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth <= 414) {
          canvas.setWidth(414);
          canvas.setHeight(320);
          canvas.setBackgroundImage(canvasImages[1],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight >= 210 && canvasContainer.offsetWidth < 736 ) {
          canvas.setWidth(736);
          canvas.setHeight(520);
          canvas.setBackgroundImage(canvasImages[1],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight < 375) {
          canvas.setWidth(736);
          canvas.setHeight(570);
          canvas.setBackgroundImage(canvasImages[1],
            canvas.renderAll.bind(canvas));
        }  else if (canvasContainer.offsetWidth >= 768 && canvasContainer.offsetWidth < 1024) {
          canvas.setWidth(600);
          canvas.setHeight(470);
          canvas.setBackgroundImage(canvasImages[2],
            canvas.renderAll.bind(canvas));
        } else {
          canvas.setWidth(800);
          canvas.setHeight(620);
          canvas.setBackgroundImage(canvasImages[2],
            canvas.renderAll.bind(canvas));
        }
      }

      soccerFull.onclick = () => {
        if (canvasContainer.offsetWidth <= 375 ) {
            canvas.setWidth(340);
            canvas.setHeight(250);
            canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth <= 414) {
          canvas.setWidth(370);
          canvas.setHeight(280);
          canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight >= 210 && canvasContainer.offsetWidth < 736 ) {
          canvas.setWidth(630);
          canvas.setHeight(450);
          canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight < 375) {
          canvas.setWidth(660);
          canvas.setHeight(490);
          canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth >= 768 && canvasContainer.offsetWidth < 1024) {
          canvas.setWidth(690);
          canvas.setHeight(510);
          canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        } else {
          canvas.setWidth(909);
          canvas.setHeight(680);
          canvas.setBackgroundImage(canvasImages[3],
            canvas.renderAll.bind(canvas));
        }
      }

      soccerHalf.onclick = () => {
        if (canvasContainer.offsetWidth <= 375 ) {
            canvas.setWidth(340);
            canvas.setHeight(250);
            canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth <= 414) {
          canvas.setWidth(370);
          canvas.setHeight(280);
          canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight >= 210 && canvasContainer.offsetWidth < 736 ) {
          canvas.setWidth(630);
          canvas.setHeight(450);
          canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetHeight < 375) {
          canvas.setWidth(660);
          canvas.setHeight(490);
          canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        } else if (canvasContainer.offsetWidth >= 768 && canvasContainer.offsetWidth < 1024) {
          canvas.setWidth(690);
          canvas.setHeight(510);
          canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        } else {
          canvas.setWidth(909);
          canvas.setHeight(680);
          canvas.setBackgroundImage(canvasImages[4],
            canvas.renderAll.bind(canvas));
        }
      }

      clearEl.onclick = () => {
        window.location.reload(false)
        // canvas.clear();
      };



      $(".select").mousedown(() => {
        mode="select";
        canvas.isDrawingMode = false;
        canvas.renderAll();
      });

      $("#freeDrawing").click(() => {
        mode="freeDrawing";
      });

      $("#draw-dashed-line").click(() => {
        mode="draw-dashed-line";
      });

      $("#draw-line").click(() => {
        mode="draw-line";
      });


      // delete one object
      deleteObjects.onclick = () => {
        var selection = canvas.getActiveObject();
          canvas.remove(selection)
      }


      // Free drawing
      draw.onclick = () => {
        canvas.isDrawingMode = true;
        canvas.on('mouse:down', () => {
          canvas.freeDrawingBrush.width = 3;
        });
      }

        // Draw dashed lines
        dash.onclick = () => {
          canvas.isDrawingMode = false;
          canvas.on('mouse:down', (o) => {
            isEnable = true;
            var pointer = canvas.getPointer(o.e);
            var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];

            dashLine = new fabric.Line(points, {
              strokeWidth: 3,
              stroke: canvas.freeDrawingBrush.color,
              originX: 'center',
              originY: 'center',
              hasControls: true,
              cornerSize: 22,
              rotatingPointOffset: 30,
              centeredScaling: true,
              strokeDashArray: [5,5],
              padding: 10,
              borderColor: canvas.freeDrawingBrush.color,
              cornerColor: canvas.freeDrawingBrush.color
            });

            dashLine.setControlsVisibility(controlsVisibility);

            canvas.add(dashLine);
            })

          canvas.on('mouse:move', (o) => {
            if (!isEnable) return;
            var pointer = canvas.getPointer(o.e);

            if(mode==="draw-dashed-line"){
              dashLine.set({ x2: pointer.x, y2: pointer.y });
              canvas.renderAll(); }
              });

            canvas.on('mouse:up', (o) => {
              isEnable = false;
              canvas.selection=false;
              dashLine.setCoords();
            });
        }


          // Draw lines
          drawLine.onclick = (e) => {
          canvas.isDrawingMode = false;
          canvas.on('mouse:down', (o) => {
            isEnable = true;
            var pointer = canvas.getPointer(o.e);
            var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];

            line = new fabric.Line(points, {
              strokeWidth: 3,
              stroke: canvas.freeDrawingBrush.color,
              originX: 'center',
              originY: 'center',
              hasControls: true,
              cornerSize: 22,
              rotatingPointOffset: 30,
              centeredScaling: true,
              padding: 10,
              borderColor: canvas.freeDrawingBrush.color,
              cornerColor: canvas.freeDrawingBrush.color

            });

            line.setControlsVisibility(controlsVisibility);

            canvas.add(line);
            })

          canvas.on('mouse:move', (o) => {
            if (!isEnable) return;
            var pointer = canvas.getPointer(o.e);

            if(mode=="draw-line"){
            line.set({ x2: pointer.x, y2: pointer.y });
            canvas.renderAll(); }
          });

          canvas.on('mouse:up', (o) => {
            isEnable = false;
            canvas.selection=false;
            line.setCoords();
          });
      }

        //Colorpicker
        var yellow = '#ffb81c',
            green = '#034638',
            blue = '#0638C4',
            red = '#c8102e'

        $("#showPaletteOnly").spectrum({
          showPaletteOnly: true,
          showPalette:true,
          change: function(color) {
            printColor(color);
          },
          palette: [
            [ yellow, green, blue, red]
          ]
        });

        function printColor(color) {
          var colorPicked = color.toHexString()
          canvas.freeDrawingBrush.color = colorPicked;
          console.log(color);
        }

        // Drag & drop img on canvas
        var imageOffsetX, imageOffsetY;

        function handleDragStart(e) {
            canvas.isDrawingMode = false;
            canvas.renderAll();
          canvas.isDrawingMode = false;
          [].forEach.call(images, function (img) {
              img.classList.remove('dragging');
          });
          this.classList.add('dragging');

          var imageOffset = $(this).offset();
          imageOffsetX = e.clientX - imageOffset.left;
          imageOffsetY = e.clientY - imageOffset.top;
        }

        function handleDragOver(e) {

            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'copy';
            return false;
        }

        function handleDragEnter(e) {
            this.classList.add('over');
        }

        function handleDragLeave(e) {
            this.classList.remove('over');
        }

        function handleDrop(e) {
             if (e.stopPropagation) {
                 e.stopPropagation();
             }

            var img = document.querySelector('.puck img.dragging, .tyre img.dragging, .small-tyre img.dragging, .blue-circle img.dragging, .circle-numbers img.dragging, .arrow img.dragging, .hockey-goal img.dragging');

            var offset = $(canvasObjects).offset();
            var y = e.clientY - (offset.top + imageOffsetY);
            var x = e.clientX - (offset.left + imageOffsetX);



            var newImage = new fabric.Image(img, {
               left: e.layerX,
               top: e.layerY,
               hasControls: true,
               cornerSize: 22,
               centeredScaling: true,
               rotatingPointOffset: 30,
               padding: 10
           });

           newImage.setControlsVisibility({
               mt: false,
               mb: false,
               ml: false,
               mr: false,
               bl: false,
               br: false,
               tl: false,
               tr: false,
               mtr: true,
               }
           );

         canvas.add(newImage);

         return false;
         }


         function handleDragEnd(e) {
             [].forEach.call(images, function (img) {
                 img.classList.remove('dragging');
             });
         }

            var images = document.querySelectorAll('.cone img, .puck img, .tyre img, .small-tyre img, .blue-circle img, .circle-numbers img, .arrow img, .hockey-goal img');
            [].forEach.call(images, function (img) {
                img.addEventListener('dragstart', handleDragStart, false);
                img.addEventListener('dragend', handleDragEnd, false);
            });
            canvasContainer.addEventListener('dragenter', handleDragEnter, false);
            canvasContainer.addEventListener('dragover', handleDragOver, false);
            canvasContainer.addEventListener('dragleave', handleDragLeave, false);
            canvasContainer.addEventListener('drop', handleDrop, false);


        // Scale canvas
        function resize(e) {
          var width = canvasContainer.offsetWidth;
          var height = canvasContainer.offsetHeight;
          var ratio = canvas.getWidth() /canvas.getHeight();
             if((width/height)>ratio){
               width = height*ratio;
             } else {
               height = width / ratio;
             }
          var scale = width / canvas.getWidth();
          var zoom = canvas.getZoom();
          zoom *= scale;
          canvas.setDimensions({ width: width, height: height });
          canvas.setViewportTransform([zoom , 0, 0, zoom , 0, 0])

        }
        window.addEventListener('load', resize, false);
        window.addEventListener('resize', resize, false);


      });
    }

canvas();

// Download canvas
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
downloadCanvas(this, 'canvas', 'taktiktavla.png');
}, false);


// Dropdowndist
function setBackgroundImageSelector() {
    document.getElementById("dropDownList").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropDowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropDowns.length; i++) {
      var openDropdown = dropDowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Highlight selected tool onclick
var activeColor1 = 'color1';
var $activeTool1 = $('.selected-drawing').click(function(e) {
    $activeTool1.removeClass(activeColor1);
    $(this).addClass(activeColor1);
});

var activeColor2 = 'color2';
var $activeTool2 = $('.selected-tool').click(function(e) {
    $activeTool2.removeClass(activeColor2);
    $(this).addClass(activeColor2);
});
