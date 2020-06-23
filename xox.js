window.onload = function(){
    new Game().start();
}
function Game(){
    this.kutular = document.getElementsByTagName("td");
    this.sirakimde = document.querySelector(".sira1");
    this.oynanan = 1;
    this.kazananoyun = 0;
    this.Ohamlesi = [];
    this.Xhamlesi = [];
    this.winningCombinations= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
};
Game.prototype.start = function(){
    this.addXandOListener();
    this.addresetListener();
};
Game.prototype.addXandOListener = function(){
    for (var i = this.kutular.length - 1; i >= 0; i--){
        this.kutular[i].addEventListener("click", this.addXorO.bind(this));
    };
};
Game.prototype.addXorO = function(event){
    if (event.target.innerHTML.length === 0){
        if (this.oynanan % 2 === 0){
            this.Ohamlesi.push(parseInt(event.target.getAttribute("data-num")));
            event.target.innerHTML = "O";
            event.target.setAttribute("class", "O");
            this.sirakimde.innerHTML = "Sıra X'in!";
            this.oynanan++;
            this.kazananaBak(this.Ohamlesi, "O");
        } else {
            this.Xhamlesi.push(parseInt(event.target.getAttribute("data-num")));
            event.target.innerHTML = "X";
            event.target.setAttribute("class", "X");
            this.sirakimde.innerHTML = "Sıra O'nun";
            this.oynanan++;
            this.kazananaBak(this.Xhamlesi, "X");
        }
        if (this.oynanan >= 10){
            this.sirakimde.innerHTML = "Oyun Bitti!";
            var conf = confirm("Oyun berabere bitti, tekrar oynamak ister misin?");
        if(conf){
        this.resetle.bind(this);
            };
        };
    };
};
Game.prototype.addresetListener = function(){
    var resetbutonu = document.getElementById("temizle");
    resetbutonu.addEventListener("click", this.resetle.bind(this));
};
Game.prototype.kazananaBak = function(movesArray, name){
    for (i = 0; i < this.winningCombinations.length; i++) {
        this.kazananoyun = 0;
        
        for (var j = 0; j < this.winningCombinations[i].length; j++){
            if(movesArray.indexOf(this.winningCombinations[i][j]) !== -1){
            this.kazananoyun++;
            };
            if (this.kazananoyun === 3){
                document.getElementById("kazanan").innerHTML = "Tebrikler! " + name + " kazandı!";
                this.resetle.bind(this);
            };
        };
    };
};
Game.prototype.resetle = function(){
    for (var i = this.kutular.length - 1; i >= 0; i--) {
      this.kutular[i].innerHTML="";
      this.kutular[i].setAttribute("class","clear");
      kazanan.style.display = "none";
    };
    this.Ohamlesi = [];
    this.Xhamlesi = [];
    this.kazananoyun=0;
    this.oynanan = 1;
    this.sirakimde.innerHTML = "Sıra X'in";
  };