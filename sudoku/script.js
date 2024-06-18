
 const selects = document.querySelectorAll('select');


 selects.forEach(select => {
     select.addEventListener('change', function() {
         const parentClass = this.parentElement.className;
         const selectClass = this.name;
         const value = this.value;
        const matBoxNumber = parseInt(parentClass.match(/\d+/)[0])-1;
         const matObjNumber = parseInt(selectClass.match(/\d+/)[0])-1;
         console.log(`№ parentClass: ${matBoxNumber}, № selectClass: ${matObjNumber}, value: ${value}`);
        handleSelect(matBoxNumber,matObjNumber,value);
     });
 });


function handleSelect(blk,obj,val){
    matr.updateObj(blk,obj,val);
    matr.inCheck(blk,obj);
    matr.rowCheck(blk,obj);
    matr.columnCheck(blk,obj);
    matr.updateMatrix();
    matr.drawMatrix()
}

class matrix{
    constructor(){ 
        let mat_obj = [] = document.getElementById("box").children;
        let mat = [[],[],[],[],[],[],[],[],[]];
        for(let i=0;i<mat_obj.length;i++){
            let buffer = [] = mat_obj[i].children;
            for(let j=0;j<buffer.length;j++){
                mat[i][j] = buffer[j].value; 
            }
        }
        this.matrix = mat;
        this.matrix_map = [
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[],[]]
        ];
        this.number_map = [
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]],
            [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1]]
        ];
        this.map_pull();
    }
    
    map_pull() {
        for(let i = 0;i < this.matrix.length;i++){
            for(let j = 0; j < this.matrix[i].length;j++){
                if(this.matrix[i][j] != 'NaN'){
                    this.matrix_map[i][j].push(this.matrix[i][j]);
                }else{
                    for(let y = 1;y<10;y++){
                        this.matrix_map[i][j].push(String(y));
                    }
                }
            }
        }
        console.log(this.matrix_map);
    }

    inCheck() {
        console.log("incheck");
        for(let i = 0;i < this.matrix_map.length;i++){
            for(let j = 0;j < this.matrix_map[i].length;j++){
                if(this.matrix_map[i][j].length == 1)continue;
                let buf= [] = this.matrix_map[i][j];
                for(let k = 0;k < 9;k++){
                    if(j == k) continue;
                    if(this.matrix_map[i][k].length == 1){
                        let index = buf.indexOf(this.matrix_map[i][k][0]);
                        if (index !== -1) {
                            buf.splice(index,1);
                        }
                    }else continue;
                }
                this.matrix_map[i][j] = [] = buf;
            }
        }
        console.log(this.matrix_map);
    }

    rowCheck(block, object) {
        console.log("rowcheck");
        let blocks = [];
        if (block >= 0 && block <= 2) blocks = [0, 1, 2];
        if (block >= 3 && block <= 5) blocks = [3, 4, 5];
        if (block >= 6 && block <= 8) blocks = [6, 7, 8];
    
        let objects = [];
        if (object >= 0 && object <= 2) objects = [0, 1, 2];
        if (object >= 3 && object <= 5) objects = [3, 4, 5];
        if (object >= 6 && object <= 8) objects = [6, 7, 8];
    
        let todelete = [];
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix_map[blocks[i]][objects[j]].length === 1) {
                    todelete.push(this.matrix_map[blocks[i]][objects[j]][0]);
                }
            }
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix_map[blocks[i]][objects[j]].length === 1) continue;
                for (let k = 0; k < todelete.length; k++) {
                    let index = this.matrix_map[blocks[i]][objects[j]].indexOf(todelete[k]);
                    if (index !== -1) {
                        this.matrix_map[blocks[i]][objects[j]].splice(index, 1);
                    }
                }
            }
        }
        console.log(this.matrix_map);
    }
    columnCheck(block, object) {
        console.log("columnCheck");
        let blocks = [];
        if (block % 3 === 0) blocks = [0, 3, 6];
        if (block % 3 === 1) blocks = [1, 4, 7];
        if (block % 3 === 2) blocks = [2, 5, 8];
    
        let objects = [];
        if (object % 3 === 0) objects = [0, 3, 6];
        if (object % 3 === 1) objects = [1, 4, 7];
        if (object % 3 === 2) objects = [2, 5, 8];
    
        let todelete = [];
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix_map[objects[i]][blocks[j]].length === 1) {
                    todelete.push(this.matrix_map[objects[i]][blocks[j]][0]);
                }
            }
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix_map[objects[i]][blocks[j]].length === 1) continue;
                for (let k = 0; k < todelete.length; k++) {
                    let index = this.matrix_map[objects[i]][blocks[j]].indexOf(todelete[k]);
                    if (index !== -1) {
                        this.matrix_map[objects[i]][blocks[j]].splice(index, 1);
                    }
                }
            }
        }
        console.log(this.matrix_map);
    }
    
    updateObj(block,object,value){
        this.matrix_map[block][object]=[value];
    }
    updateMatrix(){
        for(let i = 0;i<9;i++){
            for(let y = 0;y<9;y++){
                if(this.matrix_map[i][y].length>1)continue;
                this.matrix[i][y]=this.matrix_map[i][y][0];
            }
        }
    }
    drawMatrix(){
        let box = document.getElementById("box");
            for(let i = 0;i<9;i++){
                for(let y = 0;y<9;y++){
                    box.children[i].children[y].value = this.matrix[i][y];
                }
            }
    }
}

function rebuild(){
  var matr = new matrix;
    console.log(matr);
}

var matr = new matrix;

function fillnine(){
    for(let i = 0;i<9;i++){
        for(let y = 0;y<9;y++){
            matr.updateObj(i,y,9);
        }
    }
    matr.updateMatrix();
    matr.drawMatrix();
}
function setNULL(){
    for(let i = 0;i<9;i++){
        for(let y = 0;y<9;y++){
            matr.updateObj(i,y,'NaN');
        }
    }
    matr.updateMatrix();
    matr.drawMatrix();
}
function checkALLmatrix(){
    for(let i = 0;i<9;i++){
        for(let j = 0;j<9;j++){
            matr.inCheck(i,j);
            matr.rowCheck(i,j);
            matr.columnCheck(i,j);
        }
    }
    matr.updateMatrix()
    matr.drawMatrix()
}