import { useState, useEffect } from "react";
import axios from "axios";

// tempdata used for testing before bulilding backend
import jsonData from '../assets/availableTables.json'


export default function AvailableTableTimes({ selectedDate, numberOfGuests, onTableSelect }) {
    const [availableTables, setAvailableTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const apiBaseUri = "https://localhost:7251/api";

    // DEBUG
    // console.log(availableTables);
    // console.log("Selected table: ", selectedTable);
    // console.log("Selected date: ", selectedDate);
    // console.log("Total guests: ", numberOfGuests);

    useEffect(() => {
        const fetchAvailableTables = async () => {
            try { 
                const selectedData = { selectedDate: selectedDate, numberOfGuests: numberOfGuests }
                
                const response = await axios.post(`${apiBaseUri}/Table/GetAvailableTableTimes`, selectedData);
                console.log(response.data);
                
                setAvailableTables(response.data);

            }
            catch (error) {
                console.log("Error fetching available tables: ", error)
                setAvailableTables([]); // Set to empty array in case of error
            }
        }
        
        // Call function
        fetchAvailableTables();
    }, [selectedDate])

    const handleSelectChange = (e) => {
        // Saves the reservation time from selected time slot
        const selectedTime = e.target.value;

        // Retrieve the table object matching the selected time
        const selectedTableObject = availableTables.find(
            (table) => table.availableTime === selectedTime);
        
        // Set selected table
        setSelectedTable(selectedTableObject);
        
        // Pass the selected table back to the parent (the reservation form)
        const returnData = { 
            tableId: selectedTableObject.id, 
            reservationTime: selectedTableObject.availableTime,
            // guests: numberOfGuests 
        };

        onTableSelect(returnData); 
    };


    return (
        <>
            {/* Available reservation times */}
            <div className="form-group mb-4">
                {/* <label htmlFor="availableTables">Select the time for your reservation</label> */}
                <select
                    id="availableTables"
                    className="form-select"
                    aria-label="Table time slots"
                    value={selectedTable ? selectedTable.availableTime : ''}
                    onChange={handleSelectChange}
                >
                    {/* Displaying available table time slots for the current day */}

                    {/* Default option */}
                    <option value="" disabled>Select a time for your reservation</option> 

                    {/* Mapping the available time slots */}
                    {availableTables.map((tableTimeSlot, i) => (
                        // Using available time as value as it is unique and tableId isn't (one table can appear multiple times)
                        <option key={i} value={tableTimeSlot.availableTime}>
                            {new Date(tableTimeSlot.availableTime).toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false})}
                        </option>
                    ))};
                </select>
            </div>
        </>
    )
}