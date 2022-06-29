const mock = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
];

function countIslands(image) {
    let result = 0;

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 1) {
                result++;

                removeOnes(image, i, j);
            }
        }
    }

    return result;
}

function removeOnes(image, x, y) {
    image[x][y] = '*';

    if (image[x] && image[x][y + 1] === 1) {
        removeOnes(image, x, y + 1);
    }

    if (image[x + 1] && image[x + 1][y] === 1) {
        removeOnes(image, x + 1, y);
    }

    if (image[x + 1] && image[x + 1][y - 1] === 1) {
        removeOnes(image, x + 1, y - 1);
    }

    if (image[x] && image[x][y - 1] === 1) {
        removeOnes(image, x, y - 1);
    }

    if (image[x - 1] && image[x - 1][y] === 1) {
        removeOnes(image, x - 1, y);
    }
}

console.log(countIslands(mock));
localStorage.setItem('test', JSON.stringify({ id: 0, label: "user", balance: 100 }));
const a = localStorage.getItem('test');
console.log(JSON.parse(a));