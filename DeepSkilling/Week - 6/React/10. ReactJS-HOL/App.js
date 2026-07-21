import React from "react";


function App() {


  // Creating a single office object

  const office = {

    name: "DBS Office Space",

    rent: 50000,

    address: "Hyderabad"

  };



  // Creating list of office objects

  const offices = [

    {
      name: "Tech Park",
      rent: 55000,
      address: "Bangalore"
    },


    {
      name: "Cyber Towers",
      rent: 75000,
      address: "Hyderabad"
    },


    {
      name: "Business Hub",
      rent: 45000,
      address: "Chennai"
    },


    {
      name: "Corporate Plaza",
      rent: 90000,
      address: "Mumbai"
    }

  ];



  return (

    <div style={{textAlign:"center"}}>


      {/* Heading */}

      <h1>
        Office Space Rental App
      </h1>



      {/* Display Image */}

      <h2>
        Office Space Image
      </h2>



      <img

        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"

        alt="office"

        width="400"

        height="250"

      />



      {/* Display Single Office Details */}

      <h2>
        Office Details
      </h2>



      <p>
        Name : {office.name}
      </p>



      <p>
        Address : {office.address}
      </p>



      <p>

        Rent :

        <span

          style={{

            color:

            office.rent < 60000

            ? "red"

            : "green"

          }}

        >

          ₹{office.rent}

        </span>

      </p>





      {/* Display Multiple Offices */}

      <h2>
        Available Office Spaces
      </h2>




      {

        offices.map((item,index)=>(


          <div

            key={index}

            style={{

              border:"1px solid black",

              margin:"20px",

              padding:"15px"

            }}

          >



            <h3>

              {item.name}

            </h3>




            <p>

              Address : {item.address}

            </p>




            <p>

              Rent :


              <span

                style={{

                  color:

                  item.rent < 60000

                  ? "red"

                  : "green"

                }}

              >

                ₹{item.rent}

              </span>


            </p>



          </div>


        ))

      }



    </div>


  );

}



export default App;