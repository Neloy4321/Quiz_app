const mongoose = require('mongoose');
const Question = require('./models/Question');

// MongoDB Connection
const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/quiz-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected");
};

// Questions Data
const questions = [
    {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Mars", "Venus", "Earth", "Neptune"],
        answer: "Earth"
    },
    {
        question: "Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1945", "1947", "1939"],
        answer: "1945"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Fe", "Au", "Cu"],
        answer: "Au"
    },
    {
        question: "Which mountain is the tallest in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        answer: "Mount Everest"
    },
    {
        question: "Who wrote '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Ernest Hemingway"],
        answer: "George Orwell"
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Gobi Desert", "Arabian Desert", "Sahara Desert", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
        answer: "Nile River"
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },
    {
        question: "Who discovered penicillin?",
        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Jonas Salk"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: "Avocado"
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answer: "Mercury"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Claude Monet", "Vincent Van Gogh", "Pablo Picasso", "Salvador Dali"],
        answer: "Vincent Van Gogh"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        options: ["90°C", "100°C", "80°C", "110°C"],
        answer: "100°C"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "Indonesia", "Australia", "Mexico"],
        answer: "Australia"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "Which gas do humans exhale?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest continent by land area?",
        options: ["Africa", "North America", "Asia", "Europe"],
        answer: "Asia"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Jane Austen", "Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au", "Fe"],
        answer: "Ag"
    },
    {
        question: "Which animal never sleeps?",
        options: ["Dolphin", "Giraffe", "Bullfrog", "Jellyfish"],
        answer: "Bullfrog"
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        answer: "Portuguese"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Stephen Hawking", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the largest bird in the world?",
        options: ["Eagle", "Ostrich", "Penguin", "Condor"],
        answer: "Ostrich"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Korea", "Japan", "Thailand"],
        answer: "Japan"
    },
    {
        question: "What is the primary language in Egypt?",
        options: ["Arabic", "Turkish", "Hebrew", "Persian"],
        answer: "Arabic"
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
        answer: "Thomas Edison"
    },
    {
        question: "What is the deepest point in the ocean?",
        options: ["Mariana Trench", "Challenger Deep", "Puerto Rico Trench", "Java Trench"],
        answer: "Mariana Trench"
    },
    {
        question: "Which element is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Mother Teresa", "Marie Curie", "Jane Goodall", "Rosa Parks"],
        answer: "Marie Curie"
    },
    {
        question: "What is the capital of South Korea?",
        options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        answer: "Seoul"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Tiger", "Cheetah", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "What is the pH value of pure water?",
        options: ["6", "7", "8", "5"],
        answer: "7"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the main sugar in milk?",
        options: ["Sucrose", "Fructose", "Lactose", "Glucose"],
        answer: "Lactose"
    },
    {
        question: "Which country is the world's largest producer of coffee?",
        options: ["Colombia", "Vietnam", "Brazil", "Indonesia"],
        answer: "Brazil"
    },
    {
        question: "What is the most common blood type?",
        options: ["A+", "B+", "O+", "AB+"],
        answer: "O+"
    },
    {
        question: "Who is credited with inventing the World Wide Web?",
        options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
        answer: "Tim Berners-Lee"
    },
    {
        question: "What is the national animal of China?",
        options: ["Tiger", "Dragon", "Panda", "Phoenix"],
        answer: "Dragon"
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: "Venus"
    },
    {
        question: "What is the main ingredient in traditional Japanese sake?",
        options: ["Rice", "Wheat", "Barley", "Corn"],
        answer: "Rice"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
        answer: "Michelangelo"
    }
];


const seedQuestions = async () => {
    await Question.insertMany(questions);
    console.log("Questions Seeded!");
    process.exit();
};

connectDB().then(seedQuestions);
