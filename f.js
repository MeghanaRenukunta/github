fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
.then(res => res.json())
.then(data => myFunction(data.Employees))
.catch(error => console.log('error'))
    function myFunction(arr) {
        var i=0;
        for(i=0;i<3;i++){
            console.log( i + ": " + arr[i].Name )
        }
        var tdata=` <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>DateOfJoining</th>
                        <tr>
                    </thead>
                    <tbody>`
    for(let i=0;i<3;i++)
    {
        tdata += `<tr>
            <td>${i + 1}</td>
            <td>${arr[i].Name}</td>
            <td>${arr[i].Address}</td>
            <td>${arr[i].Salary}</td>
            <td>${arr[i].DateOfJoining}</td>
            </tr>`
    }
        document.getElementById('hello').innerHTML=tdata;
        var t="";
        for(var j=0;j<3;j++){
            if(arr[j].Salary>500000)
            {
                t+=arr[j].Name + "<br>";
            }
        }
        document.getElementById('sal').innerHTML=t;

        var ed="";
        for(var k=0;k<3;k++){
            let [d,m,y]=(arr[k].DateOfJoining).split("-");
            // console.log(d,m,y);
            if(m==12)
            {
                ed+=arr[k].Name + "<br>";
            }
        }
        document.getElementById('join').innerHTML=ed;
    }
        
















        // function constructTable(selector) {
        //     var cols = Headers(Employees, selector); 
        //     for (var i = 0; i < Employees.length; i++) {
        //         var row = $('<tr/>');  
        //         for (var colIndex = 0; colIndex < cols.length; colIndex++)
        //         {
        //             var val = Employees[i][cols[colIndex]];
        //             if (val == null) val = ""; 
        //                 row.append($('<td/>').html(val));
        //         }
        //         $(selector).append(row);
        //     }
        // }
         
        // function Headers(Employees, selector) {
        //     var columns = [];
        //     var header = $('<tr/>');
        //     for (var i = 0; i < Employees.length; i++) {
        //         var row = Employees[i];
        //         for (var k in row) {
        //             if ($.inArray(k, columns) == -1) {
        //                 columns.push(k);
        //                 header.append($('<th/>').html(k));
        //             }
        //         }
        //     }
        //     $(selector).append(header);
        //         return columns;
        // }      
