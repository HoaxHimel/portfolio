var mixer = mixitup('.grid-portfolio-container');
//scrollify
     $(function() {
          $.scrollify({
            section : ".scrollify",
              setHeights: false,
               updateHash: false,
          });
        });
///Humbarger
function openMenu () {
    Document.getElementById('navbar').style.height = "100%";
}