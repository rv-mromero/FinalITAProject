package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB
type Configuration struct {
	DB_USER string
	DB_PASSWORD string
	DB_NAME string
	DB_PORT string
}

var config Configuration
// enable cors because we're making a request to a 'third party' (our database) for information. So we'll make a function that can add this to the headers whenever needed.
func enableCors(w *http.ResponseWriter) { // cross origin resource sharing
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

type ErrorLog struct {
	ErrorCode   string `json:"error_code"`
	ResponseMsg string `json:"response_msg"`
}

type User struct {
	FirstName   string `json:"firstname"`
	LastName    string `json:"lastname"`
	Email       string `json:"email"`
	Phone       string `json:"phone"`
	PrefContact string `json:"pref_contact"`
	ReferredBy  string `json:"referred_by"`
	Comments    string `json:"comments"`
}
 
type Product struct {
	ID          string `json:"id"`
	Category    string `json:"category"`
	Name        string `json:"name"`
	Size 		string `json:"size"`
	Rating		string `json:"rating"`
	Description string `json:"description"`
	Price       string `json:"price"`
	ImgMain     string `json:"img_main"`
}



func getProducts(w http.ResponseWriter, r *http.Request) {
	fmt.Println("getting all plans")
	// set header content type
	w.Header().Set("Content-Type", "application/json")
	// Initialize the data structure we will return
	products := []Product{}
	// set the query we send to db
	query := "SELECT * FROM project_db.products;"
	// make sure we have cors in the header
	enableCors(&w)
	// rows = results of the query
	
	rows, err := db.Query(query)
	// if there is an error do this
	if err != nil {
		fmt.Println(err)
		return
	}

	// if there is NOT an error do this
	for rows.Next() {
		fmt.Println("row")
		// create a new variable and set its value to our existing struct
		var product Product
		// scan the rows and check for discrepancies and store in "err" so we know what the error was for
		err := rows.Scan(&product.ID, &product.Category, &product.Name, &product.Size, &product.Rating, &product.Description, &product.Price, &product.ImgMain)
		// if there is an error do this
		if err != nil {
			fmt.Println("error :: ", err)
			return
		}
		// append the returned values to our products variable
		products = append(products, product)
	}

	// let the client know the request worked
	w.WriteHeader(http.StatusOK)

	// return this via json data
	json.NewEncoder(w).Encode(products)

}

// Get all products from a specific category function
func getCategory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	// Paths can have variables. They are defined using the format {name} or {name:pattern}.
	// The names are used to create a map of route variables which can be retrieved calling mux.Vars()
	params := mux.Vars(r)
	productCategory := params["category"]
	products := []Product{}
	query := "SELECT * FROM products WHERE category = ?"
	enableCors(&w)

	rows, err := db.Query(query, productCategory)

	if err != nil {
		fmt.Println(err)
		return
	}

	for rows.Next() {
		var product Product
		err := rows.Scan(&product.ID, &product.Category, &product.Name, &product.Size, &product.Rating, &product.Description, &product.Price, &product.ImgMain)
		if err != nil {
			fmt.Println(err)
			return
		}
		products = append(products, product)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(products)

}

// Get single product function
func getProduct(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	productID := params["id"]
	products := []Product{}
	query := "SELECT * FROM products WHERE ID = ?"
	enableCors(&w)

	rows, err := db.Query(query, productID)
	if err != nil {
		fmt.Println(err)
		return
	}
	for rows.Next() {
		var product Product
		err := rows.Scan(&product.ID, &product.Category, &product.Name, &product.Size, &product.Rating, &product.Description, &product.Price, &product.ImgMain)
		if err != nil {
			fmt.Println(err)
			return
		}
		products = append(products, product)
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(products)

}

func main() {
	var err error
	config.DB_USER = os.Getenv("DB_USER")
	config.DB_PASSWORD = os.Getenv("DB_PASSWORD")
	config.DB_NAME = os.Getenv("DB_NAME")
	config.DB_PORT = os.Getenv("DB_PORT")

	configJson, _ := json.Marshal(config)
	fmt.Println("configJson :: ", string(configJson))

	db, err = sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(database:%s)/%s",config.DB_USER,config.DB_PASSWORD,config.DB_PORT,config.DB_NAME)) // docker setting
	if err != nil {
		panic(err.Error())
	}

	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}


	fmt.Println("Connected")



// Create route handler - Sets our URL endpoints
router := mux.NewRouter() 
router.HandleFunc("/products", getProducts).Methods("GET")                 // get all products
router.HandleFunc("/products/{id}", getProduct).Methods("GET")             // get single product
router.HandleFunc("/products/sort/{category}", getCategory).Methods("GET") // get single category of products
// router.HandleFunc("/users", setUser).Methods("POST")                       // post a users info to the db
// router.HandleFunc("/errors", logError).Methods("POST")                     // log an error to the db

//  Run server
fmt.Println("Server is running on localhost:8080") 
log.Fatal(http.ListenAndServe(":8080", router)) // specify port and router variable
}
