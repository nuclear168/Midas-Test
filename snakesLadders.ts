function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
    // Create a map for ladders and snakes for quick lookup
    const travelMap = new Map<number, number>();
    for (const [start, end] of [...board.ladders, ...board.snakes]) {
        travelMap.set(start, end);
    }

    // Function to find the shortest path using Breadth-First Search
    function bfs(): number[] | null {
        const queue: { position: number; path: number[] }[] = [{ position: 1, path: [] }];
        const visited = new Set<number>();

        while (queue.length > 0) {
            const { position, path } = queue.shift()!;

            // Check all possible dice rolls from this position
            for (let roll = 1; roll <= 6; roll++) {
                let newPosition = position + roll;
                if (newPosition > 100) continue; // Skip invalid moves

                // Use ladder or snake if present
                newPosition = travelMap.get(newPosition) || newPosition;

                // Check if the position is already visited
                if (visited.has(newPosition)) continue;
                visited.add(newPosition);

                // Check for victory
                if (newPosition === 100) return [...path, roll];

                // Add the position to the queue for further exploration
                queue.push({ position: newPosition, path: [...path, roll] });
            }
        }
        return null;
    }

    // Find the shortest path to victory
    const result = bfs();
    return result || [];
}

// Example usage
const result = quickestPath({
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
});
console.log(result);