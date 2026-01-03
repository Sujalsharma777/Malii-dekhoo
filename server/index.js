const  express =  require("express")
const connectDB = require("./Modules/db.js")
const cors = require("cors")
const AuthRouter = require("./Routes/UserAuth.js")
const supplierRoute = require('./Routes/SupplierRoutes.js')
const cookieParser =  require('cookie-parser')
const customerRouter = require('./Routes/CustomerRoutes.js')
// connect DB 
connectDB()
// use express
const app = express()
// use json 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// use port
const port = process.env.PORT || 5000

// use cors 

app.use(cors({ 
  origin: "http://localhost:5173",
  credentials: true
}));
// use cookies
app.use(cookieParser());
 





app.use("/",AuthRouter)
 
app.use("/supplier",supplierRoute)

app.use('/customer', customerRouter)









app.listen(port, ( ) => console.log(`Server is running ${port}`)) 