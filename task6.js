function p(coords){

    let perimeter = 0;
    const n = coords.length / 2;

    for (let i = 0; i < n; i++) {
        const x1 = coords[2 * i];
        const y1 = coords[2 * i + 1];

        const x2 = coords[2 * ((i + 1) % n)];
        const y2 = coords[2 * ((i + 1) % n) + 1];

        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);

        perimeter += distance;
    }

    return perimeter;
}

console.log(p([0, 0, 5, 5, 10, 0]))