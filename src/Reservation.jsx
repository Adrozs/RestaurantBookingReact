import { useState } from "react";
import axios from "axios";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import AvailableTableTimes from "./components/AvailableTableTimes";



export default function Reservation() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reservationData, setReservationData] = useState(null);
    const [reservationDurationMinutes, setReservationDurationMinutes] = useState(0); // Maybe to be used in future (to set how long table is reserved for) already setup in backend if 0 is sent in it defaults to 120min (2 hours)
    const apiBaseUri = "https://localhost:7251/api";

    // DEBUG
    // console.log("RESERVATION DATA: ", reservationData);


    // Callback function from the AvailableTableTimes component - sets reservation data to the chosen table and time from the AvailableTableTimes component
    const handleTableSelection = (data) => {
        setReservationData(data);
    }

    // When form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if reservation data exists before proceeding
        if (!reservationData) {
            console.error("No resevation data available.")
            return;
        }

        const CreateReservation = async () => {
            try {
                // Make call to create customer (gets back customer id to use for booking) 
                const user = {
                    name: `${firstName} ${lastName}`,
                    phoneNumber: phoneNumber,
                };
                const createUserResponse = await axios.post(`${apiBaseUri}/User/CreateUser`, user);
                console.log(createUserResponse);

                const reservationRequest = {
                    reservationTime: reservationData.reservationTime,
                    guests: numberOfGuests,
                    customerId: createUserResponse.data,
                    tableId: reservationData.tableId
                };

                const createReservationResponse = await axios.post(`${apiBaseUri}/Reservation/CreateReservation`, reservationRequest);
                console.log(createReservationResponse);

                // Do modal popup to say reservation made!

                // Reset resevation data
            }
            catch (error) {
                console.log("Error creating reservation:", error);
            }
        }
       
    }



    return (
        <section className="container">
        <div className="row no-gutters">
        <div className="col col-lg-6 offset-lg-3">
            <h1 className="mb-4">Make a reservation</h1>

            <form onSubmit={handleSubmit}>
                {/* Customer info */}
                <div className="form-group mb-4">
                    {/* First name */}
                    <div className="input-group mb-2">
                        <span className="input-group-text">First name</span>
                        <input 
                            type="text" 
                            aria-label="First name" 
                            className="form-control" 
                            placeholder="Kalle"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    {/* Last name */}
                    <div className="input-group mb-2">
                        <span className="input-group-text">Last name</span>
                        <input 
                            type="text" 
                            aria-label="Last name" 
                            className="form-control"
                            placeholder="Svensson"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    {/* Phone number */}
                    <div className="input-group mb-2">
                        <span className="input-group-text">Phone</span>
                        <input
                            type="text"
                            aria-label="Phone number"
                            className="form-control"
                            placeholder="0701234567"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>

                {/* Number of guests */}
                <div className="form-group mb-4">
                    {/* <label htmlFor="selectGuests">Select the number of guests</label> */}
                    <select
                        id="selectGuests"
                        className="form-select"
                        aria-label="Guests"
                        value={numberOfGuests ? numberOfGuests: ""}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                    >
                        <option value="" disabled>Select number of guests</option> {/* Default option */}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                    <small className="form-text text-muted">For larger reservations contact the restaurant directly</small>
                </div>
                
                {/* Reservation date */}
                <div>
                    <label>Select reservation date</label>
                    <DayPicker
                        className="form-control mb-4"
                        startMonth={new Date()}
                        showOutsideDays="true"
                        mode="single"
                        disabled={{ before: new Date() }}
                        required
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />    
                </div>
                

                {/* Available table reservation times */}
                {/* Pass callback function to the component */}
                <AvailableTableTimes 
                    selectedDate={selectedDate} 
                    numberOfGuests={numberOfGuests} 
                    onTableSelect={handleTableSelection} 
                />


                <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-primary">Make reservation</button>
                </div>
            </form>
        </div>
        </div>
        </section>
    )
}