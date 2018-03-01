(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map) {
        // todo: визуализировать работу алгоритма
        let i = 0,
            j = 0,
            count=0;
        let array_elements = document.getElementsByClassName('map__row');
        let array_nodes = [];

        for (let k = 0; k < array_elements.length; k++) {
            array_nodes[k] = array_elements[k].childNodes;
        }

        let res=document.getElementsByClassName("map__res")[0];
        res.innerText='Count: ' + Number(count);

        const border_island="1px solid rgb(255,0,0)";
        const border_water="1px solid #65a6ff";
        const border_between_islands="1px solid white";

        const interval = setInterval(() => {
            if (map[i][j] === ISLAND) {
                array_nodes[i][j].style.border = border_island;
                if (i > 0 && j == 0) {
                    array_nodes[i - 1][j].style.borderBottom = (map[i - 1][j] == ISLAND) ? border_between_islands : border_water;
                    array_nodes[i][j].style.borderTop = (map[i - 1][j] == ISLAND) ? border_between_islands : border_island;
                    count=(map[i - 1][j] == ISLAND) ? count : count+1;
                    res.innerText='Count: ' + Number(count);
                }
                else if (i == 0 && j > 0) {
                    array_nodes[i][j - 1].style.borderRight = (map[i][j - 1] == ISLAND) ? border_between_islands : border_water;
                    array_nodes[i][j].style.borderLeft = (map[i][j - 1] == ISLAND) ? border_between_islands : border_island;
                    count=(map[i][j-1] == ISLAND) ? count : count+1;
                    res.innerText='Count: ' + Number(count);
                }
                else if (i > 0 && j > 0) {
                    array_nodes[i - 1][j].style.borderBottom = (map[i - 1][j] == ISLAND) ? border_between_islands : border_water;
                    array_nodes[i][j - 1].style.borderRight = (map[i][j - 1] == ISLAND) ? border_between_islands : border_water;
                    array_nodes[i][j].style.borderTop = (map[i - 1][j] == ISLAND) ? border_between_islands : border_island;
                    array_nodes[i][j].style.borderLeft = (map[i][j - 1] == ISLAND) ? border_between_islands : border_island;
                    count=(map[i - 1][j] == ISLAND || map[i][j - 1] == ISLAND) ? count : count+1;
                    res.innerText='Count: ' + Number(count);
                }
            }
            else {
                array_nodes[i][j].style.border = border_water;
            }
            j += 1;
            if (j == map[i].length) {
                i += 1;
                j = 0;
                if (i == map.length) {
                    clearInterval(interval);
                }
            }
        }, 1000);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
