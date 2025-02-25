// chess board is 8 x 8
// each vertices is (x,y) on the board (64 vertices)

// finds (one of the) shortest path between start and end
// prints number of moves and the path taken
const knightMoves = function(start, end){

}

// represent Vertex and its connections
// dynamically explore possible moves instead of actually creating graph structure
const Vertex = function([x,y]){
    if (x >= 1){
        leftUpTall = y<6 ? [x-1,y+2] : null;
        leftDownTall = y>1 ? [x-1,y-2] : null;
    }
    if (x >=2){
        leftUpFlat = y<7 ? [x-2,y+1] : null;
        leftDownFlat = y>0 ? [x-2,y-1] : null;
    }
    if (x <= 6){
        rightUpTall = y<6 ? [x+1,y+2] : null;
        rightDownTall = y>1 ? [x+1,y-2] : null;
    }
    if (x<=5){
        rightUpFlat = y<7 ? [x+2,y+1] : null;
        rightDownFlat = y>0 ? [x+2,y-1] : null;
    }
    return {leftUpTall,
        leftDownTall,
        leftUpFlat,
        leftDownFlat,
        rightUpTall,
        rightDownTall,
        rightUpFlat,
        rightDownFlat,
    };
}

const testVertex = new Vertex([2,1]);
console.log(testVertex);