const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
]

                    //   Arrayin uzunluğun tapmaq

let len = employees.length
console.log(len);      


                  // At funksiyası ilə sonuncu elementin adını tapmaq
// let lastName = employees.at(4).name
// console.log(lastName);






                    // Length ilə sonuncu elementin adını tapmaq

// let last = employees[employees.length-1].name
// console.log(last);                         



                      // Arrayin sonuna yeni işçi əlavə etmək

// let newEmp = {id: 5,
//         name: 'Cavid',
//         age: 13,
//         position: 'backend',
//         salary: 100}
//         employees.push(newEmp)
//         console.log(employees);




                        // Arrayin evveline yeni işçi əlavə etmək

// let newEmp = {id: 5,
//             name: 'Cavid',
//             age: 13,
//             position: 'backend',
//             salary: 100}
//             employees.unshift(newEmp)
//             console.log(employees);



                                 // Arrayin sonundan işçi silmək

// let lastElem = employees.pop()
// console.log(employees);




                                   // Arrayin əvvəlindəb işçi silmək
// let lastElem = employees.shift()
// console.log(employees);



                            // İşçilərin adlarını join ilə yazdırmaq (Çətin).

// let names = employees.map( emp => emp.name ).join("-")

// console.log(names);






 
                                            // Arrayi tərsinə yazdırmaq

// let rev = employees.reverse()
// console.log(rev);


                            // İşçilərin içində vəzifəsi Frontend olan varmı(includes methodu ilə)


//   let check = false;

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].position.includes('Frotend')) {
//         check = true;
        
//     }
// }

// console.log(check);







                       // İşçilərin içində vəzifəsi Frontend olan varmı(some methodu ilə)



            // let check = employees.some(emp => emp.position == "Frontend")
            // console.log(check);





                     // Bütün işçilərin yaşı 18dən böyükdürmü 

            // let check = employees.every(emp => emp.age > 18 )
            // console.log(check);



                        // Vəzifəsi Frontend | Team Leader olan işçinin indexini tapmaq


            // let findIndex = employees.findIndex(index => index.position.includes("Frontend | Team Leader"));
            // console.log(findIndex);





                        // Vəzifəsi Frontend | Team Leader olan işçinin özünü tapmaq
            
            // let find = employees.find(emp => emp.position == "Frontend | Team Leader")
            // console.log(find);





                             // Yaşı 18dən böyük olan işçiləri göstərmək
            // const fltr = employees.filter(emp => emp.age >= 18)
            // console.log(fltr);





                            //    İşçilərin maaşlarının cəmin hesablamaq
            

        //     let sum = employees.reduce((acc,value) => {return acc + value.salary;},0
        
        
        // );
        // console.log(sum);



           






    













