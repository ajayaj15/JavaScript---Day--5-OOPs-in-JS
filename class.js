<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="demo"></p>

    <script type="text/javascript">
        // 1 a

        class Movie {
            constructor(title, studio, rating){
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            }
        }

        // 1 b

        class MovieDefaultRating{
            constructor(title, studio, rating = 'average'){
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            }
        }

        // 1c
        class MovieArray{
            constructor(title, studio, rating){
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            }
            static getPG(movie){
                console.log('movie:', movie);
                return movie.filter(movie => movie.rating === "average");
            }
        }

        const movies = [
            new MovieArray("Movie 1", "Studio A", "average"),
            new MovieArray("Movie 2", "Studio B", "block buster"),
            new MovieArray("Movie 3", "Studio C", "average"),
            new MovieArray("Movie 4", "Studio D", "hit"),
            new MovieArray("Movie 5", "Studio E", "average"),
        ]

        const moviesResult = MovieArray.getPG(movies)
        console.log('movieData:', moviesResult)

        // task-1:

        class MovieInstance {
            constructor(title, studio, rating){
                this.title = title;
                this.studio = studio;
                this.rating = rating;
            }
        }

        const movieResultInstance = new MovieInstance('ayan', 'AVM', 'review');
        console.log('movieResultInstance:', movieResultInstance)


        // task-2:

        class Circle{
            constructor(radius, color){
                this.radius = radius;
                this.color = color;
            }

            getColor(){
                return this.color;
            }

            getRadius(){
                return this.radius
            }
            setRadius(radius){
                this.radius = radius;
            }

            setColor(color){
                this.color = color;
            }

            toString(){
                const string = `${this.radius} ${this.color}`;
                return string.toString();
            }

            getArea(){
                let area = (3.14 * this.getRadius() * this.getRadius());
                return (`area of cirlce ${area}`)
            }

            getCircumFrence(){
                let circumference = (3.14 * this.getRadius());
                return (`circumference of cirlce ${circumference}`)
            }
        }

        // Circle-data-1
        console.log('circleGetRadius:', circle1.getRadius());
        console.log('circleGetColor:', circle1.getColor())
    
       circle.setRadius(5);
       circle.setColor('green')
        console.log('setRadius:', circle.radius);
        console.log('circleGetRadius:', circle.color);

        // Circle-data-3
        const circle2 = new Circle(3, 'yellow');
        console.log('circle3:', circle2.toString());

        // Circle-data-3

        const circle3 = new Circle(3, 'brown');
        console.log('circle3:', circle3.getArea());


        //Circle-data-4

        const circle4 = new Circle(4, 'red');
        console.log('circle4:', circle4.getCircumFrence());


        // task-3: Write a “person” class to hold all the details.
        class Person{
            constructor(firstName, lastName, age, email, gender, address, profession, martialStatus){
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.email = email;
                this.gender = gender;
                this.address = address;
                this.profession = profession;
                this.martialStatus = martialStatus
            }

            getFullName(){
                return (`My Full Name is ${this.firstName} ${this.lastName}`)
            }

            getAge(){
                return (`My Age is ${this.age}`)
            }

            getEmail(){
                return (`My Email is ${this.email}`)
            }

            getGender(){
                return (`My Gender is ${this.gender}`)
            }

            getAddress(){
                return (`My Address is ${this.address}`)
            }

            updateEmail(new_email) {
        this.email = new_email;
            }
        }


        const personDetails = new  Person('Ajay', 'kumar', 29, 'ajayduos@gmail.com', 'male', 'no.42 v.v.koil street kosapet', 'Web Developer', 'unmarried');
       
        console.log(personDetails.getFullName());
        console.log(personDetails.getAge());
        console.log(personDetails.getEmail());
        console.log(personDetails.getGender());
        console.log(personDetails.getAddress());
        personDetails.updateEmail('ajayduos@gmail.com');
        console.log(personDetails);


        // Task-4: write a class to calculate the Uber price.
        
        class UberPriceCalculation{
            constructor(distanceMiles, durationMinutes){
                this.baseFare = 2.50;
                this.perMileRate = 1.50;
                this.perMinutes = 0.25;

                this.distanceMiles = distanceMiles;
                this.durationMinutes = durationMinutes;
            }

            getDistanceMiles(){
                return this.baseFare + (this.distanceMiles * this.perMileRate) + (this.perMinutes * this.durationMinutes)
            }
        }
        const distance = 25;
        const duration = 10;
        const calculation = new UberPriceCalculation(distance, duration);
        const result = calculation.getDistanceMiles();
        console.log('result:', result.toFixed(2))
        </script>
</body>
</html>   