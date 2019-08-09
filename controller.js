const SampleCtrl = ($scope) => {
    $scope.people = [
        {id:1, last: "Chacon", first:"Tony"},
        {id:2, last: "Doe", first:"John"},
        {id:3, last: "Perry", first: "Perry"}
    ];

    $scope.addPerson = () => {
        let newId = $scope.people.length;
        newId++;

        $scope.people.push(
            {id: newId, last: $scope.addLast, first: $scope.AddFirst}
        );
    };
};