(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let count = 0;
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === ISLAND) {
                    if (i > 0 && j == 0) {
                        count = (map[i - 1][j] == WATER) ? count + 1 : count;
                    }
                    if (i == 0 && j > 0) {
                        count = (map[i][j - 1] == WATER) ? count + 1 : count;
                    }
                    else {
                        count = (map[i][j - 1] == WATER && map[i - 1][j] == WATER) ? count + 1 : count;
                    }
                }
            }
        }
        return count;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
