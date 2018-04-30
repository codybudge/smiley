function CatLady(){
    var cats = [{
        name = "Silver",
        tolerance = 3,
        img = "//palcehold.it/200x100"
    },{
        name = "Frank",
        tolerance = 5,
        img = "//placehold.it/200x100"
    }]
    function drawCtas(){
        var template = `
        <div class="col">
        <section class="container">
            <div class="row" id="cat">
              
               <div class="col-3">
                <div class="card">
                  <img src="//placehold.it/200x100" alt="">
                  <div class="card-body">
                    <h4>name:</h4>
                    <h4>happiness:</h4>
                    <button>Pet</button>
                  </div>
                </div>
              </div>
        `
        document.getElementById("cat").innerHTML = template
    }
    drawCtas()
}