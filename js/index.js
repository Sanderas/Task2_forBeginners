(function (root) {
    var map = root.SHRI_ISLANDS.MAP;
    var count = root.SHRI_ISLANDS.solution(map);
    var visualize=root.SHRI_ISLANDS.visualizeSolution;

    document.querySelector('.outer').appendChild(
        root.SHRI_ISLANDS.render(map, count)
    );
    visualize(map);

})(this);
