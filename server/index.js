const  express =  require("express")
const connectDB = require("./Modules/db.js")
const cors = require("cors")
const AuthRouter = require("./Routes/UserAuth.js")

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 5000
app.use(express.json())
app.use(express.urlencoded({ extended: true }));    
const coroption =   {
    origin: "http://localhost:5173",
    credentials: true,
    
}
app.use(cors(coroption));




app.use("/",AuthRouter)







app.get('/', (req, res) => { 
    res.send('MERN Backend is running! HERER');
});





app.listen(port, ( ) => console.log(`Server is running ${port}`))