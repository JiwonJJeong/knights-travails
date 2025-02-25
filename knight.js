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
    if (!(Array.isArray(start) && Array.isArray(end))){
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
    let pathQueue = [[start]];
    while (pathQueue.length >0){
        let currentPath = pathQueue.shift();
        let currentVertex = new Vertex(currentPath[currentPath.length-1]); // the current vertex is last element of first path
        for (let nextSpot of currentVertex.possibleMoves){
            if (!currentVertex.isCoordsSameAsVertex(nextSpot)){
                let newPath = [...currentPath, nextSpot];
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
    let possibleMoves = [];
    if (x >= 1){
        y<6 ? possibleMoves.push([x-1,y+2]) : null;
        y>1 ? possibleMoves.push([x-1,y-2]) : null;
    }
    if (x >=2){
        y<7 ? possibleMoves.push([x-2,y+1]) : null;
        y>0 ? possibleMoves.push([x-2,y-1]) : null;
    }
    if (x <= 6){
        y<6 ? possibleMoves.push([x+1,y+2]) : null;
        y>1 ? possibleMoves.push([x+1,y-2]) : null;
    }
    if (x<=5){
        y<7 ? possibleMoves.push([x+2,y+1]) : null;
        y>0 ? possibleMoves.push([x+2,y-1]) : null;
    }

    const isCoordsSameAsVertex = function([a,b]){
        return (x==a && y==b);
    }

    return {possibleMoves,
        isCoordsSameAsVertex,
    }
};

testVertex = new Vertex([2,2]);
knightMoves([3,3],[4,3]);