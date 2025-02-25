// chess board is 8 x 8
// each vertices is (x,y) on the board (64 vertices)

// finds (one of the) shortest path between start and end
// prints number of moves and the path taken
const knightMoves = function(start, end){
    if (start == end){
        console.log("You made it in 0 moves! Here's your path:");
        console.log(start);
        return;
    }
    if (!(typeof(start)== Array && typeof(end)==Array)){
        console.error("Please input start and end of knight as arrays.");
    }
    if (start.length != 2 || end.length != 2){
        console.error("Please input positions as [x,y].")
    }
    if (start[0] < 0 || start[0] >7 || start[1] <0 || start[0]>7){
        console.error("Start position out of bounds.");
    }
    if (end[0] < 0 || end[0] >7 || end[1] <0 || end[0]>7){
        console.error("End position out of bounds.");
    }
    // breadth-first search works best (queues)
    let pathQueue = [start];
    while (pathQueue.length >0){
        let currentPath = queue.shift();
        let currentVertex = new Vertex(currentPath[currentPath.length-1]); // the current vertex is last element of first path
        for (let nextSpot of currentVertex.values()){
            if (!currentVertex.isCoordsSameAsVertex(nextSpot)){
                let newPath = [...currentPath, [nextSpot]];
                if (nextSpot == end){
                    console.log(`You made it in ${newPath.length-1} moves! Here's your path:`);
                    for (let step of newPath){
                        console.log(step);
                    }
                    return;
                }
                pathQueue.push(newPath);
            }
        }
    }
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

    const isCoordsSameAsVertex = function([a,b]){
        return (x==a && y==b);
    }

    return {leftUpTall,
        leftDownTall,
        leftUpFlat,
        leftDownFlat,
        rightUpTall,
        rightDownTall,
        rightUpFlat,
        rightDownFlat,
        isCoordsSameAsVertex,
    };
}

const testVertex = new Vertex([2,1]);
console.log(testVertex);