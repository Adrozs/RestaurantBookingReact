import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";


export default function DatePicker() {
    const [selected, setSelected] = useState(new Date())

    return (
        <DayPicker
            className="form-control mb-4"
            startMonth={new Date()}
            showOutsideDays="true"
            mode="single"
            disabled={{before: new Date()}}
            
            required
            selected={selected}
            onSelect={setSelected}
            // footer={
            //     selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
            // }
        />
    )
}
